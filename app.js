/*Q1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).
*/

// Answer






// Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// Answer
// var integers1 = prompt("Enter Integer no 1");
// var integers2 = prompt("Enter Integer no 2");

// Simple if else
// if (integers1.trim() === "" || integers2.trim() === "") {
//     document.write("Please do not enter Spaces");
// } else if (isNaN(integers1) || isNaN(integers2)) {
//     document.write("Please Enter Numbers only");
// } else if (integers1 > integers2) {
//     document.write("Integer no 1 is larger" + integers1);
// } else if (integers1 < integers2) {
//     document.write("Integer no 2 is larger" + integers2);
// } else {
//     document.write("Both integers are equal");
// }


// Nested if else
// if (integers1.trim() === "" || integers2.trim() === "") {
//     document.write("Please do not enter Spaces");
// } else {
//     if (isNaN(integers1) || isNaN(integers2)) {
//         document.write("Please Enter Numbers only");
//     } else {
//         if (integers1 > integers2) {
//             document.write("Integer no 1 is larger" + integers1);
//         } else if (integers1 < integers2) {
//             document.write("Integer no 2 is larger" + integers2);
//         } else {
//             document.write("Both integers are equal");
//         }
//     }
// }





// Q3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// // Answer
// var userInput = prompt("Give me Number and I will tell you it positive or nagtive");
// if (userInput > 0) {
//     document.write("The number is positive");
// } else if (userInput < 0) {
//     document.write("The number is nagative");
// } else if (userInput == 0) {
//     document.write("The number is Zero");
// } else {
//     document.write("Please enter Number only");
// }





// Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
 
// Answer





// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// 1. Check if user has entered password. If not, then give message “ Please enter your password”
// 2. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// Answer
var originalPassword = "icecream";
var passwordByUser = prompt("Try to guess the password");
if (passwordByUser.trim() === "") {
    document.write("Do not leave cell empty");
} else if (passwordByUser === "icecream") {
    document.write("Correct! The password you entered matches the original password.");
} else {
    document.write("Correct! You entered <b>INCORRECT PASSWORD</b> <br /><br /><br /><br /> HINT <br />The password is icecream");
}