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
  return fillPassword(length, 1);
} else if(lower && upper && numeric){
  return fillPassword(length, 2);
} else if(lower && upper && specialChar){
  return fillPassword(length, 3);
}else if(lower && numeric && specialChar){
  return fillPassword(length, 4);
}else if(upper && numeric && specialChar){
  return fillPassword(length, 5);
}else if(upper && lower){
  return fillPassword(length, 6);
}else if(upper && specialChar){
  return fillPassword(length, 7);
}else if(upper && numeric){
  return fillPassword(length, 8);
}else if(lower && specialChar){
  return fillPassword(length, 9);
}else if(lower && numeric){
  return fillPassword(length, 10);
}else if(specialChar && numeric){
  return fillPassword(length, 11);
}else if(lower){
  return fillPassword(length, 12);
}else if(upper){
  return fillPassword(length, 13);
}else if(specialChar){
  return fillPassword(length, 14);
}else if(numeric){
  return fillPassword(length, 15);
}else{
  return "you dont want a password then";
}

}

//function to fill the password given the filled in info
function fillPassword(length, num){
  //sets up temp array to fill and var arrays to get the array to pull from
  const temp = [];
  var arrays;
 
  //for loop iterates based on the desired password length
  for(var i = 0; i < length; i++){
    //if elses for each combo of inputs they return
    if(num == 1){
      //choses random array to pull from if all are yes
      arrays = Math.floor(Math.random() * 4);
    }else if(num ==2){
      //random number between 1 - 3 then pulls from array within the critera
      x = Math.floor(Math.random() * 3);
      if(x == 1){
        arrays = 1;
      }else if(x == 2){
        arrays = 2;
      }else{
        arrays = 3;
      }
    }else if(num ==3){
      x = Math.floor(Math.random() * 3);
      if(x == 1){
        arrays = 1;
      }else if(x == 2){
        arrays = 3;
      }else{
        arrays = 4;
      }
    }else if(num ==4){
      x = Math.floor(Math.random() * 3);
      if(x == 1){
        arrays = 1;
      }else if(x == 2){
        arrays = 2;
      }else{
        arrays = 4;
      }
    }else if(num ==5){
      x = Math.floor(Math.random() * 3);
      if(x == 1){
        arrays = 2;
      }else if(x == 2){
        arrays = 3;
      }else{
        arrays = 4;
      }
    }else if(num ==6){
      x = Math.floor(Math.random() * 2);
      if(x == 1){
        arrays = 1;
      }else{
        arrays = 2;
      } 
    }else if(num ==7){
      x = Math.floor(Math.random() * 2);
      if(x == 1){
        arrays = 2;
      }else{
        arrays = 4;
      }
    }else if(num ==8){
      x = Math.floor(Math.random() * 2);
      if(x == 1){
        arrays = 2;
      }else{
        arrays = 3;
      } 
    }else if(num ==9){
      x = Math.floor(Math.random() * 2);
      if(x == 1){
        arrays = 1;
      }else{
        arrays = 4;
      }
    }else if(num ==10){
      x = Math.floor(Math.random() * 2);
      if(x == 1){
        arrays = 1;
      }else{
        arrays = 3;
      }
    }else if(num ==11){
      x = Math.floor(Math.random() * 2);
      if(x == 1){
        arrays = 3;
      }else{
        arrays = 4;
      }
    }else if(num ==12){
      arrays = 1;
    }else if(num ==13){
      arrays = 2;
    }else if(num ==14){
      arrays = 4;
    }else if(num ==15){
      arrays = 3;
    }

    if(arrays == 1){
      //grabs a random position from the selected array
      temp.push(lowerArray[Math.floor(Math.random() * lowerArray.length)]);
    }else if(arrays == 2){
      temp.push(upperArray[Math.floor(Math.random() * upperArray.length)]);
    }else if(arrays == 3){
      temp.push(numericArray[Math.floor(Math.random() * numericArray.length)]);
    }else {
      temp.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
    }
  }
  //removes commas so the array prints as one cohisive line
  return temp.join("");
}