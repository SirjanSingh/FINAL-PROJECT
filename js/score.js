class Score {
    constructor(){
        this.l = 0;
        this.j=0;
        this.k=0;
    }

    score1(){

        for(var i = 0; i < enemiesRedGroup1.length; i++){
            if(lasersGroup.isTouching(enemiesRedGroup1[i])){
                this.j++;
                if(this.j==2){
                    var eg = enemiesRedGroup1[i]
                    var explosion = createSprite(eg.x,eg.y,50,50);
                    //explosion.addAnimation("explosion",explosion_2);
                    explosion.addImage(explode);
                    explosion.scale = 0.3;
                    explosion.lifetime =5;// 26;
                    score+=150;
                    this.j=0;
                }
            }
        }

        for(var i = 0; i < enemiesRedGroup2.length; i++){
            if(lasersGroup.isTouching(enemiesRedGroup2[i])){
                this.k++;
                if(this.k==2){
                    var eg = enemiesRedGroup2[i];
                    var explosion = createSprite(eg.x,eg.y,50,50);
                   // explosion.addAnimation("explosion",explosion_2);
                   explosion.addImage(explode);
                   explosion.scale = 0.3;

                    explosion.lifetime = 5//26;
                    this.k=0;
                    score+=150;
                }
            }
            console.log(this.k )

        }
        for(var i = 0; i < enemiesGroupN.length; i++){
            if(lasersGroup.isTouching(enemiesGroupN[i])){
                this.l++;
                if(this.l==2){
                    var eg = enemiesGroupN[i]
                    var explosion = createSprite(eg.x,eg.y,50,50);
                     //explosion.addAnimation("explosion",explosion_2);
                     explosion.addImage(explode);
                     explosion.scale = 0.3;
                     explosion.lifetime =5;// 26;
                    this.l=0;
                    score+=200;
                }
            }
        }
    }

    display(){

    }
}