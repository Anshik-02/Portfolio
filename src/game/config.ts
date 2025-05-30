import { Types } from 'phaser';
import Preloader from './components/preloader';
import MainScene from './scenes/mainscene';
import { MyHouse } from './scenes/myhouse';
import { Upstairs } from './scenes/upstairs';
import { ConnectHouse } from './scenes/connecthouse';
import { ProjectHouse } from './scenes/projecthouse';
import { FunHouse } from './scenes/funhouse';
import { MapHouse } from './scenes/maphouse';
import { ResumeHouse } from './scenes/resumehouse';
import { SkillHouse } from './scenes/skillhouse';


const config: Types.Core.GameConfig = {

   type: Phaser.CANVAS,
  scale:{
        mode : Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width:1580
    },
  backgroundColor: '#1d1d1d',
  scene: [Preloader, MainScene,MyHouse,Upstairs,ConnectHouse,ProjectHouse,FunHouse,MapHouse,ResumeHouse,SkillHouse],

  physics: {
    default: 'arcade',
    arcade: {
      //@ts-ignore
      gravity: { y: 0 }, 
      // debug:true
    },
  },
};

export default config;
