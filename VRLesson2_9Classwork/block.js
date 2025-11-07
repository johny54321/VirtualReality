class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","gray");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("scale", "2.75 2.75 2.75");
    scene.append(this.obj);

  }
}