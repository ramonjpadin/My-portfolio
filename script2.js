const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

var number = ["0","1","2","3","4","5","6","7","8","9"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbol = ["!","@","#","$","%","^","&","*","(",")"];
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


//var randomPassword = {
    //number: getRandomNumber,
    //upper: getRandomUpper,
    //lower: getRandomLower,
    //symbol: getRandomSymbol,

//};

function generatePassword() {
    var length = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
  
    var number = confirm("Do you want numbers in your password?");
  
    var lower = confirm("Do you want lowercases in your password?");
  
    var upper = confirm("Do you want uppercases in your password?");
  
    var symbol = confirm("Do you want special characters in your password?");
}
var minimumCount = 0;


var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * number.length)];
}
function getRandomUpper() {
    return upperCase[Math.floor(Math.random() * upper.length)];
}
function getRandomLower() {
    return lower[Math.floor(Math.random() * lower.length)];
}
function getRandomSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(get)

if (number === true) {
    minimumNumbers = getRandomNumber.getNumbers();
    minimumCount++;

  }

  if (lowerCase === true) {
    minimumLowerCases = getRandomLower.getLowerCases();
    minimumCount++;

  }

  if (upperCase === true) {
    minimumUpperCases = getRandomUpper.getUpperCases();
    minimumCount++;

  }

  if (symbol === true) {
    minimumSymbolCharacters = getRandomSymbol.getSymbolCharacters();
    minimumCount++;

  }

  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < length; - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;



  

  