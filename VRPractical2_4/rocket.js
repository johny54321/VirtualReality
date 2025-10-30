class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
  
    let base = document.createElement("a-cylinder");
    base.setAttribute("color","white");
    base.setAttribute("position","0 2.5 0");
    base.setAttribute("scale", ".75 3 .75");
    this.obj.append( base );
  
    let top = document.createElement("a-cone");
    top.setAttribute("position","0 4.5 0");
    top.setAttribute("color","brown");
    this.obj.append( top );

    let bottom = document.createElement("a-cone");
    bottom.setAttribute("position","0 1.25 0");
    bottom.setAttribute("color","brown");
    bottom.setAttribute("scale", "1 1 1");
    this.obj.append( bottom );

    let flame_base = document.createElement("a-cylinder");
    flame_base.setAttribute("scale", ".8 .2 .8")
    flame_base.setAttribute("position","0 .7 0");
    flame_base.setAttribute("color","gray");
    this.obj.append( flame_base );

    let flame = document.createElement("a-cone");
    flame.setAttribute("position","0 .5 0");
    flame.setAttribute("rotation", "180 0 0");
    flame.setAttribute("color","orange");
    flame.setAttribute("scale", ".5 1.5 .5");
    this.obj.append( flame );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }

}