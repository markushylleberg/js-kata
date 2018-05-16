"use strict";

// create a function called `mockify` that receives a string, 
// and returns a mocified version of that string.

const text = document.querySelector("h1").textContent;

// convert that sheit into an array
const letters = Array.from( text );

// loop that array , one character at a time
letters.forEach( sponge )




function sponge(value, index, array) {

    let letter = array[index];

    const rand = Math.random();

    if(rand < 0.5) {
        letter = letter.toUpperCase();
    } else {
        letter = letter.toLowerCase();
    }

    array[index] = letter;

}

console.log(letters.join(" "));


document.querySelector("h1").innerHTML = letters.join(" ");



// --------------- ny function ----------------------

const text2 = "test";

const myLetters = Array.from( text2 );

myLetters.forEach( mockify )



function mockify(value, index, array) {
    console.log( mockify('This is a test') );
    let myLetter = array[index];

    const myRandomness = Math.random();

    if (myRandomness < 0.5) {
        myLetter = myLetter.toUpperCase();
    } else {
        myLetter = myLetter.toLowerCase();
    }

    array[index] = myLetter;
}
