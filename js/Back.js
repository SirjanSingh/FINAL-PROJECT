class Back {
    constructor(){

    }


    backFromPlaneSelection(){
        main_Screen.visible = true;
        selectPlaneMenu.visible = false;
        selectObj.destroyP();
        backButton.visible = false;
        gameState = "menu"
        plane_Selection = createSprite(68,displayHeight-66,40,40);
        plane_Selection.addImage(startGameImg);
        plane_Selection.scale = 0.12
        plane_Selection.visible = false;
        console.log("siefn")
    }
    display(){

    }
}