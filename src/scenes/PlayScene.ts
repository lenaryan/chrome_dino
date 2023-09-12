import Phaser from "phaser";
import { SpriteWithDynamicBody } from "../types";
import { Player } from "../entities/Player";

class PlayScene extends Phaser.Scene {
    player: Player;
    startTrigger: SpriteWithDynamicBody;

    get gameHeight() {
        return this.game.config.height as number;
    }

    constructor() {
        super('PlayScene');
    }

    create() {
        this.createEnv();
        this.createPlayer();
        this.startTrigger = this.physics.add.sprite(0, 10, null)
            .setAlpha(0)
            .setOrigin(0, 1);
        this.registerPlayerControl();

        this.physics.add.overlap(this.startTrigger, this.player, () => {
            console.log('collision');
            
        })
    }

    createEnv() {
        this.add
            .tileSprite(0, this.gameHeight, 88, 26, 'ground')
            .setOrigin(0, 1);
    }

    createPlayer() {
        this.player = new Player(this, 0, this.gameHeight, 'dino');
    }

    registerPlayerControl() {
        const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        spaceBar.on('down', () => {
            this.player.setVelocityY(-1600);
            
        })
    }
}

export default PlayScene;