const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // array that has values to be used on changing the colors of the page


const btn = document.getElementById("btn"); //getting the btn on the page to be used on javascript
const color = document.querySelector(".color"); //getting the color property of the page to be used in javascript

btn.addEventListener('click',function(){ //once you click the button on the page, this function activates
console.log(document.body); //logging our the body on the console for checking
//get random number between 0 - 3
    const randonNumber = getRandomNumber(); //transferring the value provided by getRandomNumber() function to the randomNumber variable
    console.log(randonNumber); // Logging out the value of random color to the console for checking and debugging
    document.body.style.backgroundColor = colors[randonNumber]; //changes the color of the body of HTML
    color.textContent = colors[randonNumber]; //changes the value appearing on the page beside the word "Background Color"
})

//Generate Random Numbers between 0-3. 3 Because there are 4 values on the array 0,1,2,3
//Array starts with index of 0
function getRandomNumber(){
    return Math.floor( Math.random() * colors.length);
//Math.floor function removes the decimals
//Math.random function generates random number 0 to less than 1 (inclusive of 0, but not 1) 
//Multiplied by the length of colors to have numbers between 0-3
}