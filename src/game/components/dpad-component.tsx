export class DPad {
    constructor(scene, x, y, size, inputFlags) {
        this.scene = scene;
        this.inputFlags = inputFlags;

        const cam = scene.cameras.main;

        this.up = scene.add.image(x, y - size, 'arrow_up').setInteractive().setScrollFactor(0).setDepth(99999999).setAlpha(.5);
        this.down = scene.add.image(x, y + size, 'arrow_down').setInteractive().setScrollFactor(0).setDepth(999999999).setAlpha(.5);
        this.left = scene.add.image(x - size, y, 'arrow_left').setInteractive().setScrollFactor(0).setDepth(9999999900).setAlpha(.5);
        this.right = scene.add.image(x + size, y, 'arrow_right').setInteractive().setScrollFactor(0).setDepth(999999999).setAlpha(.5);

        this._setupButton(this.up, 'up');
        this._setupButton(this.down, 'down');
        this._setupButton(this.left, 'left');
        this._setupButton(this.right, 'right');
    }

    _setupButton(button, dir) {
        button.setScale(.5)
        button.on('pointerdown', () => {
        this.inputFlags[dir] = true;

        // Add click animation: shrink
        this.scene.tweens.add({
            targets: button,
            scale: 0.3,
            duration: 100,
            ease: 'Power1'
        });
    });

    button.on('pointerup', () => {
        this.inputFlags[dir] = false;

        // Animate back to normal size
        this.scene.tweens.add({
            targets: button,
            scale: .5,
            duration: 100,
            ease: 'Power1'
        });
    });

    button.on('pointerout', () => {
        this.inputFlags[dir] = false;

        // Ensure it returns to normal if pointer moves away
        this.scene.tweens.add({
            targets: button,
            scale: .5,
            duration: 100,
            ease: 'Power1'
        });
    });
    }
}
