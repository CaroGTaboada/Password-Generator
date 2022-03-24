
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function generatePassword() {

var Options = [];
var LowerCase = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var SpecialCharacter = [!"#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ];
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var result = [];
var user = [];
UpperCase [1]

  var numCharacterp = prompt ("Number of characters (8 -128)");
  var uppercasesp = confirm ("Would you like to include uppercase letters in your password?");
  var lowercasesp = confirm ("Would you like to include lowercase letters in your password?");
  var charactersp = confirm ("Would you like to include special characters in your password?");
  var numbersp = confirm ("Would you like to include numbers in your password?");

  if (numCharacterp) {
result = result.concat(Numbers);
  }

  if (uppercasesp) {
    result = result.concat(UpperCase);
  }

  if (lowercasesp) {
    result = result.concat(LowerCase);
  }

  if (charactersp){
    result = result.concat(SpecialCharacter);
  }
  
  console.log(result)

  for (var i = 0; i < numCharacterp; i++) {
 user.push (result[Math.floor(Math.random() * result.length)]);
  }

  return user.join("");
 }

 function writePassword () {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
 }

 