"use strict";

    function komFrem(){
    document.querySelector(".popup").style.bottom = "0px";
    console.log("hej");
    };

setTimeout(komFrem, 2000);

        document.querySelector(".closeMe").addEventListener("click", function(){

            document.querySelector(".popup").style.bottom = "-120px";
            console.log("dawz");

        })
