class Score {
    constructor(){

    }

    score1(){

        for(var i = 0; i < enemiesRedGroup1.length; i++){
            if(lasersGroup.isTouching(enemiesRedGroup1[i])){
                ett++;
                if(ett==2){
                    var eg = enemiesRedGroup1[i]
                    var explosion = createSprite(eg.x,eg.y,50,50);
                    explosion.addAnimation("explosion",explosion_2);
                    explosion.lifetime = 26;
                    ett=0;
                }
            }
        }

        for(var i = 0; i < enemiesRedGroup2.length; i++){
            if(lasersGroup.isTouching(enemiesRedGroup2[i])){
                ett++;
                if(ett==2){
                    var eg = enemiesRedGroup2[i]
                    var explosion = createSprite(eg.x,eg.y,50,50);
                    explosion.addAnimation("explosion",explosion_2);
                    explosion.lifetime = 26;
                    ett=0;
                }
            }
        }
    }

    display(){

    }
}