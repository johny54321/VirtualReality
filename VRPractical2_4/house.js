function House(x, y, z){ 
  let house = document.createElement("a-entity"); 

  let base = document.createElement("a-box"); 
  base.setAttribute("color", "yellow");
  base.setAttribute("scale", "3 3 3");
  base.setAttribute("position", "0 0 0");
  house.append(base);

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("segment-radial", "2");
  roof.setAttribute("height", "3");
  roof.setAttribute("width", "3");
  roof.setAttribute("height", "3");
  roof.setAttribute("position", "0 4 0");
  roof.setAttribute("color", "red");
  house.append(roof);

  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append(house)
}