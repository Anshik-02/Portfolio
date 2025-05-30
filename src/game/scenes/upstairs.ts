import { DialogueManager1 } from "../components/dialogue-component-house";
import { DPad } from "../components/dpad-component";



export class Upstairs extends Phaser.Scene {
  me!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private doorZones: Phaser.GameObjects.Zone[] = [];
  private dialogueManager!: DialogueManager1;
  private lastDirection: string = "down";
    private dpad1!: DPad;
  constructor() {
    super("upstairs");
  }

  preload() {
    //@ts-ignore
    this.cursors = this.input.keyboard?.createCursorKeys();
  }
  create(data: any) {
const { x, y } = this.scene.settings.data as { x: number; y: number }

    this.dialogueManager = new DialogueManager1(this);
    this.cameras.main.fadeIn(500, 0, 0, 0);
    const map = this.make.tilemap({ key: "upstairs" });
    const tileset = map.addTilesetImage("Interior general", "indoor_tiles1");
    const groundLayer = map.createLayer("ground", tileset, 0, 0);
    const midtreeLayer = map.createLayer("mid", tileset, 0, 0);
    const onsLayer = map.createLayer("addons", tileset, 0, 0);
    groundLayer?.setCollisionByProperty({ colloid: true });
    onsLayer?.setCollisionByProperty({ colloid: true });
    midtreeLayer?.setCollisionByProperty({ colloid: true });
    onsLayer?.setDepth(9999);

    this.me = this.physics.add.sprite(x||130,y||180, "me", "me-0.png");
    this.me.setSize(this.me.width * 0.6, this.me.width * 0.9);
this.me.setCollideWorldBounds(true);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    const screenWidth = this.scale.width;
    const screenHeight = this.scale.height;

    const zoomX = screenWidth / map.widthInPixels;
    const zoomY = screenHeight / map.heightInPixels;
    const zoom = Math.max(zoomX, zoomY);

    this.dialogueManager.show("✨ WELCOME TO MY WORLD. This is where creativity meets code,where ideas come to life.Take your time, look around.")
    this.cameras.main.setZoom(zoom);
    const doorLayer = map.getObjectLayer("stairs");
    doorLayer?.objects.forEach((obj: any) => {
      const doorX = obj.x;
      const doorY = obj.y;
this.inputFlags = { up: false, down: false, left: false, right: false };
this.dpad1 = new DPad(this, 640, 440, 25, this.inputFlags);
      const doorZone = this.add.zone(
        doorX + obj.width / 2,
        doorY + obj.height / 2,
        obj.width,
        obj.height
      );
      this.physics.world.enable(doorZone);
      doorZone.body?.setAllowGravity(false);
      doorZone.body?.setImmovable(true);

      this.physics.add.overlap(this.me, doorZone, () => {
        const destination = obj.properties?.find(
          (p: any) => p.name === "destination"
        )?.value;
        const spawnX =
          obj.properties?.find((p: any) => p.name === "spawnx")?.value || 100;
        const spawnY =
          obj.properties?.find((p: any) => p.name === "spawny")?.value || 100;

        this.scene.start(destination, { x: spawnX, y: spawnY });
      });

      this.doorZones.push(doorZone);
    });

    this.cameras.main.startFollow(this.me, true, 0.08, 0.08);

    this.me.setDepth(this.me.y);
    this.anims.create({
      key: "face-down",
      frames: [{ key: "me", frame: "me-0.png" }],
    });
    this.anims.create({
      key: "face-run-down",
      frames: this.anims.generateFrameNames("me", {
        start: 0,
        end: 3,
        prefix: "me-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 10,
    });
    this.anims.create({
      key: "face-idle-down",
      frames: this.anims.generateFrameNames("me", {
        start: 0,
        prefix: "me-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 10,
    });

    this.anims.create({
      key: "face-run-up",
      frames: this.anims.generateFrameNames("me", {
        start: 13,
        end: 16,
        prefix: "me-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 8,
    });

    this.anims.create({
      key: "face-run-left",
      frames: this.anims.generateFrameNames("me", {
        start: 4,
        end: 7,
        prefix: "me-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 8,
    });

    this.anims.create({
      key: "face-run-right",
      frames: this.anims.generateFrameNames("me", {
        start: 8,
        end: 11,
        prefix: "me-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 8,
    });

    this.physics.add.collider(this.me, groundLayer);
    this.physics.add.collider(this.me, midtreeLayer);
    this.physics.add.collider(this.me, onsLayer);
  }

  update(t: number, dt: number): void {
    if (!this.cursors || !this.me) return;
this.dialogueManager.update()
    const speed = 150;
    const prevVelocity = this.me.body?.velocity.clone();
    this.me.body?.setVelocity(0);
if (this.cursors.left?.isDown || this.inputFlags.left) {
    this.me.setVelocityX(-speed);
    this.me.anims.play("face-run-left", true);
  this.lastDirection = "left";

} else if (this.cursors.right?.isDown || this.inputFlags.right) {
    this.me.setVelocityX(speed);
    this.me.anims.play("face-run-right", true);
  this.lastDirection = "right";

} else if (this.cursors.up?.isDown || this.inputFlags.up) {
    this.me.setVelocityY(-speed);
    this.me.anims.play("face-run-up", true);
  this.lastDirection = "up";

} else if (this.cursors.down?.isDown || this.inputFlags.down) {
    this.me.setVelocityY(speed);
    this.me.anims.play("face-run-down", true);
  this.lastDirection = "down";

} else{
 if (this.lastDirection === "left") {
    this.me.setTexture("me", "me-6.png");
} else if (this.lastDirection === "right") {
    this.me.setTexture("me", "me-8.png");
} else if (this.lastDirection === "up") {
    this.me.setTexture("me", "me-14.png");
} else {
    this.me.setTexture("me", "me-0.png");

}
} 
 this.me.body?.velocity.normalize().scale(speed);
  }
}
