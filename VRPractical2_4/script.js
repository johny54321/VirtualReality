let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let rocket = new Rocket(x, 1 , z);
  }

  loop();
})

function loop(){
  rocket.launch();
  window.requestAnimationFrame( loop );
}

/*function loop(){
  for(let rocket of rocket){
    rocket.launch();*/