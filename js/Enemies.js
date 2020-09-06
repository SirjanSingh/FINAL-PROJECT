class Enemies {
    constructor(){

    }

    createEnemies(){
            var enemies = createSprite(random(50,450),0);
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
                    enemies.addImage(enemyWhiteImg);
                    break;
                default :
                    enemies.addImage(enemyRedImg)    
            }
            enemies.velocityY = 5;
            enemiesGroup.add(enemies);
    }

    display(){

    }
}