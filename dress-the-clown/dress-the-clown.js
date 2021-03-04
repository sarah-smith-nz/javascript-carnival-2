  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")
//global variable
var upperIndex = 0
var middleIndex = 0
var footIndex = 0

var clothingIndex = 0

var upper = document.getElementById("head") //create variable and search document for element ID "head"
var middle = document.getElementById("body")
var foot = document.getElementById("shoes")

document.onkeydown = checkKey; //onkeydown element assigned to checkkey function

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {            // up arrow if pressed, activate whenUDKeyPressed function minus 1 as the move parameter
        whenUDKeyPressed(-1)
    } else if (e.keyCode == '40') {     // down arrow
        whenUDKeyPressed(1)
    } else if (e.keyCode == '37') {     // left arrow
        whenLRKeyPressed(-1)
    } else if (e.keyCode == '39') {    // right arrow
        whenLRKeyPressed(1)
    }
}

function whenLRKeyPressed(move){
  if (clothingIndex === 0)
    { upperIndex  += move
      if (upperIndex  < 0)
      upperIndex  = 5
      if (upperIndex  > 5) 
      upperIndex  = 0
      upper.src = "./images/head" + upperIndex  + ".png" 
    }

  if (clothingIndex === 1)
      { middleIndex  += move
        if (middleIndex  < 0)
        middleIndex  = 5
        if (middleIndex  > 5) 
        middleIndex = 0
        middle.src = "./images/body" + middleIndex  + ".png" 
      }

  if (clothingIndex=== 2)
    { footIndex += move
      if (footIndex < 0)
      footIndex = 5
      if (footIndex > 5) 
      footIndex = 0
      foot.src = "./images/shoes" + footIndex + ".png" 
    }
}

function whenUDKeyPressed(move){
  clothingIndex += move
  if (clothingIndex < 0)
  clothingIndex = 2
  if (clothingIndex > 2) 
  clothingIndex = 0
  event.preventDefault()
  console.log(clothingIndex)
}







//function to cycle through the heads

/*function cycleHeads () {
  // src of the image change based on some kind of head index counter.
  headIndex++
      
      if (headIndex === 6)
      {headIndex = 0}

   head.src = "./images/head" + headIndex + ".png"   
};

cycleHeads();*/


//a function that can change the *head* image of the clown
/*function changeHead() {
  var upper = document.getElementById("head")
  upper.src = "./images/head1.png"
  }

changeHead();*/


//class="dress-an-image head" src="./images/head3.png"> <br>