// // CASE 1
// function a() {
//   console.log(b); // 10
//   // Instead of printing undefined it prints 10, So somehow this a
//  //function could access the variable b outside the function scope.
//  }
//  a(); // this will return undefined
//  var b = 10;
//  a(); // this will return 10

// CASE 2
// function a() {
//   c();
//   function c() {
//   console.log(b); // 10
//   }
//  }
//  a();
//  var b = 10;
//  a();

// CASE 3
function a() {
  c();
  function c() {
    console.log(b);
    var b = 100;
    //console.log(b);
  }
  //console.log(b);

 }
 a();
 var b = 10;
 a();
