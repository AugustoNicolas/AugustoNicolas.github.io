// PreloadScene: Loads all textures and map data (DEC-005)

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Create Loading Bar Graphic Elements
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Progress bar background (outline)
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x1f140e, 0.8);
        progressBox.lineStyle(4, 0xd4a373, 1);
        progressBox.strokeRect(width / 2 - 160, height / 2 - 25, 320, 50);
        progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

        // Progress bar filler graphic
        const progressBar = this.add.graphics();

        // Loading text
        const loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 60,
            text: 'LOADING MUSEUM...',
            style: {
                font: '16px "Press Start 2P"',
                fill: '#ffd700'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        // Percentage text
        const percentText = this.make.text({
            x: width / 2,
            y: height / 2 + 60,
            text: '0%',
            style: {
                font: '14px "Pixelify Sans"',
                fill: '#a78bfa'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        // Load listeners
        this.load.on('progress', (value) => {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xd4a373, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 - 15, 300 * value, 30);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            this.scene.start('MainScene');
        });

        // Load Tilesets (Relative paths from map JSON are loaded here)
        this.load.image('wooden_house', 'img/museum/tilesets/Wooden House.png');
        this.load.image('wooden_walls', 'img/museum/tilesets/Wooden_House_Walls_Tilset.png');
        this.load.image('basic_furniture', 'img/museum/Objects/Basic Furniture.png');
        this.load.image('decorations', 'img/museum/Objects/decorations_BR.png');

        // Load JSON map data
        this.load.tilemapTiledJSON('museum_layout', 'img/museum/maps/museum_layout.json');

        // Load Player Spritesheet (DEC-004)
        this.load.spritesheet('knight_player', 'img/museum/characters/KnightMCAnimationsSHEET.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }
}
