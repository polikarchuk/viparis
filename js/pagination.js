'use strict';


// pagination
var prevButton = document.getElementById("arrow_prev");
var nextButton = document.getElementById("arrow_next");
var active = document.querySelector("#pagination .active");
var rot = document.getElementById("pagination");
var item =document.getElementById("pagination li");

prevButton.addEventListener("click",function () {
    active.classList.remove("active");
    active.previousElementSibling.classList.add("active");
    active = active.previousElementSibling;
    chackDisable();
});




nextButton.addEventListener("click",function () {
    active.classList.remove("active");
    active.nextElementSibling.classList.add("active");
    active = active.nextElementSibling;
    chackDisable();
});


var path = {
    arrow_prev :null,
    arrow_next :null
};

function chackDisable() {
    if(!active.previousElementSibling||(active.parentElement === rot.parentElement)){
        prevButton.setAttribute("disabled","");
        path.left = false;
    }else{
        prevButton.removeAttribute("disabled","");
        path.arrow_prev = true;
    }

    if(!active.nextElementSibling||(active.parentElement === rot.parentElement)){
        nextButton.setAttribute("disabled","");
        path.right = false;
    }else{
        nextButton.removeAttribute("disabled","");
        path.arrow_next = true;
    }

}

// end pagination



