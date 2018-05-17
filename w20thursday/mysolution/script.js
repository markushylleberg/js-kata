"use strict";



const box = document.querySelector("#colorselector");

let allefarver = Array.from(box.children);

allefarver.forEach(function(li) {
    li.addEventListener('click', clickMe);
})


// listen for clicks on the color-selectors
function clickMe() {
    // when one is clicked:
    console.log(this);


    // find the element that was clicked
    let value = this.getAttribute("data-id");


    // find the color from that element
    console.log(value);


    // set the css variable --basecolor 
    let base = document.querySelector(":root");

    document.documentElement.style.setProperty(`--basecolor`, value);



    // this.style.getPropertyValue("data-id");
    // getComputedStyle(this).getPropertyValue("data-id");
    // base.style.setProperty('--basecolor', 'this', +1);

}