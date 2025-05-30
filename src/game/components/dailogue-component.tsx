export class DialogueManager {
  scene: Phaser.Scene;
  container: Phaser.GameObjects.Container;
  textBox: Phaser.GameObjects.Rectangle;
  text: Phaser.GameObjects.Text;
  currentText: string = "";
  index: number = 0;
  fullText: string = "";
  isTyping: boolean = false;
  typingEvent?: Phaser.Time.TimerEvent; 

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    this.textBox = scene.add.rectangle(0, 0, 700, 120, 0x000000, 0.8)
      .setStrokeStyle(2, 0xffffff)
      .setOrigin(0.5);
    this.textBox.setDepth(9999);

    this.text = scene.add.text(0, -40, "", {
      fontSize: "20px",
      color: "#ffffff",
      wordWrap: { width: 600, useAdvancedWrap: true },
      align: "left"
    }).setOrigin(0.5, 0);

    this.container = scene.add.container(400, 300, [this.textBox, this.text]);
    this.container.setVisible(false);
    this.container.setDepth(9999);
  }

  show(text: string) {

    if (this.typingEvent) {
      this.typingEvent.remove(false);
      this.typingEvent = undefined;
    }

    this.fullText = text;
    this.currentText = "";
    this.index = 0;
    this.isTyping = true;
    this.container.setVisible(true);

    this.typingEvent = this.scene.time.addEvent({
      delay: 40,
      callback: () => {
        this.currentText += this.fullText[this.index];
        this.text.setText(this.currentText);
        this.index++;
        if (this.index >= this.fullText.length) {
          this.isTyping = false;
          if (this.typingEvent) {
            this.typingEvent.remove(false);
            this.typingEvent = undefined;
          }
        }
      },
      repeat: this.fullText.length - 1
    });
  }

  update() {
    const cam = this.scene.cameras.main;
    this.container.setPosition(
      cam.scrollX + cam.width / 2,
      cam.scrollY + cam.height - 200
    );
  }

  hide() {
    console.log("DialogueManager: hide() called");

    if (this.typingEvent) {
      this.typingEvent.remove(false);
      this.typingEvent = undefined;
    }
    this.container.setVisible(false);
  }
}
