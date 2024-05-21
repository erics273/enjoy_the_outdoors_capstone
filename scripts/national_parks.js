"use strict"

window.onload = () => {

    let locationDropdown = document.querySelector("#locationDropdown");
    let typeDropdown = document.querySelector("#typeDropdown");
    let locationRadio = document.querySelector("#searchByLocation");
    let typeRadio = document.querySelector("#searchByType");

    hideElement("#locationDropdown");
    hideElement("#typeDropdown");

    locationRadio.addEventListener("change", hideShowDropdown)
    typeRadio.addEventListener("change", hideShowDropdown)


}

function hideShowDropdown(event){

    if(event.target.value === "type"){
        showElement("#typeDropdown");
        hideElement("#locationDropdown");
    }else{
        showElement("#locationDropdown");
        hideElement("#typeDropdown");
    }

}

//This function will hide an HTML element on the page
//Just pass it the id of the element you want to hide
function hideElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "none";
}

//This function will show an HTML element on the page
//Just pass it the id of the element you want to show
function showElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "block";
}