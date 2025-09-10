/*Q1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.
(Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
*/

// Answer
// var char = prompt("Give me any character and I'll tell you its number, uppercase or lowercase");
// var charCode = char.charCodeAt(0); // Get ASCII code of first character
// if (char.trim() === "") {
//     document.write("Please don't leave cell empty");
// } else if (char.length != 1 ) {
//     document.write("Please enter 1 character at a time");
// } else if (charCode >= 48 && charCode <= 57) {
//     document.write("The character you entered <b>" + char + "</b> is number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     document.write("The character you entered <b>" + char + "</b> is UpperCase Letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     document.write("The character you entered <b>" + char + "</b> is LowerCase Letter.");
// } else {
//     document.write("The character you entered <b>" + char + "</b> is special character or somethings else.");
// }





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
// var userInput = prompt("Give me one Letter & I will tell you its a vowel or not");
// if (userInput.length != 1 || userInput.trim() === "") {
//     document.write("Please enter only 1 character");
// } else if (!isNaN(userInput)) {
//     document.write("You entered the number " + userInput + ". Please enter letter only");
// } else {
//     var checksLetter = userInput.toLowerCase();
//     if (checksLetter === "a" || checksLetter === "e" || checksLetter === "i" || checksLetter === "o" || checksLetter === "u") {
//         document.write("The character you entered <b>" + userInput + "</b>. Its a vowel");
//     } else {
//         document.write("The character you entered <b>" + userInput + "</b>. Its not a vowel");
//     }
// }





// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// 1. Check if user has entered password. If not, then give message “ Please enter your password”
// 2. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// Answer
// var originalPassword = "icecream";
// var passwordByUser = prompt("Try to guess the password");
// if (passwordByUser.trim() === "") {
//     document.write("Do not leave cell empty");
// } else if (passwordByUser === "icecream") {
//     document.write("Correct! The password you entered matches the original password.");
// } else {
//     document.write("Correct! You entered <b>INCORRECT PASSWORD</b> <br /><br /><br /><br /> HINT <br />The password is icecream");
// }





// Q6. This if/else statement does not work. Try to fix it:
//
// var greeting;
//
// var hour = 13;
// if (hour < 18)
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// Answer
// they does not put curly brackets "}" and "{" properly  &  also there is not any type of out to show the result like alert or console.log
//correct version would be
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }
// console.log(greeting);
// Result/Output is Good day





// Q7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// Answer
// var time = 1900;
// if (time >= 0000 && time < 1200) {
//     document.write("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening");
// } else if (time >= 2100 && time <= 2359) {
//     document.write("Good Night");
// } else {
//     document.write("Please enter only numbers between 0000 to 2359");
// }