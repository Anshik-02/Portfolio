export class DialogueManager1 {
  scene: Phaser.Scene;
  container: Phaser.GameObjects.Container;
  textBox: Phaser.GameObjects.Rectangle;
  text: Phaser.GameObjects.Text;
  currentText: string = "";
  index: number = 0;
  sectionType?: string;
  fullText: string = "";
  isTyping: boolean = false;
  typingEvent?: Phaser.Time.TimerEvent;
  onCompleteCallback?: () => void;
  autoCloseTimer?: Phaser.Time.TimerEvent;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    this.textBox = scene.add.rectangle(
      0, 0,
      400, 66,
      0x000000, 0.8
    )
    .setOrigin(0.5)
    .setStrokeStyle(2, 0xffffff);

    this.text = scene.add.text(
      -this.textBox.width / 2 + 15,
      -this.textBox.height / 2 + 10,
      "",
      {
        fontSize: "14px",
        fontFamily: "Pixelify Sans",
        color: "#ffffff",
        align:"center",
        wordWrap: { width: this.textBox.width - 20 },
      }
    );

    this.container = scene.add.container(
      scene.scale.width / 2, scene.scale.height - 50,
      [this.textBox, this.text]
    )
    .setScrollFactor(0)
    .setDepth(99999999999999999999)
    .setVisible(false);
  }

 show(text: string, sectionType?: string, onComplete?: () => void) {
  this.fullText = text;
  this.index = 0;
  this.currentText = "";
  this.isTyping = true;
  this.onCompleteCallback = onComplete;

  this.container.setVisible(true);
  this.text.setText("");

  if (this.typingEvent) {
    this.typingEvent.remove(false);
  }
  if (this.autoCloseTimer) {
    this.autoCloseTimer.remove(false);
  }
  this.typingEvent = this.scene.time.addEvent({
    delay: 50,
    callback: this.typeLetter,
    callbackScope: this,
    repeat: text.length - 1
  });

  this.sectionType = sectionType;
console.log("contro;",sectionType)

}


  typeLetter() {
    this.currentText += this.fullText[this.index];
    this.text.setText(this.currentText);
    this.index++;

   if (this.index >= this.fullText.length) {
  this.isTyping = false;
  if (this.typingEvent) {
    this.typingEvent.remove(false);
  }
  if (this.onCompleteCallback) {
    this.onCompleteCallback();
  }

 

  this.autoCloseTimer = this.scene.time.delayedCall(3000, () => {
    this.hide();
     if (this.sectionType) {
    window.dispatchEvent(new CustomEvent('show-section', { detail: this.sectionType }));
  }
  });
}

  }

  hide() {
    if (this.typingEvent) {
      this.typingEvent.remove(false);
    }
    if (this.autoCloseTimer) {
      this.autoCloseTimer.remove(false);
    }
    this.container.setVisible(false);
    this.currentText = "";
    this.fullText = "";
    this.index = 0;
    this.isTyping = false;
  }

  update() {
    this.container.setPosition(790, 470);
  }
}
