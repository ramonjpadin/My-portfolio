// Assignment Code
var generateButton = document.getElementById('generate')
var number = ["0","1","2","3","4","5","6","7","8","9"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbol = ["!","@","#","$","%","^","&","*","(",")"];
var randomFunction= {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  };


window.addEventListener('load', function() {
    var length = prompt("How many characters would you like your password to be?");

    while (length < 8 || length > 128) {
      length = prompt("How many characters would you like your password to be?");
    }
        var numberConfirm = confirm("Do you want numbers in your password?");
        var lowerConfirm = confirm("Do you want lowercases in your password?");
        var upperConfirm = confirm("Do you want uppercases in your password?");
        var symbolConfirm = confirm("Do you want special characters in your password?");
    
    while (!(upperConfirm || lowerConfirm || numberConfirm || symbolConfirm)) {
        alert("You must select at least one character type!");

        upperConfirm = confirm("Would you like to use uppercase letters?");
        lowerConfirm = confirm("Would you like to use lowercase letters?");
        numberConfirm = confirm("would you like to use numbers?");
        symbolConfirm = confirm("would you like to use special characters?");
    }
    const resultEl = document.getElementById('password');

    document.getElementById('generate').addEventListener('click', () => {
        resultEl.value = generatePassword(lower, upper, number, symbol, length);
    });
      if (!password) {
        return;
    }
});
    // the DOm    
      function generatePassword(upper, lower, symbol, number) {
        let generatedPassword = '';
        const typesCount = lower + upper + number + symbol;
        const typesArr = [{
          lower 
        }, {
          upper
        }, {
          number
        }, {
          symbol
        }].filter(item => Object.values(item)[0]);

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
        }
        const finalPassword  = generatedPassword.slice(0, length);

  return finalPassword;
}  
//functions
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
console.log(generatePassword);