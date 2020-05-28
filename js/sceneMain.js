class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        // this.load.setBaseURL('http://labs.phaser.io');

        //load our images or sounds

        //  this.load.spritesheet('char', 'assets/skies/space3.png', { frameWidth: 128, frameHeight: 128 });
    	this.load.image("key", 'images/face.png');
    }
    create() {

        // this.text1=this.add.text(game.config.width/2,game.config.height/2,"Hello!");
        
        
        //  this.char=this.add.sprite(game.config.width/2,game.config.height/2)

        // this.anims.create({
        //     key: 'walk',
        //     frames: [
        //         { key: 'char',frame:1 },
        //         { key: 'char',frame:2 },
        //         { key: 'char',frame:3 },
        //         { key: 'char',frame:4 },
        //         { key: 'char',frame:5 },
        //     ],
        //     frameRate: 8,
        //     repeat: -1
        // });

    // this.char.play('walk')
        // define our objects
          this.face=this.add.image(100, 200, "key");
         this.face.setOrigin(0,0)  
    }
    update() {
    //constant running loop
     

    }
}