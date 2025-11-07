let maze = [
  "xxxxxxxxxxxxxxxxxxxxxxxx",
  "xoooooooooooooooooooooox",
  "xo-t-------------t----ox",
  "xo---t---------t------ox",
  "xo----t---------t-----ox",
  "xo-------t---------t--ox",
  "xo---t--------t-------ox",
  "xo-----t-----------t--ox",
  "xo---t------t---------ox",
  "xo---t-------------t--ox",
  "xo------t-------t-----ox",
  "xo----t--------t------ox",
  "xo-------t-------t----ox",
  "xo--t--------t--------ox",
  "xo------t---------t---ox",
  "xo----t-----------t---ox",
  "xo------t-----t-------ox",
  "xo--t--------t--------ox",
  "xo-------t------t-----ox",
  "xo---t------t---------ox",
  "xo-t--------------t---ox",
  "xo-----t------t-------ox",
  "xoooooooooooooooooooooox",
  "xxxxxxxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c * 2,1,r * 2)
      }
      else if(cols[c] == "t"){
        new Tree(c * 2,1,r * 2);
      }else if(cols[c]=="o"){
        new Rock(c * 2,1,r * 2)
      }
    }

  }

})