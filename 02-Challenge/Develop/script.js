// Generate Button Code
var generateBtn = document.querySelector("#generate");

// Password Parameters
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!@£$%^&*?~/"

function getPassword(){
  var characters = ""
  var randomPass = ""

  // This will pop up to explain to user how to use the function  
  var passLength = prompt ("Pick a length for your password between 6-40 characters. Please type the length of password you would like");
 
  //This will pop up when the user fails to select the correct criteria for their password.
  if(passLength < 6 || passLength > 40 || isNaN(passLength)) {
    alert ("The password must be between 6 and 40 characters , Please enter a value between these two values.");
    return;

//Asks user their parameters of their desired password
  } else {
    var lower = confirm("Do you want your password to have lowercase letters?");
    if (lower) {characters += lowercase;}
    var upper = confirm("Do you want your password to contain uppercase characters?");
    if (upper) {characters += uppercase;}
    var number = confirm("Do you want your password to contain numbers?");
    if (number) {characters += numbers;}
    var special = confirm("Do you want special characters in your password?");
    if (special) {characters += specials;}

  }

  for (i=0 ; i < passLength; i++) {

    randomPass += characters[Math.floor(Math.random()* characters.length)]
  }
  return(randomPass);
}
  var passwordText = document.querySelector("#password");

  function writePassword (randomPass) {
    if (password.length === 0) {
    return ;
    }
    passwordText.value = randomPass;
  }

  generateBtn.addEventListener("click", function () {writePassword(getPassword())});


