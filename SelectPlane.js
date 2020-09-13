class Select_Plane {
    constructor(){

    }
    displayPlane(){
        gameState = "selectPlane"
        main_Screen.visible = false;
        selectPlaneMenu.visible = true;
        selectPlaneMenu.addImage(plane_SelectionMenuImg)
        selectPlaneMenu.scale = 0.45;

        plane_Selection.destroy();
        
        //creating back navigation button
        backButton = createSprite(67,displayHeight-65);
        backButton.addImage("back", backButtonImg);
        backButton.visible = true;
        backButton.scale = 0.8


        
        planeMenu1 = createSprite(65,150,50,50);
        planeMenu2 = createSprite(250,150,50,50);
        planeMenu3 = createSprite(435,150,50,50);

        planeMenu4 = createSprite(65,350,50,50);
        planeMenu5 = createSprite(250,350,50,50);
        planeMenu6 = createSprite(435,350,50,50);

        planeMenu7 = createSprite(65,550,50,50);
        planeMenu8 = createSprite(250,550,50,50);
        planeMenu9 = createSprite(435,550,50,50);

        planeMenu1.addImage(plane1);
        planeMenu2.addImage(plane2);
        planeMenu3.addImage(plane3);
        planeMenu4.addImage(plane4);
        planeMenu5.addImage(plane5);
        planeMenu6.addImage(plane6);
        planeMenu7.addImage(plane7);
        planeMenu8.addImage(plane8);
        planeMenu9.addImage(plane9);

        planeMenu1.scale = 0.6;
        planeMenu2.scale = 0.6;
        planeMenu3.scale = 0.6;
        planeMenu4.scale = 0.6;
        planeMenu5.scale = 0.6;
        planeMenu6.scale = 0.6;
        planeMenu7.scale = 0.6;
        planeMenu8.scale = 0.6;
        planeMenu9.scale = 0.6; 
        

    }

    selectPlane(){
        if((mousePressedOver(planeMenu1) && gameState === "selectPlane") ){
            planeNumber = 1
            planeMenu1.scale = 0.75;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
            }
        else if((mousePressedOver(planeMenu2) && gameState === "selectPlane") ){
            planeNumber = 2;
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.75;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
        }
        else if((mousePressedOver(planeMenu3) && gameState === "selectPlane") ){
            planeNumber = 3;
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.75;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
                }
        else if((mousePressedOver(planeMenu4) && gameState === "selectPlane") ){
            planeNumber = 4;
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.75;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
                }
        else if((mousePressedOver(planeMenu5) && gameState === "selectPlane") ){
            planeNumber = 5;
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.75;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
                }
        else if((mousePressedOver(planeMenu6) && gameState === "selectPlane")){
            planeNumber = 6;
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.75;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 

          //  planeMenu6.destroy();
           // planeMenu6.visible = false;
                }
        else if((mousePressedOver(planeMenu7) && gameState === "selectPlane") ){
            planeNumber = 7;
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.75;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
                }
        else if((mousePressedOver(planeMenu8) && gameState === "selectPlane")){
            planeNumber = 8;
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.75;
            planeMenu9.scale = 0.6; 
                }
        else if((mousePressedOver(planeMenu9) && gameState === "selectPlane") ){
            planeNumber = 9;
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.75; 
                }
        
       }

       selectPlaneOther(){
        if( planeNumber === 1){
            planeMenu1.scale = 0.75;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
            }
        else if((planeNumber === 2)){
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.75;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
        }
        else if( (planeNumber === 3)){
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.75;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
                }
        else if((planeNumber === 4)){
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.75;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
                }
        else if( (planeNumber === 5)){
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.75;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
                }
        else if((planeNumber === 6)){
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.75;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 

          //  planeMenu6.destroy();
           // planeMenu6.visible = false;
                }
        else if((planeNumber === 7)){
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.75;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.6; 
                }
        else if((planeNumber === 8)){
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.75;
            planeMenu9.scale = 0.6; 
                }
        else if((planeNumber === 9)){
            planeMenu1.scale = 0.6;
            planeMenu2.scale = 0.6;
            planeMenu3.scale = 0.6;
            planeMenu4.scale = 0.6;
            planeMenu5.scale = 0.6;
            planeMenu6.scale = 0.6;
            planeMenu7.scale = 0.6;
            planeMenu8.scale = 0.6;
            planeMenu9.scale = 0.75; 
                }
           
       }

       destroyP(){
        planeMenu1.destroy();
        planeMenu2.destroy();
        planeMenu3.destroy();
        planeMenu4.destroy();
        planeMenu5.destroy();
        planeMenu6.destroy();
        planeMenu7.destroy();
        planeMenu8.destroy();
        planeMenu9.destroy();
    }
    display(){

    }
}