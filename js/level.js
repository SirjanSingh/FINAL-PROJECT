class Level {
    constructor(){

    }

    level1(){
         //creating player sprite
        // player = createSprite(250,570,50,50);
        player.visible = true;
        player.scale = 0.5;

        //adding image to the player acc to the choice of user
        main_Screen.visible = false;
            
            switch(planeNumber){
                case 1:
                    player.addAnimation("simple",plane1);
                    break;
                case 2:
                    player.addAnimation("simple",plane1);
                    break; 
                case 3:
                    player.addAnimation("simple",plane3);
                    break; 
                case 4:
                    player.addAnimation("simple",plane4);
                    break; 
                case 5:
                    player.addAnimation("simple",plane5);
                    break; 
                case 6:
                    player.addAnimation("simple",plane6);
                    break; 
                case 7:
                    player.addAnimation("simple",plane7);
                    break; 
                case 8:
                    player.addAnimation("simple",plane8);
                    break; 
                case 9:
                    player.addAnimation("simple",plane9);
                    break; 
                default:
                    //console.log("shit");
                    /*player1.visible = true;
                    player1.scale = 0.35*/
                    player.addAnimation("simple",plane1);
                    break;
            }
            textSize(20)
            text("FPS:"+Math.round(frameRate()),400,25)

            //frameRate(144)
            /*if(frameRate()< 50){
                frameRate(144)
            }*/
            //console.log(frameRate())
            scoreObj.score1();
            playerObj.checkCollision();

            if(frameC % 15 === 0 && frameC > (fc3+75) && e1r < 5){
                enemiesObj.enemiesRed1(0,120,5,0)   
            }
            if(frameC % 15 === 0 && frameC > (fc3 + 150) && e2r < 5 ){
                enemiesObj.enemiesRed2(500,120,-5,0)
            }
            if(frameC % 22 === 0 && frameC > (fc3 + 200) && e3n1 < 8){
                enemiesObj.enemiesN1(60,0,2,4,1);
            }
            if(frameC % 22 === 0 && frameC > (fc3 + 320) && e3n2 < 8){
                enemiesObj.enemiesN1(440,0,-2,4,2);
            }
            if(frameC % 25 === 0 && frameC > (fc3 + 420) && e3n3 < 8){
                enemiesObj.enemiesN1(60,0,0,4,3);
            }
            if(frameC % 25 === 0 && frameC > (fc3 + 500) && e3n4 < 8){
                enemiesObj.enemiesN1(440,0,0,4,4);
            }
            
                
    /*
            if(frameCount % 25 === 0){
                enemiesObj.createEnemies(random(50,450),0,0,5);

            }*/

            enemiesObj.rotateE12(0,5,1);
            enemiesObj.rotateE12(0,5,2);
            //rate of bullet firing
            if(frameC % 4 === 0){
            laserObj.createLasers();
            }
        laserObj.collision();
           //console.log(lasersGroup.length)
        }
    display(){

    }
}