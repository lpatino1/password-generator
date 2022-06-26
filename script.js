var length;
var specialChars = "true";
var numChars = "true";
var upperCase = "true";
var lowerCase = "true";
var password ="";

//COULD THIS BE AN OBJECT?
var parametersAll = [`!@#$%&1234567890ABCDEFGHIJKLMNOPQRSTUVWXZ`];
var numOnly = [`0123456789`];
var specials = [`!@#$%&`];
var upperLetters = [`ABCDEFGHIJKLMNOPQRSTUVWXYZ`];
var lowerLetters = [`abcdefghijklmnopqrstuvwxyz`];
//create command that sets uppercase to lowercase if user selects lowercase only (no uppercase)???

//Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  alert("Select your password parameters:")
  var password = generatePassword();
  // generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //1. prompt user for parameters
  //prompt length, special characters, numbers, uppercase, lowercase
  getParameters();
  console.log(length);

  //2.Create random password from available characters
  //for loop run the number of times that user sets length to (if they want a 10 character password)
  //add random character to password string
  // for (i=0; i<length, i++;){
  //   //add 1 random character to password
  //   if(upperCase=="false" && lowerCase=="false"){
  //     window.alert("Invalid selections. You must have either lowercase or uppercase letters in your password.\nYou may choose to include special characters or numbers." )
  //   } else{
  //     if(upperCase =="false" && lowerCase == "true"){
  //       if(specialChars == "true" && numChars == "true"){
  //         var str = upperLetters.concat(lowerLetters);
  //         var chars = (Math.floor(Math.random()*parametersAll.length))
  //         password = str[chars]
  //         console.log(password);
  //       }
  //     }
  //   }
  //   return password;
  // }

  }
  


function getParameters(){
//have this function update the global variables
//set length via prompt
  let length = prompt("Input character length: "+ "\nMinimum character length: 8" + "\nMaximum Character length: 128");
  console.log(length);
//add characters to availableCharacters via user input (WINDOW CONFIRM)
  if(length<8 || length>128){
    window.confirm("Invalid character length\n" + "\nMinimum character length: 8" + "\nMaximum Character length: 128")
  } else{
    //confirm if user wants special characters, numbers, uppercase and lower case letters
    if(!window.confirm("Do you want special characters?")){
      specialChars = "false";
    }

    if(!window.confirm("Do you want numbers?")){
      numChars = "false";
    }

    if(!window.confirm("Do you want uppercase letters?")){
      upperCase = "false";
    }

    if(!window.confirm("Do you want lowercase letters?")){
      lowerCase = "false";
    }
  }
  return length;
}
