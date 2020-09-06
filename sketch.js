var player;
var plane1,plane2,plane3,plane4,plane5,plane6,plane7,plane8,plane9;
var enemyRedImg,enemyGreenImg,enemyCyanImg,enemyWhiteImg,enemyYellowImg;
var enemyRed2Img,enemyWhite2Img;
var player;
var upgrade_Plane,start_Game;
var main_Screen,main_ScreenImg;
var selectObj;
var plane_Selection,plane_SelectionMenuImg;
var selectPlaneMenu;
var planeNumber ;
var planeMenu1,planeMenu2,planeMenu3,planeMenu4,planeMenu5;
var planeMenu6,planeMenu7,planeMenu8,planeMenu9;
var rescueMan, rescueManImg;
var backButton,backButtonImg;
var gameState = "menu";
var startGame,startGameImg;
var gameObj;
var enemiesObj;
var enemiesGroup;
var lasersGroup ;
function preload(){
plane1 = loadImage("images/plane/Plane_1.PNG.png");
plane2 = loadImage("images/plane/Plane_2.PNG.png");
plane3 = loadImage("images/plane/Plane_3.PNG.png");
plane4 = loadImage("images/plane/Plane_4.PNG.png");
plane5 = loadImage("images/plane/Plane_5.PNG.png");
plane6 = loadImage("images/plane/Plane_6.PNG.png");
plane7 = loadImage("images/plane/Plane_7.PNG.png");
plane8 = loadImage("images/plane/Plane_8.PNG.png");
plane9 = loadImage("images/plane/Plane_9.PNG.png");

enemyRedImg    = loadImage("images/enemyPlane/Enemy_Plane_Red.png");
enemyGreenImg  = loadImage("images/enemyPlane/Enemy_Plane_Green.png");
enemyCyanImg   = loadImage("images/enemyPlane/Enemy_Plane_Cyan.png");
enemyWhiteImg  = loadImage("images/enemyPlane/Enemy_Plane_White.png");
enemyYellowImg = loadImage("images/enemyPlane/Enemy_Plane_Yellow.png");

enemyRed2Img   = loadImage("images/enemyPlane/Enemy_Plane_Red.png");
enemyWhite2Img = loadImage("images/enemyPlane/Enemy_Plane_White2.png"); 

main_ScreenImg = loadImage("images/Untitled.png");

plane_SelectionMenuImg = loadImage("images/planeSelection.jpg");

rescueManImg  = loadAnimation("images/RescueMan.gif");
backButtonImg = loadImage("images/backButton.png"); 

startGameImg = loadImage("images/circle.png")
}

function setup(){
    createCanvas(500,displayHeight);

    
selectPlaneMenu = createSprite(250,displayHeight/2)
selectPlaneMenu.visible = false;
//creating main menu
main_Screen = createSprite(240,displayHeight-150),
main_Screen.addImage("main Menu", main_ScreenImg);
main_Screen.scale = 0.5;

//creating plane selection menu
plane_Selection = createSprite(68,displayHeight-66,40,40);
plane_Selection.addImage(startGameImg);
plane_Selection.scale = 0.12
plane_Selection.visible = false;

enemiesGroup = new Group();
lasersGroup  = new Group();
selectObj = new Select_Plane();
gameObj   = new Game();
enemies = new Enemies();
startGame = createSprite(251,701);
startGame.addImage(startGameImg);
startGame.scale = 0.475
startGame.visible = false;

player = createSprite(250,570,50,50);
player.visible = false;
}

function draw(){
background("lightgreen");
player.x = mouseX;
player.y = mouseY;
console.log(mouseX +":"+mouseY);
console.log(planeNumber)


if(mousePressedOver(plane_Selection) && gameState === "menu"){
    selectObj.displayPlane();
    backButton.visible = true;
    //plane_Selection.destroy();
    }
    selectObj.selectPlane();
   
    if(mousePressedOver(backButton) && planeNumber  !== undefined){
        main_Screen.visible = true;
        selectPlaneMenu.visible = false;
        selectObj.destroyP();
backButton.visible = false;
    gameState = "menu"
        
    console.log("siefn")
    }

    if(mousePressedOver(startGame)){
        gameState = "play"
    }
console.log(planeNumber,gameState)
if(gameState === "menu"){

}
else if(gameState === "selectPlane"){

}
else if(gameState === "play"){
    gameObj.play();
    
}
drawSprites();
}

