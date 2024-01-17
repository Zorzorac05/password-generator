// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 //sets up arrays for letters upercase and lowercase, numbers, and special characters
 const lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
 const upperArray = lowerArray.map(lowerArray => lowerArray.toLocaleUpperCase());
 //console.log(upperArray[7]);
 const numericArray = [0,1,2,3,4,5,6,7,8,9];
 const specialCharArray = ["!","$","%","*","#"];

function generatePassword() {
  //promots pop up when the user clicks the button to get the peramiters of the password
  var length = prompt("how long do you want the password to be?\n8 to 128 charcters");
  var lower = confirm("Do you want lowercase character?\nOk for yes");
  var upper = confirm("Do you want uppercase character?\nOk for yes");
  var numeric = confirm("Do you want numbers?\nOk for yes");
  var specialChar = confirm("Do you want special character?\nOk for yes");

// if else to call fillPassword function based on what criteria the user choses
if(lower && upper && numeric && specialChar){
  return fillPassword(length, 4);
} else if(lower && upper && numeric){
  return fillPassword(length, 3);
} else if(lower && upper){
  return fillPassword(length, 2);
}else if(lower){
  return fillPassword(length, 1);
}else{
  return "you dont want a password then";
}

}

//function to fill the password given the filled in info
function fillPassword(length, num){
  //sets up temp array to fill
  const temp = [];
 
  //for loop iterates based on the desired password length
  for(var i = 0; i < length; i++){
    //choses random array to pull from within the critira then uses if to pull from 1 of the 4 arrays
    var arrays = Math.floor(Math.random() * num);

    if(arrays == 0){
      //grabs a random position from the selected array
      temp.push(lowerArray[Math.floor(Math.random() * lowerArray.length)]);
    }else if(arrays == 1){
      temp.push(upperArray[Math.floor(Math.random() * upperArray.length)]);
    }else if(arrays == 2){
      temp.push(numericArray[Math.floor(Math.random() * numericArray.length)]);
    }else {
      temp.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
    }
  }
  //removes commas so the array prints as one cohisive line
  return temp.join("");
}