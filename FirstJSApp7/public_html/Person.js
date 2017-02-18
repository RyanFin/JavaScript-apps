function Person(first, middle, last) {
 this.first = first;
 this.middle = middle;
 this.last = last;
 this.initials = initials;
}
function initials() {
 return this.first[0] + this.middle[0] + this.last[0];
}
var aPerson = new Person("John","Quincy","Public");
print("First name: " + aPerson.first);
print("Middle name: " + aPerson.middle);
print("Last name: " + aPerson.last);
print("Initials: " + aPerson.initials());