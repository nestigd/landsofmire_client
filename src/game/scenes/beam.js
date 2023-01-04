import {GameObjects} from 'phaser';

export default class Beam extends GameObjects.Sprite{
  constructor(scene){

    // take coordinates from player coordinates
    var x = scene.player.x;
    var y = scene.player.y;

    // make this class a Sprite instance
    super(scene, x, y, "beam");

    this.play("beamAnim");
    
    // enables game body so that physics can be applied
    scene.physics.world.enableBody(this);
    this.body.velocity.y = - 250;

    // adds sprite to scene canvas w/ the provided x, y and sprite
    scene.add.existing(this);
    // add to group
    scene.projectiles.add(this)
  }

  update(){
    if(!(this.body.velocity === -250)){
      this.body.velocity.y = -250;
    }
    if (this.y < 5){
      console.log("destroy")
      this.destroy();
    }
  }
}