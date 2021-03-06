  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
//Using the onclick method to call it, you will need to write a function 
//that gets called every time you click on one of the unicorns.

var inflate = [0, 0, 0]
var audioElement1 = new Audio('horse.wav');
var audioElement2 = new Audio('guitar.wav');
var imageType = ['png','gif'];

function unicornClicked() {
    var unicorn = event.target
    var id = unicorn.id[7]
    inflate[id]++
      
      if (inflate[id] === 3) {
        inflate[id] = 0 
        audioElement1.play()
        alert ("Unicorn Number " + [id] + " says thank you!")
      }
      
      unicorn.src = "./images/unicorn-" + inflate[id] +".png"
      
    }
  
    function reset () {  
      location = location  
    };

//if (unicorn.id === 'unicorn1') {
  //inflate1++
 /*if (document.getElementById('unicorn1').src = "./images/unicorn-0.png") {
  document.getElementById('unicorn1').src = "./images/unicorn-1.png";
} else if (document.getElementById("unicorn1").src = "./images/unicorn-1.png") {
    (document.getElementById("unicorn1").src = "./images/unicorn-2.png") 
} else if (document.getElementById("unicorn1").src = "./images/unicorn-2.png") {
  document.getElementById("unicorn1").src = "./images/unicorn-3.png";
}
};*/