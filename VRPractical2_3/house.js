class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box"); 
    base.setAttribute("color", "yellow");
    base.setAttribute("height", "3");
    base.setAttribute("width", "1.5");
    base.setAttribute("depth", "3.5");
    base.setAttribute("position", "0 1.5 0");
    this.obj.append(base);
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("height", "4");
    roof.setAttribute("position", "0 3.5 0");
    roof.setAttribute("color", "red");
    roof.setAttribute("rotation", "-90 0 0");
    this.obj.append(roof);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

