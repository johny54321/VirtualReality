/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "xxxxxxxxxxx--xxxxxxxxxxx",
  "x----x--xx---x---x----xx",
  "x-xx-xx----xxx-x-x-xx--x",
  "x-x-----xxx-----xxxxxx-x",
  "xxxx-xx-----xxx-----xx-x",
  "x-x---xxxxx-xxx-xxx----x",
  "x--xx-----------x--xxx-x",
  "xx-xx-xxxx-x-xxxxx---xxx",
  "x-----xxxx-x-----xxx---x",
  "x-xxx---xx-xxx-x---x-x-x",  
  "x-xxxxx--------xxx-xxx-x",
  "xx----xxxx-xxxx--x-----x",
  "xxxxx---x--------x-xxxxx",
  "xx----x-xxxxxxxx-x-xxxxx",
  "x--xxx----------------xx",
  "x-xxxx-xxxxxxxxxxxxx--xx",
  "x--x---x---------------x",
  "xxxxxxxx---------------x",
  "xx---------------------x",
  "x----------------------x",
  "x---xxxx---------------x",
  "x--x---x---------------x",
  "x--x-x-xxxxxxxxxxxxxxxxx",
  "x----x-xx---x---xx-----x",
  "xxxx-x---xx-x-x-xx-xxxxx",
  "xxx--xxxxxx-xxx--------x",
  "xx--x--xxxx-xxxxxxxxxx-x",
  "xx-xxx----x------------x",
  "xx--xxxxx-xxxx-xxxxxxx-x",
  "xxx--------------------x",
  "xxxxxxxxxxx--xxxxxxxxxxx",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(c * 2.75,2.5,r * 2.75)
      }
    }
  }
}



    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  

)