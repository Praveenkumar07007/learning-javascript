// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     printfullName: function () {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }

// person.printfullName();

// let name2 = {
//     firstName: 'praveen',
//     lastName: 'Kumar'
// }

// person.printfullName.call(name2);



// we are not writing these types of functions which is in other object and we are calling that function in another object

let person = {
    firstName: 'John',
    lastName: 'Doe'
}
let printfullName = function (hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + hometown + ' ' + state);
}

printfullName.call(person, 'hyderabad', 'Telangana');

let name2 = {
    firstName: 'praveen',
    lastName: 'Kumar'
}
printfullName.call(name2, 'Begusarai', 'Bihar');
printfullName.apply(person, ['hyderabad', 'Telangana']);

let printingname = printfullName.bind(person, 'hyderabad', 'Telangana');
console.log(printingname);
printingname();
