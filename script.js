// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    

    return "Generated password will go here"
}

function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}
console.log(getRandomUpper());
console.log(getRandomLower());
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
