class Enemies {
    constructor(){

    }

    createEnemies(x,y,xv,yv){
             enemy = createSprite(x,y,50,50);
            //enemy.debug = true;
            var rand = Math.round(random(1,5));
            //console.log(rand)
            switch(rand){
                case 1:
                    enemy.addImage(enemyRedImg);
                    enemy.setCollider("circle",0,0,35);
                    break;
                case 2:
                    enemy.addImage(enemyGreenImg);
                    enemy.setCollider("circle",0,0,35);
                    break;    
                case 3:
                    enemy.addImage(enemyCyanImg);
                    enemy.setCollider("circle",5,0,29);
                    enemy.scale = 1.45
                    break;
                case 4:
                    enemy.addImage(enemyYellowImg);
                    enemy.setCollider("circle",0,0,37);
                    break; 
                case 5:
                    enemy.addImage(enemyWhite2Img);
                    enemy.setCollider("circle",0,0,38);
                    break;
                default :
                    enemy.addImage(enemyRedImg)   
                    enemy.setCollider("circle",0,0,35); 
            }
          
            enemy.lifetime = displayHeight/(yv-1); //more lifetime bcoz I not  want it to vanish earlier
            enemiesGroup.add(enemy);
    }
    enemiesRed1(x,y,xv,yv){
        e1r++;
        e1rex = 1;
        var enemy = createSprite(x,y,50,50);
        enemy.addImage(enemyRedImg);
        enemy.velocityX = xv;
        enemy.velocityY = yv;
        enemy.lifetime  = 500;
        enemiesGroup.add(enemy);
        enemiesRedGroup1.add(enemy);
        enemies.push(enemy)
    }

    enemiesRed2(x,y,xv,yv){
        e2r++;
        e2rex =1;
        var enemy = createSprite(x,y,50,50);
        enemy.addImage(enemyRed2Img);
        enemy.velocityX = xv;
        enemy.velocityY = yv;
        enemy.lifetime  = 500;
        enemiesGroup.add(enemy); 
        enemiesRedGroup2.add(enemy);
        enemies.push(enemy)
    }

    rotateE1r(x,y){
        for( var i = 0 ; i < enemiesRedGroup1.length;i++){
            var a = 45;
            if(enemiesRedGroup1.get(i).x>140){
                enemiesRedGroup1.get(i).rotation = a;
                if(enemiesRedGroup1.get(i).x>150){
                    a+=45;
                    enemiesRedGroup1.get(i).rotation = a;
                    enemiesRedGroup1.get(i).velocityX = x;
                    enemiesRedGroup1.get(i).velocityY = y;
                }
            }
        }
    }
    rotateE2r(x,y){
        for( var i = 0 ; i < enemiesRedGroup2.length;i++){
            var a = -45;
            if(enemiesRedGroup2.get(i).x<360){
                enemiesRedGroup2.get(i).rotation = a;
                if(enemiesRedGroup2.get(i).x<350){
                    a-=45;
                    enemiesRedGroup2.get(i).rotation = a;
                    enemiesRedGroup2.get(i).velocityX = x;
                    enemiesRedGroup2.get(i).velocityY = y;
                }
            }
        }
    }
    display(){
        var angle = enemy.angle;
        push();
        translate(enemy.x, enemy.y);
        rotate(angle);
        pop();
    }
}