class Laser {
    constructor(){

    }

    createLasers(){
        fill("red")
        lasers = createSprite(mouseX,mouseY-10,5,15);
        lasers.velocityY = -13;
        lasers.lifetime = lasers.x/13;
        lasersGroup.add(lasers) ;

    }

    collision(){
        for(var i = 0; i < enemiesGroup.length; i++){
           /* var ex = enemiesGroup.get(i).x;
            var ey = enemiesGroup.get(i).y;*/
            //console.log("change")

            //for(var j = 0;j<lasersGroup.length; j++){
                if(lasersGroup.isTouching(enemiesGroup.get(i))){
                    enemiesGroup.get(i).destroy();
                    //i--;
                   // lasersGroup.get(j).destroy();
                    //j--;
                    console.log("waergvdearvdzeasd\naawefsd\naewdvarwefasd\tsdvc")
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

                }*/
          //  }
        }
       // console.log(ex,ey)

    }
    display(){

    }
}