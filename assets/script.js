// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for storing input
var passwordLength;
var uppercase;
var lowercase;
var numeric;
var special;

// Variable for validation
var validInput = false;
var minLength = 8;
var maxLength = 128;
var numPropmts = 5;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates password
function generatePassword() {
  //password length (8-128)
  while (validInput === false) {
    passwordLength = prompt("Password length:", "Between 8-128 characters");
  }
  console.log(passwordLength)


  validInput = true;
  uppercase = confirm("Include uppercase?");
  console.log(uppercase)

  lowercase = confirm("Include lowercase?");
  console.log(lowercase)

  numeric = confirm("Include numbers?");
  console.log(numeric)

  special = confirm("Include special characters?")
  console.log(special)


  //character types (yes/no for [lowercase, uppercase, numeric, and/or special characters])
  //input should be validated and at least one selected


  //generate password based on selected criteria
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
