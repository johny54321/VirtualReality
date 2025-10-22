window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  car = document.querySelector("#car");
  car.a = 0;
  car.da = 1;
  
  loop();
})

function loop(){
  car.a += car.da;
  box.setAttribute("rotation",{x:0, y:box.a, z:0});
  window.requestAnimationFrame(loop);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);