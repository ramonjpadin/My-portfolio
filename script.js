// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(lenght, upper, lower, numb,charcter); => {
    let password =[];

    if 

    return "Generated password will go here"
}
// random generators 
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const specialChar = ["!","@","#","$","%","^","&","*","(",")"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const passwordLength = 128;
var password = "";
function getRandomLower () {
    var lowerCase = Math.floor(Math.random(26) * lowerCase.length);
}
function getRandomUpper () {
    var upperCase = Math.floor(Math.random(26) * upperCase.length);
}
function getRandomChar () {
    var specialChar = Math.floor(Math.random(10) * specialChar.length);
}
function getRandomNum () {
    var numbers = Math.floor(Math.random(10) * numbers.length);
}

console.log(getRandomChar);
console.log(getRandomLower);
console.log(getRandomNum);
console.log(getRandomUpper)



//maximum length of password validation
if(passwordLength < 8) {  
}
   
 if(passwordLength > 128) {    
 } 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
