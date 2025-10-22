class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let cloud_part1 = document.createElement("a-sphere"); 
    cloud_part1.setAttribute("position", "0 0 0");
    cloud_part1.setAttribute("color", "white");
    this.obj.append( cloud_part1 );
  
    let cloud_part2 = document.createElement("a-sphere"); 
    cloud_part2.setAttribute("position", "0.5 0 0");
    cloud_part2.setAttribute("color", "white");
    this.obj.append(cloud_part2) 

    let cloud_part3 = document.createElement("a-sphere"); 
    cloud_part3.setAttribute("position", "1 0 0");
    cloud_part3.setAttribute("color", "white");
    this.obj.append(cloud_part3); 
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}
