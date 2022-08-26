// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password")

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

  // strings of character types
  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz'

  var uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  var numericStr = '0123456789'

  var specialStr = '\u0021\u0023\u0024\u0025\u0026?@^-_~'

  // array of characters to select from
  var charArr = [];

  // array for password to be created in
  var password = [];

  while (!validSelection) {
    uppercase = confirm("Include uppercase?");
    console.log(uppercase)
    if (uppercase) {
      charArr.push(uppercaseStr)
    }

    lowercase = confirm("Include lowercase?");
    console.log(lowercase)
    if (lowercase) {
      charArr.push(lowercaseStr)
    }

    numeric = confirm("Include numbers?");
    console.log(numeric)
    if (numeric) {
      charArr.push(numericStr)
    }

    special = confirm("Include special characters?")
    console.log(special)
    if (special) {
      charArr.push(specialStr)
    }

    if (uppercase || lowercase || numeric || special) {
      validSelection = true;
      break;
    }
    else {
      alert("Please select at least one type of character to include (Uppercase, Lowercase, Numeric, Special)")
    }
  }

  console.log(charArr)

  //generate password based on selected criteria
  for (let i = 0; i < passwordLength; i++) {
    let charStr = (charArr[Math.floor((charArr.length) * Math.random())])
    console.log(charStr)

    let selChar = charStr.charAt(Math.floor(charStr.length * Math.random()))

    password.push(selChar)
  }
  outputpass=password.join('')
  passwordEl.value = outputpass
  console.log(password.join(''))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
