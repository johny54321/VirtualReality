class House{
  constructor(x,y,z){
    this.obj = House.cloneNode(true);
    
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);  
    
  }
}