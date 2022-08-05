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

  // arrays of character types
  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz'

  var uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  var numericStr = '0123456789'

  var specialArr = '\u0021\u0023\u0024\u0025\u0026?@^-_~'

  //generate password based on selected criteria
  for(let i=0;i<passwordLength;i++){
    Math.floor.random
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
