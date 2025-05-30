import * as Phaser from 'phaser';
import { DialogueManager1 } from "./dialogue-component-house";

export default class NPCManager {
  private scene: Phaser.Scene;
  private player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private dialogueManager: DialogueManager1;
  private zones: Phaser.GameObjects.Zone[] = [];
  private currentZone: Phaser.GameObjects.Zone | null = null;
  private interactionBox: Phaser.GameObjects.Rectangle | null = null;
  private npcGroup: Phaser.Physics.Arcade.StaticGroup;

  constructor(scene: Phaser.Scene, player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, dialogueManager: DialogueManager1) {
    this.scene = scene;
    this.player = player;
    this.dialogueManager = dialogueManager;

    // Create the static group for NPCs (solid, non-moving)
    this.npcGroup = this.scene.physics.add.staticGroup();

    // Add collider so player can’t walk through NPCs
    this.scene.physics.add.collider(this.player, this.npcGroup);
  }

  spawnFromTiled(map: Phaser.Tilemaps.Tilemap, layerName = "npc layer") {
    const npcLayer = map.getObjectLayer(layerName);
    if (!npcLayer) return;

    npcLayer.objects.forEach((obj: any) => {
      const { x, y, width, height } = obj;
      const texture = obj.properties?.find((p: any) => p.name === "texture")?.value;
      const frame = obj.properties?.find((p: any) => p.name === "frame")?.value;
      const dialogue = obj.properties?.find((p: any) => p.name === "dialogue")?.value;
      const sectionType = obj.properties?.find((p: any) => p.name === "section type")?.value;

      // Add NPC sprite to the static group (solid!)
      const npc = this.npcGroup.create(x!, y!, texture, frame).setDepth(10);
      (npc as any).dialogueText = dialogue;

      // OPTIONAL: Adjust body size if needed
      // npc.body.setSize(width || 32, height || 32).setOffset(0, 0);

      // Add interaction zone (for proximity dialogue)
      const zone = this.scene.add.zone(x!, y!, width || 32, height || 32);
      this.scene.physics.world.enable(zone);
      (zone.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
      (zone.body as Phaser.Physics.Arcade.Body).setImmovable(true);
      (zone as any).dialogueText = dialogue;
      (zone as any).sectionType = sectionType;

      this.zones.push(zone);
    });
  }

  update() {
    let inZone = false;

    for (const zone of this.zones) {
      const dist = Phaser.Math.Distance.Between(this.player.x, this.player.y, zone.x, zone.y);
      if (dist <= 80) {
        if (this.currentZone !== zone) {
          this.currentZone = zone;
          const dialogueText = (zone as any).dialogueText;
          const sectionType = (zone as any).sectionType || "";
          if (dialogueText) {
            this.dialogueManager.show(dialogueText, sectionType, () => {
              // callback (if needed)
            });
          }
        }
        inZone = true;
        break;
      }
    }

    if (!inZone && this.currentZone) {
      this.dialogueManager.hide();
      if (this.interactionBox) this.interactionBox.setVisible(false);
      this.currentZone = null;
    }
  }
}
