class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","gray");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("scale", "2.75 5 2.75");
    this.obj.setAttribute("src", "#wall")
    scene.append(this.obj);

  }
}