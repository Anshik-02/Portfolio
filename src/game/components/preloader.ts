import {Scene} from 'phaser';

export default class Preloader extends Scene {
  constructor() {
    super('preloader');
  }

  preload() {

   this.load.atlas("me", "assets/character/texture.png","assets/character/texture.json");
  this.load.spritesheet("me_down", "assets/character/me/me-0.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("me_up", "assets/character/me/me-14.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("me_left", "assets/character/me/me-6.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("me_right", "assets/character/me/me-10.png", {frameWidth: 32, frameHeight: 48});
   this.load.image("indoor_tiles1","assets/Tilesets/Interior general.png")
   this.load.tilemapTiledJSON("myhouse","assets/main-map/myhouse.tmj")
   this.load.tilemapTiledJSON("upstairs","assets/main-map/upstairs.tmj")
   this.load.tilemapTiledJSON("connecthouse","assets/main-map/connecthouse.tmj")
   this.load.image("connecttiles","assets/Tilesets/Poke Centre interior.png")
   this.load.tilemapTiledJSON("projecthouse","assets/main-map/projecthouse.tmj")
   this.load.image("projecttiles","assets/Tilesets/Museum interior.png")
   this.load.tilemapTiledJSON("funhouse","assets/main-map/funhouse.tmj")
   this.load.image("indoor_tiles44","assets/Tilesets/Interior general.png")
   this.load.tilemapTiledJSON("maphouse","assets/main-map/maphouse.tmj")
   this.load.image("Trainertiles","assets/Tilesets/Trainer Tower interior.png") 
   this.load.tilemapTiledJSON("resumehouse","assets/main-map/resumehouse.tmj")
   this.load.image("resumetiles","assets/Tilesets/Department store interior.png") 
   this.load.tilemapTiledJSON("skillhouse","assets/main-map/skillhouse.tmj")
   this.load.image("skilltiles","assets/Tilesets/Game Corner interior.png") 
   this.load.atlas("npc28", "assets/character/npc28.png","assets/character/npc28.json");
   this.load.atlas("prof", "assets/character/prof.png","assets/character/prof.json");
   this.load.spritesheet("npc3", "assets/character/npc3.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("npc2", "assets/character/npc2.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("nurse", "assets/character/nurse.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("lady", "assets/character/lady.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("npc4", "assets/character/npc4.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("npc8", "assets/character/npc8.png", {frameWidth: 32, frameHeight: 48});
  this.load.spritesheet("npc5", "assets/character/npc5.png", {frameWidth: 32, frameHeight: 48});
  this.load.image("arrow_up", "assets/d-pad/arrow_up.png");
    this.load.image("arrow_down", "assets/d-pad/arrow_down.png");
    this.load.image("arrow_left", "assets/d-pad/arrow_left.png");
    this.load.image("arrow_right", "assets/d-pad/arrow_right.png");
    this.load.audio('bgMusic', 'assets/audio.mp3');
}

  create() {
    this.scene.start("upstairs");

  }
}