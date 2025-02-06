var x = 10;
console.log(x); // 10
console.log(this.x); // 10
//console.log(window.x); // 10 // this will not work in node js only in browser

// in nodejs environment this refers to global object which is
// module.exports in node js

// in browser this refers to window object

// in strict mode this refers to undefined


