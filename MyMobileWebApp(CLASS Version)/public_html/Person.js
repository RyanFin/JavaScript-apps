/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Person(first, middle, last) {
 this.first = first;
 this.middle = middle;
 this.last = last;
 this.initials = initials;
}
function initials() {
 return this.first[0] + this.middle[0] + this.last[0];
}
