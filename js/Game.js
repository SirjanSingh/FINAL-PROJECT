class Game {
    constructor(){

    }
    
    start(){
        
        selectObj.selectPlane();            
        selectObj.selectPlaneOther();     
        
        
           
        //console.log(planeNumber,gameState)
       if(gameState === "menu"){

            if(mousePressedOver(startGame)){
                gameState = "play"
                fc3 = frameCount;
            }
            if( frameC > (fc2 +50) || fc2 === undefined){
                if(mousePressedOver(plane_Selection)) {
                    //backButton.visible = true;
                    gameState = "selectPlane"
                selectObj.displayPlane();
                    fc1 = frameC;
                }
            }
         /*   else if(frameCount > (fc2 +50)) {
                if(mousePressedOver(plane_Selection)) {
                    //backButton.visible = true;
                    gameState = "selectPlane"
                    selectObj.displayPlane();
                    fc1 = frameCount;
                }
            }*/
            
        }
        else if(gameState === "selectPlane"){
       
        if((frameC > (fc1 +100)) ){
            if(mousePressedOver(backButton) || planeNumber  === undefined){
              backObj.backFromPlaneSelection();
                fc2 = frameC;
            }
        }
            
        }
        else if(gameState === "play"){
            gameObj.play();
            
        }
    }

    play(){

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
                player1.visible = true;
                player1.scale = 0.35
                break;
        }
        textSize(20)
        text("FPS:"+Math.round(frameRate()),400,25)

        
        //frameRate(144)
        /*if(frameRate()< 50){
            frameRate(144)
        }*/
        //console.log(frameRate())

        if(frameC % 15 === 0 && frameC > (fc3+75) && e1r < 5){
            //enemiesObj.createEnemies(random(50,450),0,0,6);
                enemiesObj.enemiesRed1(0,120,5,0)
            
        }

        if(frameC % 15 === 0 && frameC > (fc3 + 175) && e2r < 5 ){
           
            // console.log("wrdf\ndrgfc\nresdfc\neradsv\nhj")
                enemiesObj.enemiesRed2(500,120,-5,0)
        }
/*
        if(frameCount % 25 === 0){
            enemiesObj.createEnemies(random(50,450),0,0,5);

        }*/

            enemiesObj.rotateE1r(0,5);
            enemiesObj.rotateE2r(0,5);
        //rate of bullet firing
        if(frameC % 5 === 0){
        laserObj.createLasers();
        }
       laserObj.collision();
       
        //console.log(lasersGroup.length)
    }
    display(){
        
    }
}
