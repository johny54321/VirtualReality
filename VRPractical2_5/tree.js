class Tree{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let pines = document.createElement("a-cone");
    pines.setAttribute("color","green");
    pines.setAttribute("position","0 2 0");
    pines.setAttribute("scale","1.5 2.5 1.5");
    this.obj.append( pines );

    let pines2 = document.createElement("a-cone");
    pines2.setAttribute("color","green");
    pines2.setAttribute("position","0 3 0");
    pines2.setAttribute("scale","1.25 2.25 1.25");
    this.obj.append( pines2 );
  
    let pines3 = document.createElement("a-cone");
    pines3.setAttribute("color","green");
    pines3.setAttribute("position","0 4 0");
    pines3.setAttribute("scale","1 2 1");
    this.obj.append( pines3 );
  
  
    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position","0 0 0");
    stump.setAttribute("color","brown");
    stump.setAttribute("scale",".35 2 .35");
    this.obj.append( stump ); 
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}