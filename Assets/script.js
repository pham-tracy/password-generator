// Assignment code here

// Declare global constants for the various criteria
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Displays the different character types in conosole
console.log("Lowercase letters: " + lowercaseLetters);
console.log("Uppercase letters: " + uppercaseLetters);
console.log("Numbers:" + numbers);
console.log("Special characters: " + specialChars);

// Function to generate password
function generatePassword() {
  // Declare local variables for user-chosen characters and for the password itself
  var userChars = "";
  var password = "";

  // Creates variable to store user input when prompted for how many characters they would like to include in the password
  var passwordLength = prompt(
    "How many characters would you like your password to have? Please choose a number between 8 and 128"
  );
  console.log(passwordLength);

  // If password length is less than 8 or greater than 128, user will be alerted and will have to press the Generate Password button to start over again
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You did not enter a number between 8 and 128. Please try again.");
    return "Please try again";
  }

  // If password length is the type of "Not a number", then user will be alerted and will have to press the Generate Password button to start over again
  if (isNaN(passwordLength)) {
    alert("That is not a number. Please try again.");
    return "Please try again";
  }

  // If user clicks OK, then lowercase letters are added to the variable containing the user's choice of characters
  var characterLowercase = confirm(
    "Would you like to include lowercase characters? Click 'OK' for yes, and 'Cancel' for no"
  );

  if (characterLowercase) {
    userChars += lowercaseLetters;
  }
  console.log(userChars);

  // If user clicks OK, then uppercase letters are added to the variable containing the user's choice of characters
  var characterUppercase = confirm(
    "Would you like to include uppercase characters? Click 'OK' for yes, and 'Cancel' for no"
  );

  if (characterUppercase) {
    userChars += uppercaseLetters;
  }
  console.log(userChars);
  // If user clicks OK, then numbers are added to the variable containing the user's choice of characters
  var characterNumeric = confirm(
    "Would you like to include numeric characters? Click 'OK' for yes, and 'Cancel' for no"
  );

  if (characterNumeric) {
    userChars += numbers;
  }
  console.log(userChars);

  // If user clicks OK, then special characters are added to the variable containing the user's choice of characters
  var characterSpecial = confirm(
    "Would you like to include special characters? Click 'OK' for yes, and 'Cancel' for no"
  );

  if (characterSpecial) {
    userChars += specialChars;
  }
  console.log(userChars);
  
  // If user does not select any criteria, they are alerted and will have to press the Generate Password button to start over again
  if (
    !characterLowercase &&
    !characterUppercase &&
    !characterNumeric &&
    !characterSpecial
  ) {
    alert(
      "You did not select any criteria. Please choose at least one criteria to include in your password. Please try again."
    );
    return "Please try again";
  }

  // Password is randomly created using the password length and user-selected characters.
  for (i = 0; i < passwordLength; i++) {
    password += userChars.charAt(Math.floor(Math.random() * userChars.length));
  }

  // Displays password as an alert and in the password box.
  alert("Your password is " + password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
