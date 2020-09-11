class Game {
    constructor(){

    }
    
    start(){
        //creating player sprite
       // player = createSprite(250,570,50,50);
        player.visible = true;
        player.scale = 0.5;
        /*
        player.velocityX = -1;
        player.velocityX =  1;
        player.velocityY = -1;
        player.velocityY =  1;
        */
      
        main_Screen.visible = false;
        
        switch(planeNumber){
            case 1:
                player.addImage("simple",plane1);
                break;
            case 2:
                player.addImage("simple",plane1);
                break; 
            case 3:
                player.addImage("simple",plane3);
                break; 
            case 4:
                player.addImage("simple",plane4);
                break; 
            case 5:
                player.addImage("simple",plane5);
                break; 
            case 6:
                player.addImage("simple",plane6);
                break; 
            case 7:
                player.addImage("simple",plane7);
                break; 
            case 8:
                player.addImage("simple",plane8);
                break; 
            case 9:
                player.addImage("simple",plane9);
                break; 
            default:
                player.addImage("simple",plane1);
                break;
        }
    }

    play(){
        textSize(20)
        text("FPS:"+Math.round(frameRate()),400,25)

        gameObj.start();
        frameRate(144)
        
        //console.log(frameRate())
        if(frameCount % 25 === 0){
            enemiesObj.createEnemies(random(50,450),0,10,10);
        }

        //rate of bullet firing
        if(frameCount % 5 === 0){
        laserObj.createLasers();
        }
       laserObj.collision();
       
        //console.log(lasersGroup.length)
    }
    display(){
        
    }
}
