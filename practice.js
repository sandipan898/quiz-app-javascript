// alert("hello");
var firstName = 'sandipan';
var lastName = 'Das';
// alert("Hi, my name is " + firstName);
// alert(firstName + " " + lastName);
/*

// Conditionals
if(firstName == 'sandipan') {
    alert("Yes, I'm Sandipan");
} else if(firstName == 'jhon') {
    alert("Yes, I'm Jhon");
} else {
    alert("No, I'm neither Sandipan nor Jhon");
}*/

// Arrays
var cars = new Array();
cars[0] = 'Suzuky';
cars[1] = 'Honda';
cars[2] = 'Ford';

document.write(cars.length+"</br>");
document.write(cars+"</br>");
document.write(cars[2]+"</br>");
cars[3] = 'BMW';
document.write(cars.length+"</br>");
document.write(cars+"</br>");
cars = ['Tesla', 'Tata', 'Audi'];
document.write(cars+"</br>");
document.write(cars.length+"</br>");

//for loop
for(var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
} 

//functions
function sayIt(ward) {
    alert(ward);
}   
// sayIt("Hello There!");