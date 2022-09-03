var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var passwordText = document.querySelector("#password");
var minimumCount = 0;
var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

function writePassword() {
  passwordText.value = generatePassword();
}

function generatePassword() {
  var length = prompt(
    "Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128."
  );

  var numberConfirm = confirm("Do you want numbers in your password?");

  var lowerConfirm = confirm("Do you want lowercases in your password?");

  var upperConfirm = confirm("Do you want uppercases in your password?");

  var symbolConfirm = confirm(
    "Do you want special characters in your password?"
  );

  function getRandomNumber() {
    return number[Math.floor(Math.random() * number.length)];
  }
  function getRandomUpper() {
    return upper[Math.floor(Math.random() * upper.length)];
  }
  function getRandomLower() {
    return lower[Math.floor(Math.random() * lower.length)];
  }
  function getRandomSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
  }
  var selectedCharacters = [];
  if (numberConfirm === true) {
    selectedCharacters = selectedCharacters.concat(number);
  }

  if (lowerConfirm === true) {
    selectedCharacters = selectedCharacters.concat(lower);
  }

  if (upperConfirm === true) {
    selectedCharacters = selectedCharacters.concat(upper);
  }

  if (symbolConfirm === true) {
    selectedCharacters = selectedCharacters.concat(symbol);
  }

  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < parseInt(length); i++) {
    randomPasswordGenerated +=
      selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  }

  //randomPasswordGenerated += minimumNumbers;
  //randomPasswordGenerated += minimumLowerCases;
  //randomPasswordGenerated += minimumUpperCases;
  //randomPasswordGenerated += minimumSpecialCharacters;

  console.log(randomPasswordGenerated);
  return randomPasswordGenerated;
}
