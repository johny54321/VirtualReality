class Spider{ 
    constructor(x,y,z){ 
      this.x = x;
      this.y = y;
      this.z = z;
    
      this.obj = spider.cloneNode(true);
    
      this.obj.setAttribute("position",{x:x,y:y,z:z});
      scene.append(this.obj);  
    }
  }
