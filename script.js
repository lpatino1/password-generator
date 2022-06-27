//global variables
var length;
var specialChars = "";
var numChars = "";
var upperCase = "";
var lowerCase = "";

//strings that store available characters
var parametersAll = "!@#$%&1234567890ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
var numOnly = "0123456789";
var specials = "!@#$%&";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";

//Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  alert("Select your password parameters:")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  //1. prompt user for parameters
  //prompt length, special characters, numbers, uppercase, lowercase
  getParameters();
  //2.Create random password from available characters
  //for loop run the number of times that user sets length to (if they want a 10 character password)
  //add random character to password string
  var placeholder="";
 //nested for loops to determine what strings to pull characters from (depends on user input)
  if(!upperCase && !lowerCase){
    window.alert("You must have either lowercase or uppercase letters in your password. Please choose one.")
  } else if(numChars && specialChars && upperCase && lowerCase){
      for (i=0; i<length; i++){
        //add 1 random character to password
         var char = (Math.floor(Math.random()*parametersAll.length));
         placeholder = placeholder + parametersAll[char];
      }
  } else if(numChars && specialChars && upperCase && !lowerCase){
    for (i=0; i<length; i++){
        var str = numOnly + specials + upperLetters;
        var char = (Math.floor(Math.random()*str.length));
        placeholder = placeholder + str[char];
    }
  } else if(numChars && specialChars && !upperCase && lowerCase){
    for (i=0; i<length; i++){
      var str = numOnly + specials + lowerLetters;
      var char = (Math.floor(Math.random()*str.length));
      placeholder = placeholder + str[char];
    }
  } else if(numChars && !specialChars && upperCase && lowerCase){
    for (i=0; i<length; i++){
      var str = numOnly + upperLetters + lowerLetters;
      var char = (Math.floor(Math.random()*str.length));
      placeholder = placeholder + str[char];
    }
  } else if(!numChars && specialChars && upperCase && lowerCase){
    for (i=0; i<length; i++){
      var str = specials + upperLetters + lowerLetters;
      var char = (Math.floor(Math.random()*str.length));
      placeholder = placeholder + str[char];
    }
  } else if(!numChars && !specialChars && upperCase && lowerCase){
    for (i=0; i<length; i++){
      var str = upperLetters + lowerLetters;
      var char = (Math.floor(Math.random()*str.length));
      placeholder = placeholder + str[char];
    }
  } else if(!numChars && !specialChars && !upperCase && lowerCase){
    for (i=0; i<length; i++){
      var char = (Math.floor(Math.random()*lowerLetters.length));
      placeholder = placeholder + lowerLetters[char];
    }
  } else if(!numChars && !specialChars && upperCase && !lowerCase){
    for (i=0; i<length; i++){
      var char = (Math.floor(Math.random()*upperLetters.length));
      placeholder = placeholder + upperLetters[char];
    }
  } else if(!numChars && specialChars && upperCase && !lowerCase){
    for (i=0; i<length; i++){
      var str = upperLetters + specials;
      var char = (Math.floor(Math.random()*str.length));
      placeholder = placeholder + str[char];
    }
  } else if(numChars && !specialChars && upperCase && !lowerCase){
    for (i=0; i<length; i++){
      var str = upperLetters + numOnly;
      var char = (Math.floor(Math.random()*str.length));
      placeholder = placeholder + str[char];
    }
  } else if(numChars && !specialChars && !upperCase && lowerCase){
    for (i=0; i<length; i++){
      var str = lowerLetters + numOnly;
      var char = (Math.floor(Math.random()*str.length));
      placeholder = placeholder + str[char];
    }
  } else if(!numChars && specialChars && !upperCase && lowerCase){
    for (i=0; i<length; i++){
      var str = lowerLetters + specials;
      var char = (Math.floor(Math.random()*str.length));
      placeholder = placeholder + str[char];
    }
  }
  return placeholder;
}
  


function getParameters(){
//have this function update the global variables
//set length via prompt
  length = prompt("Input character length: "+ "\nMinimum character length: 8" + "\nMaximum Character length: 128");
//add characters to availableCharacters via user input (WINDOW CONFIRM)
  if(length<8 || length>128){
    window.confirm("Invalid character length\n" + "\nMinimum character length: 8" + "\nMaximum Character length: 128");
    return;
  } else if (isNaN(length)){
    window.confirm("Invalid input. Password length is not numeric. Please enter a numeric value.");
    return;
  } else{
    //confirm if user wants special characters, numbers, uppercase and lower case letters
    numChars = window.confirm("Do you want numbers?");
    specialChars = window.confirm("Do you want special characters?");
    upperCase = window.confirm("Do you want upppercase letters?");
    lowerCase = window.confirm("Do you want lowercase letters?");
  }
}
