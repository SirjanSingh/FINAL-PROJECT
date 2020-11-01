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
       //dont edit the code below👍
        if((frameC > (fc1 +100)) ){
            if(mousePressedOver(backButton) && planeNumber  !== undefined){
              backObj.backFromPlaneSelection();
                fc2 = frameC;
            }
        }
        // till here
        }
        else if(gameState === "play"){
            gameObj.play();
            level = 1; 
        }
    }

    play(){
        if(level === 1){
            levelObj.level1();
        }
    }
    display(){
        
    }
}
