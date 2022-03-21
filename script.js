// Assignment code here
function generatePassword() { 
  alert ("Please choose the upcoming criteria for your password."); 
  var criteria = ""; 
  var criteria = prompt ("Do you want the password to contain an uppercase letter?"); 
  if (criteria === "no") {alert ("You must have at least one uppercase letter. Please click on generate password to start over."); 
} else {var lowercase = ""; 
var lowercase = prompt ("Do you want the password to have a lowercase letter?"); 
} 
if (lowercase === "no") {alert ("You must include at least one lowercase letter."); 
} else { var characterLength = ""; 
var characterLength = prompt ("Enter the character length you want between 8-128.");
 } 
 if (characterLength < 8) { 
   alert ("Characters must be greater than 8."); 
   prompt ("Enter the character length you want between 8-128."); 
  } if (characterLength > 128) { 
    alert ("Characters must be under 128."); 
    prompt ("Enter the character length you want between 8-128."); 
  } if (characterLength > 8 || characterLength < 128) { 
    alert ("You have satisfied the password criteria. Please create you secure password."); 
    var securePassword = ""; 
    var securePassword = prompt ("Create your Secure Password is: "); 
    alert ("Your Secure Password is: " + securePassword); 
  } 
} 
 // var criteria = prompt ("Do you want to include numbers?"); 
 //if (criteria === "yes") { 
   // alert ("You have chosen to include numbers in your password."); 
   //} 
   //else {alert ("You have chosen not to include numbers in your password.")} 
   //alert ("You must choose one speacial chracter"); 
   // var password = ""; 
   //var password = prompt ("Enter your secure password."); 


 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

passwordText.value = password;}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);