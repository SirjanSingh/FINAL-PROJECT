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
var enemiesRedGroup1,enemiesRedGroup2;
var lasersGroup ,laser ;
var lcv = 0;
var bulletImg , bullet; 
var explosion_1;
var explosion_2;
var explosionSprite;
var backObj;
var fc4,fc1,fc2,fc3;
var frameC = 0;
//var EnemySize = 0;
var e1r = 0;
var e2r = 0;
var e1rex;
var e2rex;
var lasers = [];
var enemies = [];

function preload(){
plane1 = loadImage("images/plane/Plane_1.PNG.png");
plane2 = loadImage("images/plane/Plane_2.PNG.png");
plane3 = loadImage("images/plane/Plane_9.PNG.png");
plane4 = loadImage("images/plane/Plane_6.PNG.png");
plane5 = loadImage("images/plane/Plane_5.PNG.png");
plane6 = loadImage("images/plane/Plane_3.PNG.png");
plane7 = loadImage("images/plane/Plane_7.PNG.png");
plane8 = loadImage("images/plane/Plane_8.PNG.png");
plane9 = loadImage("images/plane/Plane_4.PNG.png");

enemyRedImg    = loadImage("images/enemyPlane/Enemy_Plane_Red.png");
enemyGreenImg  = loadImage("images/enemyPlane/Enemy_Plane_Green.png");
enemyCyanImg   = loadImage("images/enemyPlane/Enemy_Plane_Cyan.png");
enemyWhiteImg  = loadImage("images/enemyPlane/Enemy_Plane_White.png");
enemyYellowImg = loadImage("images/enemyPlane/Enemy_Plane_Yellow.png");

enemyRed2Img   = loadImage("images/enemyPlane/Enemy_Plane_Red2.png");
enemyWhite2Img = loadImage("images/enemyPlane/Enemy_Plane_White2.png"); 

main_ScreenImg = loadImage("images/Untitled.png");

plane_SelectionMenuImg = loadImage("images/planeSelection.jpg");

//rescueManImg  = loadAnimation("images/RescueMan.gif");
backButtonImg = loadImage("images/backButton.png"); 

startGameImg = loadImage("images/circle.png")

bulletImg    = loadImage("images/bulletCircular.png");

//explosion_11 = loadImage("images/explosion1/1.png");
//explosion_12 = "images/explosion1/2.png";
explosion_1 = loadAnimation("images/explosionA/1.png","images/explosionA/2.png","images/explosionA/3.png","images/explosionA/4.png","images/explosionA/5.png","images/explosionA/6.png","images/explosionA/7.png","images/explosionA/8.png","images/explosionA/9.png","images/explosionA/10.png","images/explosionA/11.png","images/explosionA/12.png","images/explosionA/13.png","images/explosionA/14.png","images/explosionA/15.png","images/explosionA/16.png","images/explosionA/17.png")
explosion_2 = loadAnimation("images/explosionB/1.png","images/explosionB/2.png","images/explosionB/3.png","images/explosionB/4.png","images/explosionB/5.png","images/explosionB/6.png","images/explosionB/7.png","images/explosionB/8.png","images/explosionB/9.png","images/explosionB/10.png","images/explosionB/11.png","images/explosionB/12.png","images/explosionB/13.png");
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
enemiesRedGroup1 =new Group();
enemiesRedGroup2 =new Group();
lasersGroup  = new Group();
selectObj    = new Select_Plane();
gameObj      = new Game();
enemiesObj   = new Enemies();
laserObj     = new Laser();
backObj      = new Back();

startGame  = createSprite(251,701);
startGame.addImage(startGameImg);
startGame.scale = 0.475
startGame.visible = false;

player = createSprite(250,570,50,50);
player.visible = false;

//explosionSprite = createSprite(200,200,40,40);
//explosionSprite.addAnimation("explosion",explosion_2)
//calling the start function

frameRate(144)
}

function draw(){
background("black");
frameRate(48)
frameC += 1;

gameObj.start();
//console.log(gameState);
//console.log(frameCount-fc3);

if(frameCount > (fc3+175)){
    console.log("ouch")
    //e2r = 0;
}
//console.log(enemiesGroup.length)
player.x = mouseX;
player.y = mouseY;
console.log(mouseX +":"+mouseY );
//console.log(planeNumber)



drawSprites();
}

/*
function keyPressed(){
    if(keyCode === 32){
        laserObj.createLasers();
        console.log(lasers);
    }
}
*/