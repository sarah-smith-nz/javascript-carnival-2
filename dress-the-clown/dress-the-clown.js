  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")
//global variable
var headIndex = 0
var upper = document.getElementById("head")
var middle = document.getElementById("body")
var foot = document.getElementById("shoes")

//function to cycle through the heads

/*function cycleHeads () {
  // src of the image change based on some kind of head index counter.
  headIndex++
      
      if (headIndex === 6)
      {headIndex = 0}

   head.src = "./images/head" + headIndex + ".png"   
};

cycleHeads();*/

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       whenLRKeyPressed(-1)
    }
    else if (e.keyCode == '39') {
       // right arrow
       whenLRKeyPressed(1)
    }

}

function whenLRKeyPressed(move){
  headIndex += move
console.log(headIndex)
if (headIndex === 6)
{headIndex = -1}
if (headIndex === -6) {
  headIndex = 1
}

}










//a function that can change the *head* image of the clown
/*function changeHead() {
  var upper = document.getElementById("head")
  upper.src = "./images/head1.png"
  }

changeHead();*/


//class="dress-an-image head" src="./images/head3.png"> <br>