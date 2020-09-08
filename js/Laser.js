class Laser {
    constructor(){

    }

    createLasers(){
        fill("red")
        lasers = createSprite(mouseX,mouseY-10,5,15);
        lasers.velocityY = -15;
        lasers.lifetime = lasers.y/15;
        lasersGroup.add(lasers) ;
        frameRate(144)

    }

    collision(){
        /*
        for(var i = 0; i < enemiesGroup.length; i++){
           /* var ex = enemiesGroup.get(i).x;
            var ey = enemiesGroup.get(i).y;
            //console.log("change")

            //for(var j = 0;j<lasersGroup.length; j++){
                if(lasersGroup.isTouching(enemiesGroup.get(i))){
                    enemiesGroup.get(i).destroy();
                    i--;
                   // lasersGroup.get(j).destroy();
                    //j--;
                    console.log("FPS : "+frameRate())
                }
                //console.log(i,j)

                /*var lx = lasersGroup.get(j).x;
                var ly = lasersGroup.get(j).x;
                /*if(ex < lx + 5 &&
                   ex + 50 > lx &&
                   ey < ly + 5 &&
                   ey + 50 > ly){
                    enemiesGroup.get(i).destroy();
                    
                       console.log(i)

                }
          //  }
        }*/
       // console.log(ex,ey)
       var lcv = 0;
       for(var i = lcv; i < enemiesGroup.length; i++){
            if(lasersGroup.isTouching(enemiesGroup.get(i))){
            enemiesGroup.get(i).x = 800;
            lasersGroup.destroyEach();
            frameRate(144)
            lcv  += 1;
            //i--;
           console.log(enemiesGroup.get(i).x,"Ship no " + lcv)
            }
        }
     //  if(enemiesGroup.length>lcv){
      /*  for(var j = 0;j<lasersGroup.length; j++){
            if( enemiesGroup.isTouching(lasersGroup.get(j))){
            frameRate(144)
            console.log("yeah")
          // enemiesGroup.destroy();
            lasersGroup.get(j).destroy();
            lcv++;
          }
         }*/
       // }
        
        console.log(lcv)
    }
    display(){

    }
}