/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Define a function to display the current time
function displayTime() {
    var elt = document.getElementById("clock"); //find element with the id clock
    var now = new Date(); //get current time
    elt.innerHTML = now.toLocaleTimeString(); // make elt display it
    setTimeout(displayTime, 1000); //run again in 1 second
}
//window.onload = displayTime(); //start displaying the time when document loads
