class Select_Plane {
    constructor(){

    }
    displayPlane(){
        main_Screen.visible = false;
        selectPlaneMenu.visible = true;
        selectPlaneMenu.addImage(plane_SelectionMenuImg)
        selectPlaneMenu.scale = 0.45;

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
        if(mousePressedOver(planeMenu1)){
            planeNumber = 1
            planeMenu1.scale = 0.7;
            }
        else if(mousePressedOver(planeMenu2)){
            planeNumber = 2;
            planeMenu2.scale = 0.7;
        }
        else if(mousePressedOver(planeMenu3)){
            planeNumber = 3;
            planeMenu3.scale = 0.7;
        }
        else if(mousePressedOver(planeMenu4)){
            planeNumber = 4;
            planeMenu4.scale = 0.7;
        }
        else if(mousePressedOver(planeMenu5)){
            planeNumber = 5;
            planeMenu5.scale = 0.7;
        }
        else if(mousePressedOver(planeMenu6)){
            planeNumber = 6;
            planeMenu6.scale = 0.7;
        }
        else if(mousePressedOver(planeMenu7)){
            planeNumber = 7;
            planeMenu7.scale = 0.7;
        }
        else if(mousePressedOver(planeMenu8)){
            planeNumber = 8;
            planeMenu8.scale = 0.7;
        }
        else if(mousePressedOver(planeMenu9)){
            planeNumber = 9;
            planeMenu9.scale = 0.65;
        }
        
    }
    display(){

    }
}