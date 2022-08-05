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
var validSelection = false;
var minLength = 8;
var maxLength = 128;

// arrays of character types
var lowercaseArr = 'abcdefghijklmnopqrstuvwxyz'

var uppercaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 

var numericArr = '0123456789'

var specialArr = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates password
function generatePassword() {
  //password length (8-128) and validates correct input
  validInput = false;
  while (!validInput) {
    passwordLength = prompt("Password length:", "Between 8-128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
      validInput = true;
      break;
    }
    else {
      alert("Please enter a valid password length (8-128)");
    }
  }
  console.log(passwordLength)


  // check for uppercase, lowercase, numeric, and special characters
  validSelection = false;
  while (!validSelection) {
    uppercase = confirm("Include uppercase?");
    console.log(uppercase)

    lowercase = confirm("Include lowercase?");
    console.log(lowercase)

    numeric = confirm("Include numbers?");
    console.log(numeric)

    special = confirm("Include special characters?")
    console.log(special)

    if (uppercase || lowercase || numeric || special) {
      validSelection = true;
      break;
    }
    else {
      alert("Please select at least one type of character to include (Uppercase, Lowercase, Numeric, Special)")
    }
  }

  //character types (yes/no for [lowercase, uppercase, numeric, and/or special characters])
  //input should be validated and at least one selected

  // define character types (e.g. a-z;A-Z;0-9;special)


  //generate password based on selected criteria
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
