// MainScene: Core game mechanics, animations, physics, and interactions (DEC-007)

import { exhibitsData } from '../exhibits_data.js';

export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    create() {
        // 1. Create Tilemap and Layers
        const map = this.make.tilemap({ key: 'museum_layout' });
        
        // Match tileset names from map JSON
        const woodenHouseTileset = map.addTilesetImage('wooden_house', 'wooden_house');
        const woodenWallsTileset = map.addTilesetImage('wooden_walls', 'wooden_walls');
        const basicFurnitureTileset = map.addTilesetImage('basic_furniture', 'basic_furniture');
        const decorationsTileset = map.addTilesetImage('decorations', 'decorations');
        
        const tilesets = [woodenHouseTileset, woodenWallsTileset, basicFurnitureTileset, decorationsTileset];

        // Draw Ground and Wall layers
        this.groundLayer = map.createLayer('Ground', tilesets, 0, 0);
        this.wallsLayer = map.createLayer('Walls', tilesets, 0, 0);
        this.furnitureLayer = map.createLayer('Furniture', tilesets, 0, 0);
        
        // Collisions layer (contains invisible collision blocks, set to hidden)
        this.collisionsLayer = map.createLayer('Collisions', tilesets, 0, 0);
        this.collisionsLayer.setVisible(false);
        this.collisionsLayer.setCollisionByExclusion([-1]);

        // 2. Setup Player (DEC-004)
        // Spawn location at center-lobby: x=408 (25*16+8), y=488 (30*16+8)
        this.player = this.physics.add.sprite(405, 430, 'knight_player');
        
        // Sized feet hitbox: 16 width, 12 height. Frame is 48x48.
        // Center hitbox: (48 - 16)/2 = 16 offset X. Feet are at the bottom: 48 - 12 = 36 offset Y.
        this.player.body.setSize(16, 12);
        this.player.body.setOffset(16, 36);
        this.player.setCollideWorldBounds(true);

        // Bind physics collision
        this.physics.add.collider(this.player, this.collisionsLayer);

        // 3. Configure Player Animations (8 frames loops, DEC-004)
        const anims = this.anims;

        // Idle Animations (Row 0-3)
        anims.create({
            key: 'idle-down',
            frames: anims.generateFrameNumbers('knight_player', { start: 0, end: 7 }),
            frameRate: 8,
            repeat: -1
        });
        anims.create({
            key: 'idle-up',
            frames: anims.generateFrameNumbers('knight_player', { start: 16, end: 23 }),
            frameRate: 8,
            repeat: -1
        });
        anims.create({
            key: 'idle-right',
            frames: anims.generateFrameNumbers('knight_player', { start: 8, end: 15 }),
            frameRate: 8,
            repeat: -1
        });

        // Walking (Run) Animations (Row 4-7)
        anims.create({
            key: 'walk-down',
            frames: anims.generateFrameNumbers('knight_player', { start: 24, end: 31 }),
            frameRate: 10,
            repeat: -1
        });
        anims.create({
            key: 'walk-up',
            frames: anims.generateFrameNumbers('knight_player', { start: 40, end: 47 }),
            frameRate: 10,
            repeat: -1
        });
        anims.create({
            key: 'walk-right',
            frames: anims.generateFrameNumbers('knight_player', { start: 32, end: 39 }),
            frameRate: 10,
            repeat: -1
        });

        // Set default animation
        this.player.play('idle-down');
        this.lastDirection = 'down';

        // 4. Setup Input Controls
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            interact: Phaser.Input.Keyboard.KeyCodes.E
        });

        // 5. Configure Camera (DEC-007)
        const camera = this.cameras.main;
        camera.startFollow(this.player, true, 0.1, 0.1); // 10% follow LERP smoothing
        // TODO: [GATE-12-MOBILE-RESPONSIVE] Adjust camera zoom (e.g. 1.5x-2x) to make the map items smaller
        camera.setZoom(3); // 3x Zoom
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        // 6. Setup In-game Prompts & Bookcase references
        // Floating prompt bubble above interactable objects
        this.promptBubble = this.add.container(0, 0);
        this.promptBubble.setVisible(false);
        this.promptBubble.setDepth(100);

        // Bubble background
        const bubbleBg = this.add.graphics();
        bubbleBg.fillStyle(0xfefae0, 0.9); // Cream background
        bubbleBg.lineStyle(1.5, 0x2e1f15, 1); // Dark brown border
        bubbleBg.fillRoundedRect(-50, -10, 100, 20, 4);
        bubbleBg.strokeRoundedRect(-50, -10, 100, 20, 4);
        
        // Bubble text
        const bubbleText = this.add.text(0, 0, '[E] INTERACT', {
            fontFamily: 'Pixelify Sans',
            fontSize: '9px',
            color: '#2e1f15',
            fontWeight: 'bold'
        }).setOrigin(0.5, 0.5);

        this.promptBubble.add([bubbleBg, bubbleText]);

        // Bobbing floating animation for the prompt bubble
        this.tweens.add({
            targets: this.promptBubble,
            y: '-=4',
            duration: 600,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Track bookcase state (secret room path)
        this.bookcaseTileX = 25;
        this.bookcaseTileY = 9;
        this.isBookcaseOpened = false;

        // HTML Modal elements selector
        this.setupModalListeners();


        // 6. Interaccion con obj (stands)
        this.exhibitZones = this.physics.add.staticGroup();

        const objectsLayer = map.getObjectLayer('Exhibits'); // Lee la capa de objetos
        if (objectsLayer) {
            objectsLayer.objects.forEach(obj => {
                // obj.x y obj.y son las coordenadas EXACTAS que dibujaste en Tiled
                // Creamos una zona de interacción invisible del mismo tamaño que dibujaste
                // CORRECCIÓN: Centramos la zona sumando la mitad del ancho y alto
                const zone = this.add.zone(obj.x + obj.width / 2, obj.y + obj.height / 2, obj.width, obj.height);           
                this.physics.add.existing(zone, true); // true hace que sea un cuerpo estático
                
                // Le guardamos la ID del nombre que le pusiste en Tiled
                zone.setData('exhibitId', obj.name); 
                
                this.exhibitZones.add(zone);
            });
        }
    }

    update() {
        // Skip updates if the game is paused (modal is active)
        if (!this.input.keyboard.enabled) {
            this.player.body.setVelocity(0);
            this.player.anims.stop();
            return;
        }

        // 1. Process movement controls
        let vx = 0;
        let vy = 0;
        const speed = 130; // 130 pixels per second (DEC-007)

        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            vx = -speed;
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            vx = speed;
        }

        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            vy = -speed;
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            vy = speed;
        }

        // Normalize velocity vector for diagonal movement
        if (vx !== 0 && vy !== 0) {
            vx *= 0.7071;
            vy *= 0.7071;
        }

        this.player.body.setVelocity(vx, vy);

        // 2. Play animations based on movement
        if (vx < 0) {
            this.player.play('walk-right', true);
            this.player.setFlipX(true);
            this.lastDirection = 'right';
        } else if (vx > 0) {
            this.player.play('walk-right', true);
            this.player.setFlipX(false);
            this.lastDirection = 'right';
        } else if (vy < 0) {
            this.player.play('walk-up', true);
            this.lastDirection = 'up';
        } else if (vy > 0) {
            this.player.play('walk-down', true);
            this.lastDirection = 'down';
        } else {
            // Player stopped, play idle animations
            this.player.play('idle-' + this.lastDirection, true);
        }

        // 3. Check proximity to exhibits
        let nearZone = null;

        this.physics.overlap(this.player, this.exhibitZones, (player, zone) => {
            nearZone = zone;
        });

        if (nearZone) {
            const id = nearZone.getData('exhibitId');
            // Buscamos los datos en exhibitsData usando la ID
            const data = exhibitsData.find(e => e.id === id);
            
            if (data) {
                // Activamos la burbuja flotante sobre la posición de la zona
                this.promptBubble.setPosition(nearZone.x, nearZone.y - 16);
                this.promptBubble.setVisible(true);

                if (Phaser.Input.Keyboard.JustDown(this.cursors.space) || Phaser.Input.Keyboard.JustDown(this.wasd.interact)) {
                    this.openProjectModal(data);
                }
            }
        } else {
            // Si no está cerca de un stand, verificamos la estantería secreta
            const isNearBookcase = this.checkInteractions();
            if (!isNearBookcase) {
                this.promptBubble.setVisible(false);
            }
        }
    }

    checkInteractions() {
        const playerX = this.player.body.center.x;
        const playerY = this.player.body.center.y;
        
        // Range check the secret bookcase
        const bookcaseX = this.bookcaseTileX * 16 + 8;
        const bookcaseY = this.bookcaseTileY * 16 + 8;
        const distanceToBookcase = Phaser.Math.Distance.Between(playerX, playerY, bookcaseX, bookcaseY);
        
        let isNearBookcase = distanceToBookcase < 32;

        if (isNearBookcase && !this.isBookcaseOpened) {
            // Show bubble above bookcase
            this.promptBubble.setPosition(bookcaseX, bookcaseY - 8);
            this.promptBubble.setVisible(true);

            if (Phaser.Input.Keyboard.JustDown(this.cursors.space) || Phaser.Input.Keyboard.JustDown(this.wasd.interact)) {
                this.openSecretBookcase();
            }
            
            return true;
        }

        return false;
    }

    // Modal UI Handlers
    openProjectModal(exhibit) {
        // Disable keyboard capture in Phaser to release input fields
        this.input.keyboard.enabled = false;
        this.player.body.setVelocity(0);
        this.player.anims.stop();

        // Populate Modal Fields (DEC-008)
        document.getElementById('modal-project-title').textContent = exhibit.displayName;
        document.getElementById('modal-project-type').textContent = exhibit.projectType;
        document.getElementById('modal-project-desc').textContent = exhibit.description;

        // Set preview image
        const imgEl = document.getElementById('modal-project-img');
        if (exhibit.previewImage) {
            imgEl.src = exhibit.previewImage;
            imgEl.style.display = 'block';
        } else {
            imgEl.style.display = 'none';
        }

        // Build tech stack spans
        const stackGrid = document.getElementById('modal-tech-stack');
        stackGrid.innerHTML = '';
        exhibit.techStack.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            stackGrid.appendChild(span);
        });

        // Set action button behavior
        const actionBtn = document.getElementById('modal-action-btn');
        if (exhibit.actionType === 'demo') {
            actionBtn.style.display = 'block';
            actionBtn.textContent = 'Launch Demo';
            actionBtn.onclick = () => {
                window.open(exhibit.actionUrl, '_blank', 'width=1000,height=700');
            };
        } else {
            // Details only - hide action button
            actionBtn.style.display = 'none';
        }

        // Slide modal in
        document.getElementById('project-modal').classList.add('active');
    }

    closeProjectModal() {
        document.getElementById('project-modal').classList.remove('active');
        
        // Re-enable Phaser keyboard listeners on next frame to prevent instant interactions
        this.time.delayedCall(100, () => {
            this.input.keyboard.enabled = true;
        });
    }

    setupModalListeners() {
        // Bind close buttons
        const closeBtn = document.getElementById('modal-close-btn');
        closeBtn.onclick = () => {
            this.closeProjectModal();
        };

        // Close on ESC keypress
        this.input.keyboard.on('keydown-ESC', () => {
            const modal = document.getElementById('project-modal');
            if (modal.classList.contains('active')) {
                this.closeProjectModal();
            }
        });
    }

    // Secret Room Slider Bookcase Reveal
    openSecretBookcase() {
        this.isBookcaseOpened = true;
        this.promptBubble.setVisible(false);

        // Suspend inputs briefly for secret animation scene
        this.input.keyboard.enabled = false;
        this.player.body.setVelocity(0);
        this.player.anims.stop();

        // 1. Remove Bookcase tile block on the walls layer
        this.wallsLayer.removeTileAt(this.bookcaseTileX, this.bookcaseTileY);

        // 2. Spawn a temporary Bookcase sprite to slide it smoothly
        const bookcaseX = this.bookcaseTileX * 16 + 8;
        const bookcaseY = this.bookcaseTileY * 16 + 8;
        
        // GID 80 is the bookcase sprite from basic furniture
        const bookcaseSprite = this.add.image(bookcaseX, bookcaseY, 'basic_furniture', 80 - 51);
        bookcaseSprite.setDepth(10);

        // 3. Slide bookcase sprite 24 pixels to the right (tween)
        this.tweens.add({
            targets: bookcaseSprite,
            x: '+=24',
            duration: 1500,
            ease: 'Power2.easeInOut',
            onComplete: () => {
                // Remove collision on row 9, col 25 so player can cross
                this.collisionsLayer.removeTileAt(this.bookcaseTileX, this.bookcaseTileY);
                
                // Camera shake effect for structural impact
                this.cameras.main.shake(300, 0.005);
                
                // Restore player keyboard control
                this.input.keyboard.enabled = true;
            }
        });
    }
}
