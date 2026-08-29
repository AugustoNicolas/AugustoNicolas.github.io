// Phaser Game Configuration and Boot Script (DEC-005)

import { PreloadScene } from './scenes/PreloadScene.js';
import { MainScene } from './scenes/MainScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false // Set to true to inspect hitboxes if collisions act up
        }
    },
    render: {
        pixelArt: true, // Implements DEC-002: disables linear filtering for crisp pixel textures
        antialias: false
    },
    // TODO: [GATE-12-MOBILE-RESPONSIVE] Fix infinite container resize feedback loop and configure full viewport fullscreen display
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [PreloadScene, MainScene]
};

// Initialize Phaser
const game = new Phaser.Game(config);
export default game;
