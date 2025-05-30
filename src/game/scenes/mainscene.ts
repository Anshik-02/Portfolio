import { Scene } from "phaser";
import NPCManager from "../components/Npc-manager";
import { DialogueManager1 } from "../components/dialogue-component-house";
import { DPad1 } from "../components/dpad-component big";

export default class MainScene extends Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private me!: Phaser.Physics.Arcade.Sprite;
  private inputFlags: { up: boolean; down: boolean; left: boolean; right: boolean };
  private infoZones: Phaser.GameObjects.Zone[] = [];

  private dialogueManager!: DialogueManager1;
  private doorZones: Phaser.GameObjects.Zone[] = [];
  private npcManager!: NPCManager;
  private dpad1!: DPad1;
  private lastDirection: string = "down";

  constructor() {
    super("minimap");
  }

  preload() {
    this.cursors = this.input.keyboard?.createCursorKeys();
    this.load.image("tiles", "assets/Tilesets/Outside.png");
    this.load.tilemapTiledJSON("minimap", "assets/main-map/finalmap.tmj");
  }

  create() {
    this.dialogueManager = new DialogueManager1(this);
    const { x, y } = this.scene.settings.data as { x: number; y: number };

    const map = this.make.tilemap({ key: "minimap" });
    const tileset = map.addTilesetImage("Outside", "tiles");

    this.inputFlags = { up: false, down: false, left: false, right: false };
    this.dpad1 = new DPad1(this, 460, 500, 50, this.inputFlags);

    // TEXT LAYERS
    const textLayers = [
      { layerName: "hui", text: "CITY MAP" },
      { layerName: "about", text: "ABOUT ME" },
      { layerName: "project", text: "PROJECTS" },
      { layerName: "Fun", text: "FUN FACTS" },
      { layerName: "connect", text: "CONNECT" },
      { layerName: "skill", text: "SKILLS" },
      { layerName: "resume", text: "RESUME" },
    ];

    textLayers.forEach(({ layerName, text }) => {
      const layer = map.getObjectLayer(layerName);
      layer?.objects.forEach((obj: any) => {
        if (obj.text?.text === text && typeof obj.x === "number" && typeof obj.y === "number") {
          const createdText = this.add.text(obj.x, obj.y, obj.text.text, {
            color: "black",
            fontFamily: "Pixelify Sans",
            wordWrap: { width: obj.width || 200 },
            align: "center"
          }).setOrigin(0,0);
createdText.setBackgroundColor("white")


          createdText.setDepth(5);
        }
      });
    });

    const groundLayer = map.createLayer("ground layer", tileset, 0, 0);
    const midtreeLayer = map.createLayer("midtree", tileset, 0, 0);
    const houseLayer = map.createLayer("house", tileset, 0, 0);
    const OnsLayer = map.createLayer("top", tileset, 0, 0);

    groundLayer?.setCollisionByProperty({ colloid: true });
    houseLayer?.setCollisionByProperty({ colloid: true });
    midtreeLayer?.setCollisionByProperty({ colloid: true });
    OnsLayer?.setCollisionByProperty({ colloid: true });

    this.cameras.main.fadeIn(500, 0, 0, 0);

    this.me = this.physics.add.sprite(x, y, "me", "me-0.png");
    this.me.setCollideWorldBounds(true);
    this.me.setSize(this.me.width * 0.6, this.me.width * 0.9);

    this.npcManager = new NPCManager(this, this.me, this.dialogueManager);
    this.npcManager.spawnFromTiled(map);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setZoom(1.5);
    this.cameras.main.startFollow(this.me, true, 0.08, 0.08);
    this.me.setDepth(this.me.y);
    OnsLayer?.setDepth(999);

    if (!this.sound.get('bgMusic')) {
      const music = this.sound.add('bgMusic', { loop: true, volume: 0.07 });
      music.play();
    }

    // INTERACTABLES
    map.getObjectLayer("interactables")?.objects.forEach((obj: any) => {
      const zone = this.add.zone(obj.x + obj.width / 2, obj.y + 30, obj.width, obj.height);
      this.physics.world.enable(zone);
      zone.body?.setAllowGravity(false);
      zone.body?.setImmovable(true);

      const textProp = obj.properties?.find((p: any) => p.name === "text");
      (zone as any).dialogueText = textProp?.value;
console.log(textProp)
      this.infoZones.push(zone);

      this.physics.add.overlap(this.me, zone, () => {
        if ((zone as any).dialogueText) {
          this.dialogueManager.show((zone as any).dialogueText);
        }
      });
    });

    // DOORS
    const doorLayer = map.getObjectLayer("doors");
    doorLayer?.objects.forEach((obj: any) => {
      const doorX = obj.x;
      const doorY = obj.y;

      const doorZone = this.add.zone(doorX + obj.width / 2, doorY + obj.height / 2, obj.width, obj.height);
      this.physics.world.enable(doorZone);
      doorZone.body?.setAllowGravity(false);
      doorZone.body?.setImmovable(true);

      this.physics.add.overlap(this.me, doorZone, () => {
        const destination = obj.properties?.find((p: any) => p.name === "destination")?.value;
        const spawnX = obj.properties?.find((p: any) => p.name === "spawnx")?.value;
        const spawnY = obj.properties?.find((p: any) => p.name === "spawny")?.value;
        this.scene.start(destination, { x: spawnX, y: spawnY });
      });

      this.doorZones.push(doorZone);
    });

    // Animations
    this.anims.create({ key: "face-down", frames: [{ key: "me", frame: "me-0.png" }] });
    this.anims.create({
      key: "face-run-down",
      frames: this.anims.generateFrameNames("me", { start: 0, end: 3, prefix: "me-", suffix: ".png" }),
      repeat: -1,
      frameRate: 10,
    });
    this.anims.create({
      key: "face-idle-down",
      frames: this.anims.generateFrameNames("me", { start: 0, prefix: "me-", suffix: ".png" }),
      repeat: -1,
      frameRate: 10,
    });
    this.anims.create({
      key: "face-run-up",
      frames: this.anims.generateFrameNames("me", { start: 13, end: 16, prefix: "me-", suffix: ".png" }),
      repeat: -1,
      frameRate: 8,
    });
    this.anims.create({
      key: "face-run-left",
      frames: this.anims.generateFrameNames("me", { start: 4, end: 7, prefix: "me-", suffix: ".png" }),
      repeat: -1,
      frameRate: 8,
    });
    this.anims.create({
      key: "face-run-right",
      frames: this.anims.generateFrameNames("me", { start: 8, end: 11, prefix: "me-", suffix: ".png" }),
      repeat: -1,
      frameRate: 8,
    });

    // Colliders
    this.physics.add.collider(this.me, groundLayer);
    this.physics.add.collider(this.me, midtreeLayer);
    this.physics.add.collider(this.me, houseLayer);
    this.physics.add.collider(this.me, OnsLayer);
  }

  update(t: number, dt: number): void {
    if (!this.cursors || !this.me) return;

    this.npcManager.update();
    this.dialogueManager.update();

    const speed = 250;
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
    } else {
      // Idle frame
      if (this.lastDirection === "left") this.me.setTexture("me", "me-6.png");
      else if (this.lastDirection === "right") this.me.setTexture("me", "me-8.png");
      else if (this.lastDirection === "up") this.me.setTexture("me", "me-14.png");
      else this.me.setTexture("me", "me-0.png");
    }

    this.me.body?.velocity.normalize().scale(speed);
  }
}
