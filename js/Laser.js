class Laser {
    constructor(){

    }

    createLasers(){
      fill("red")
      laser = createSprite(mouseX,mouseY-10,5,15);
      laser.velocityY = -15;
      //laser.debug = true;
      laser.setCollider("circle",0,0,8)
      laser.lifetime = laser.y/15;
      laser.addImage("bullet", bulletImg)
      lasersGroup.add(laser) ;
      lasers.push(laser)
      //frameRate(144)

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
       /* for(var i = 0; i < enemies.length; i++){
            for(var j = 0;j<lasers.length; j++){
              
              if((lasersGroup[j]).isTouching(enemies[i])){
              enemiesGroup[i].x =800;
              lcv  = lcv + 1;
                  //i--;
                 // console.log("Ship no " + lcv);
                  lasersGroup[j].destroy();
                  //j--;
                  //console.log("FPS : "+frameRate())
              } */
     
            //if(lasersGroup.isTouching(enemiesGroup.get(i))){
            //enemiesGroup.get(i).x = 800;

          for(var i = 0; i < enemiesGroup.length; i++){
            for(var j = 0;j<lasersGroup.length; j++){
              
              if((lasersGroup.get(j)).isTouching(enemiesGroup.get(i))){
              enemiesGroup.get(i).x =800;
              lcv  = lcv + 1;
                  //i--;
                 // console.log("Ship no " + lcv);
                  lasersGroup.get(j).destroy();
                  //j--;
                  //console.log("FPS : "+frameRate())
              }
                         //frameRate(144)
           
            
            //i--;
           
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
        
        //console.log(lcv)
    }
    display(){

    }
}