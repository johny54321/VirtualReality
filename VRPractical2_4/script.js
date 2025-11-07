let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  for(let i = 0; i < 10; i++){
    for(let i = 0; i < 20; i++){
    let snowman = new Snowman(rnd(-20,20),rnd(-20,20));
    snowmen.push(snowman);
  }
  }

  for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let house = new House(x, 1 , z);
  }

  loop();
})


function loop(){
  for(let rocket of rockets){ 
    rocket.launch();
  }

  setTimeout(loop,10);
}



