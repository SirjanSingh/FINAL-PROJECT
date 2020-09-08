class Enemies {
    constructor(){

    }

    createEnemies(x,y,xv,yv){
            var enemies = createSprite(x,y,50,50);
            var rand = Math.round(random(1,5));
            console.log(rand)
            switch(rand){
                case 1:
                    enemies.addImage(enemyRedImg);
                    break;
                case 2:
                    enemies.addImage(enemyGreenImg);
                    break;    
                case 3:
                    enemies.addImage(enemyCyanImg);
                    break;
                case 4:
                    enemies.addImage(enemyYellowImg);
                    break; 
                case 5:
                    enemies.addImage(enemyWhite2Img);
                    break;
                default :
                    enemies.addImage(enemyRedImg)    
            }
            enemies.velocityX = xv;
            enemies.velocityY = yv;
            enemies.lifetime = displayHeight/4 //4 bcoz I not  want it to vanish earlier
            enemiesGroup.add(enemies);
    }

    display(){

    }
}