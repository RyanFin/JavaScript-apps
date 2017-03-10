/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * 
 * TEST:
 var names = new List();
 names.append("Cynthia");
 names.append("Raymond");
 names.append("Barbara");
 print(names.toString());
 names.remove("Raymond");
 print(names.toString());
 print(" Found: " + names.find("Barbara"));
 print(" length = " + names.length());
 */

// ListADT.js
var clear;
var insert;
var front;
var clear;
var end;
var prev;
var next;
var length;
var currPos;
var moveTo;
var getElement;
var moveTo;
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    // this.length = length;
}
function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function toString() {
    return this.dataStore;
}
function length() {
    return this.listSize;
}


function print() {
    return toString();
}
