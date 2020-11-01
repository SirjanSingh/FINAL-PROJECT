var player,playerObj;
var plane1,plane2,plane3,plane4,plane5,plane6,plane7,plane8,plane9;
var enemyRedImg,enemyGreenImg,enemyCyanImg,enemyWhiteImg,enemyYellowImg;
var enemyRed2Img,enemyWhite2Img;
var enemyN , enemyNImg;
var player1;
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
var enemiesRedGroup1,enemiesRedGroup2,enemiesGroupN;
var lasersGroup ,laser ;
var lcv = 0;
var bulletImg , bullet; 
var explosion_1;
var explosion_2;
var explosionSprite;
var backObj;
var fc4,fc1,fc2,fc3;// FOR SETTING FRAME DIFF
var frameC = 0;
//var EnemySize = 0;
var e1r = 0;
var e2r = 0;
var e1rex;
var e2rex= 0;
var e3n1 = 0,e3n2 = 0,e3n3 = 0, e3n4 = 0;
var e3nex;
var lasers = [];
var enemies = [];
var ne = [0,0,0];
var newAnime,
    enemy;
var back1 ,back2,back3 ,back4,back5 ,back6,back7 ,back8,back9 ,back10,back11 ,back12,back13 ,back14,back15 ,back16,back17 ,back18,back19 ,back20,back21 ,back22,back23 ,back24,back25 ,back26,back27 ,back28,back29 ,back30,back31 ,back32,back33 ,back33,back34 ,back35,back36;

var back,backSprite;
var sirjan,r = 0,
    enemyTank ;
    var et = 0,ett = 0;
var score = 0,scoreObj;
var EnemyDes ;
var bullet1Img,bullet2Img,bullet3Img,
    bullet1,bullet2,bullet3,
    level=0,levelObj;
var laserSound;


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

enemyRed2Img   = loadImage("images/enemyPlane/Enemy_Plane_Red-2.png");
enemyWhite2Img = loadImage("images/enemyPlane/Enemy_Plane_White2.png"); 

enemyNImg      = loadImage("images/enemynew-removebg-preview.png");

main_ScreenImg = loadImage("images/Untitled.png");

plane_SelectionMenuImg = loadImage("images/planeSelection.jpg");

//rescueManImg  = loadAnimation("images/RescueMan.gif");
backButtonImg = loadImage("images/backButton.png"); 

startGameImg = loadImage("images/circle.png")

bulletImg    = loadImage("images/laserRed16.png");
bullet1Img   = loadImage("images/bullets/fx_shot_04.png")
bullet2Img   = loadImage("images/bullets/fx_shotNEW_x2.png")
bullet3Img   = loadImage("images/bullets/fx_shotNEW_x3.png")

//explosion_11 = loadImage("images/explosion1/1.png");
//explosion_12 = "images/explosion1/2.png";
explosion_1 = loadAnimation("images/explosionA/1.png","images/explosionA/2.png","images/explosionA/3.png","images/explosionA/4.png","images/explosionA/5.png","images/explosionA/6.png","images/explosionA/7.png","images/explosionA/8.png","images/explosionA/9.png","images/explosionA/10.png","images/explosionA/11.png","images/explosionA/12.png","images/explosionA/13.png","images/explosionA/14.png","images/explosionA/15.png","images/explosionA/16.png","images/explosionA/17.png")
explosion_2 = loadAnimation("images/explosionB/1.png","images/explosionB/2.png","images/explosionB/3.png","images/explosionB/4.png","images/explosionB/5.png","images/explosionB/6.png","images/explosionB/7.png","images/explosionB/8.png","images/explosionB/9.png","images/explosionB/10.png","images/explosionB/11.png","images/explosionB/12.png","images/explosionB/13.png");

newAnime = loadAnimation("Basic/Hero-FighterJet/Without-Bullet/hero1.png","Basic/Hero-FighterJet/Without-Bullet/hero2.png","Basic/Hero-FighterJet/Without-Bullet/hero3.png","Basic/Hero-FighterJet/Without-Bullet/hero4.png","Basic/Hero-FighterJet/Without-Bullet/hero5.png","Basic/Hero-FighterJet/Without-Bullet/hero6.png");
//newAnime = loadAnimation("images/explosionA/1.png","images/explosionA/2.png","images/explosionA/3.png","images/explosionA/4.png","images/explosionA/5.png","images/explosionA/6.png","images/explosionA/7.png","images/explosionA/8.png","images/explosionA/9.png","images/explosionA/10.png","images/explosionA/11.png","images/explosionA/12.png","images/explosionA/13.png","images/explosionA/14.png","images/explosionA/15.png","images/explosionA/16.png","images/explosionA/17.png")

//enemyTank = createImg('decor_tank.gif');

back1 = loadImage("b/frame_00_delay-0.03s.gif");
back2 = loadImage("b/frame_01_delay-0.03s.gif");
back3 = loadImage("b/frame_02_delay-0.03s.gif");
back4 = loadImage("b/frame_03_delay-0.03s.gif");
back5 = loadImage("b/frame_04_delay-0.03s.gif");
back6 = loadImage("b/frame_05_delay-0.03s.gif");
back7 = loadImage("b/frame_06_delay-0.03s.gif");
back8 = loadImage("b/frame_07_delay-0.03s.gif");
back9 = loadImage("b/frame_08_delay-0.03s.gif");
back10 = loadImage("b/frame_09_delay-0.03s.gif");
back11 = loadImage("b/frame_10_delay-0.03s.gif");
back12 = loadImage("b/frame_11_delay-0.03s.gif");
back13 = loadImage("b/frame_12_delay-0.03s.gif");
back14 = loadImage("b/frame_13_delay-0.03s.gif");
back15 = loadImage("b/frame_14_delay-0.03s.gif");
back16 = loadImage("b/frame_15_delay-0.03s.gif");
back17 = loadImage("b/frame_16_delay-0.03s.gif");
back18 = loadImage("b/frame_17_delay-0.03s.gif");
back19 = loadImage("b/frame_18_delay-0.03s.gif");
back20 = loadImage("b/frame_19_delay-0.03s.gif");
back21 = loadImage("b/frame_20_delay-0.03s.gif");
back22 = loadImage("b/frame_21_delay-0.03s.gif");
back23 = loadImage("b/frame_22_delay-0.03s.gif");
back24 = loadImage("b/frame_23_delay-0.03s.gif");
back25 = loadImage("b/frame_24_delay-0.03s.gif");
back26 = loadImage("b/frame_25_delay-0.03s.gif");
back27 = loadImage("b/frame_26_delay-0.03s.gif");
back28 = loadImage("b/frame_27_delay-0.03s.gif");
back29 = loadImage("b/frame_28_delay-0.03s.gif");
back30 = loadImage("b/frame_29_delay-0.03s.gif");
back31 = loadImage("b/frame_30_delay-0.03s.gif");
back32 = loadImage("b/frame_31_delay-0.03s.gif");
back33 = loadImage("b/frame_32_delay-0.03s.gif");
back34 = loadImage("b/frame_33_delay-0.03s.gif");
back35 = loadImage("b/frame_34_delay-0.03s.gif");
back36 = loadImage("b/frame_35_delay-0.03s.gif");


back  = loadAnimation(back1,back2,back3,back4,back5 ,back6,back7 ,back8,back9 ,back10,back11 ,back12,back13 ,back14,back15 ,back16,back17 ,back18,back19 ,back20,back21 ,back22,back23 ,back24,back25 ,back26,back27 ,back28,back29 ,back30,back31 ,back32,back33 ,back33,back34 ,back35,back36);
//back = createImg('IrF.gif');

laserSound = loadSound("sounds/laserShoot.mp3")
}

function setup(){
    createCanvas(500,displayHeight);

    angleMode(DEGREES)
    //setting backg
   /* backSprite = createSprite(250,displayHeight/2,10,10);
    backSprite.scale = 1;
    backSprite.addAnimation("backGround",back)*/

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
enemiesGroupN= new Group();
lasersGroup  = new Group();
playerObj    = new Player();
selectObj    = new Select_Plane();
gameObj      = new Game();
enemiesObj   = new Enemies();
laserObj     = new Laser();
backObj      = new Back();
scoreObj     = new Score();
levelObj     = new Level();
startGame    = createSprite(251,701);
startGame.addImage(startGameImg);
startGame.scale = 0.475
startGame.visible = false;

player = createSprite(250,570,50,50);
player.visible = false;

player1 = createSprite(250,570,50,50);
player1.visible = false;
player1.addAnimation("animation",newAnime);
//explosionSprite = createSprite(200,200,40,40);
//explosionSprite.addAnimation("explosion",newAnime)
//calling the start function

//sirjan = createSprite(250,250,100,100);


frameRate(144)
}

function draw(){
background("black");
frameRate(48)
frameC += 1;

//back.position(0,0)
//console.log(back)
/*
r++;
push();
translate(sirjan.x,sirjan.y);
sirjan.rotation = r
pop();*/
//console.log(sirjan)
gameObj.start();
//console.log(gameState);
//console.log(frameCount-fc3);

if(frameCount > (fc3+10)){
    //console.log("ouch")
    //e2r = 0;
//console.log(playerObj.health(0))
}
//console.log(playerObj.health(0))
//console.log(enemiesGroup.length)
player.x = mouseX;
player.y = mouseY;
player1.x = mouseX;
player1.y = mouseY;
//console.log(mouseX +":"+mouseY );
//console.log(score,ne[0])
//console.log(enemies)


drawSprites();
text("Score: "+score,250,20)
}

/*
function keyPressed(){
    if(keyCode === 32){
        laserObj.createLasers();
        console.log(lasers);
    }
}
*/