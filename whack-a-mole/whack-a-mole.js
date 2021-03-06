  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

//The ability to store or get references to the cells in the HTML table.
var identifyCells = document.getElementsByTagName('td');
console.log(identifyCells);

//A function to randomly select which cell should show the mole.
//var randomIndex = functionToGetRandomNumber() 
var randomNumber = Math.floor(Math.random() * identifyCells.length);
console.log(randomNumber)

//var randomCell = cellsArray[randomIndex]
var randomCell = identifyCells[randomNumber]
console.log(randomCell)
//A way to show a mole in the chosen cell.
//add image
var moleImage = document.createElement('img'); //create a new variable img
moleImage.src = './mole.png'; // source of the image is mole picture
moleImage.id = "mole";
randomCell.appendChild(moleImage); //place of the image is in random cell (the html element to append this too)

moleImage.onclick = whackedMole

function whackedMole() {
  //remove the mole from the current cell and then, 
  //using a function that lets you re-use the code that you wrote earlier, add the mole to a new random cell.
  randomNumber = Math.floor(Math.random() * identifyCells.length);
  randomCell = identifyCells[randomNumber]
  randomCell.appendChild(moleImage)
  var audio = new Audio();
  audio.src = "./whack-audio.wav";
  audio.play();
  console.log('mole has been whacked')
}
