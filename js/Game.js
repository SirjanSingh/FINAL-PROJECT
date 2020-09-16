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
       
        if((frameC > (fc1 +100)) || fc1 === undefined){
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
        textSize(20)
        text("FPS:"+Math.round(frameRate()),400,25)

        
        //frameRate(144)
        /*if(frameRate()< 50){
            frameRate(144)
        }*/
        //console.log(frameRate())
<<<<<<< HEAD
        if(frameC % 15 === 0 && frameC > (fc3+75) && e1r < 5){
            //enemiesObj.createEnemies(random(50,450),0,0,6);
                enemiesObj.enemiesRed1(0,120,5,0)
            
        }

        if(frameC % 15 === 0 && frameC > (fc3 + 175) && e2r < 5 ){
           
            // console.log("wrdf\ndrgfc\nresdfc\neradsv\nhj")
                enemiesObj.enemiesRed2(500,120,-5,0)
            
=======
        if(frameCount % 25 === 0){
            enemiesObj.createEnemies(random(50,450),0,0,5);
>>>>>>> 972d06d01f2a996cb517ea5cb88fb7b0d3383f7b
        }

            enemiesObj.rotateE1r(0,5);
            enemiesObj.rotateE2r(0,5);
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
