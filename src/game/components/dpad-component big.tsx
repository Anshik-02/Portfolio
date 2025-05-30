export class DPad1 {
    constructor(scene, x, y, size, inputFlags) {
        this.scene = scene;
        this.inputFlags = inputFlags;

        const cam = scene.cameras.main;

        this.up = scene.add.image(x, y - size, 'arrow_up').setInteractive().setScrollFactor(0).setDepth(9999999999).setAlpha(.5);
        this.down = scene.add.image(x, y + size, 'arrow_down').setInteractive().setScrollFactor(0).setDepth(9999999999).setAlpha(.5);
        this.left = scene.add.image(x - size, y, 'arrow_left').setInteractive().setScrollFactor(0).setDepth(9999999999).setAlpha(.5);
        this.right = scene.add.image(x + size, y, 'arrow_right').setInteractive().setScrollFactor(0).setDepth(9999999999).setAlpha(.5);

        this._setupButton(this.up, 'up');
        this._setupButton(this.down, 'down');
        this._setupButton(this.left, 'left');
        this._setupButton(this.right, 'right');
    }

    _setupButton(button, dir) {
        button.setScale(1)
        button.on('pointerdown', () => {
        this.inputFlags[dir] = true;

        this.scene.tweens.add({
            targets: button,
            scale: 0.8,
            duration: 100,
            ease: 'Power1'
        });
    });

    button.on('pointerup', () => {
        this.inputFlags[dir] = false;

  
        this.scene.tweens.add({
            targets: button,
            scale:1 ,
            duration: 100,
            ease: 'Power1'
        });
    });

    button.on('pointerout', () => {
        this.inputFlags[dir] = false;


        this.scene.tweens.add({
            targets: button,
            scale: 1,
            duration: 100,
            ease: 'Power1'
        });
    });
    }
}
