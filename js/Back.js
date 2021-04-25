class Back {
    constructor(){

    }


    backFromPlaneSelection(){
        //the setting which will change when we press on the back button
        main_Screen.visible = true;//main screen will be visivle
        selectPlaneMenu.visible = false;// the plane cupboard will hide
        selectObj.destroyP();//the obj created for selecting the planed will be destryed as it creates problem later
        backButton.visible = false;//the back button  will disappear
        gameState = "menu"//the gameState will change to menu
        plane_Selection = createSprite(68,displayHeight-66,40,40);//plane selection sprite will be created
        plane_Selection.addImage(startGameImg);//added image
        plane_Selection.scale = 0.12//scaled it to 12%
        plane_Selection.visible = false;//made it invivble
        console.log("successful return from plane selection")
    }
    display(){

    }
}