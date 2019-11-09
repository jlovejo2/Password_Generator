/*Outline of steps to generate password
when generate password button is clicked
-checks to see if special characters, numeric, lowercase, and uppercase are true
-if true assign a random portion of password length to each one (has to add up desired length)
-if false won't use in password, if none are clicked give error message saying "at least one password criteria must be checked"

-inside each special character have a number assigned to each character in that array.
-create a for loop that runs for the number of password length characters it has been assigned
-this for loop will generate a random number which will then be used to pull an index position from the array for a character
-result will be a new array
-do this for all checked criteria
-merge arrays into a randomized password
*/

//high security
//crypto.getRandomValues()
//window.crypto.getRandomValues()

//low security
//Math.random()

//Criteria:
//length 8 to 128 characters
// special characters
// lowercase characters
// uppercase characters
// numeric characters

var password = " "
//Arrays containing all possible characters
var symbols = "!#$%&'()*+,-./:=?@[]^_`{|}~";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
//check if boxes are checked for desired character types and assign a boolean value to specified variable
var symbolsChecked = document.getElementById("special_characters").checked;
var lowercaseChecked = document.getElementById("lowercase").checked;
var uppercaseChecked = document.getElementById("uppercase").checked;
var numericChecked = document.getElementById("numeric").checked;


function copyToClipboard() {
    var copyText = document.querySelector("password_spot");
    copyText.select();
    // copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

//Below function will take a random number "a" of characters out of string b and place them into password string.
function randomPosition (a,b) {
    //For loop that runs for as long as the random length of the User designated password length that was assigned to it.
    for (i=0; i < a; i++) {
         //pick a random number between 0 and the length of lowercase string
        var num = Math.floor(Math.random()*b.length);
        //find the character in the position of lowercase string for the random number generated and add it to password 
        password = password.concat(b[num]);
    }
}

//Below code breaks a string down into its elements and shuffles them around randomnly
function randomizeString (x) {
    //splits x into an array of substrings and assigns the array to "a"
    var a = x.split("");
    //assigns the length of array a to variable n
    var n = a.length;
    //For loop is defined to run for every element of array a.  i = n-1 becauses first element of array is 0.
        for(var i = n - 1; i > 0; i--) {
            //Variable j is assigned to a random number that is between 1 and n.
            var j = Math.floor(Math.random() * (i + 1));
            //The element of current position in array is assigned to a temp variable
            var tmp = a[i];
            //Since the current content was assigned to temp variable in above line set current array position equal to a random array position.
            a[i] = a[j];
            //Now I set the temp variable (the old content of current position) equal to the random position that just got assigned to current position.
            a[j] = tmp;
        }
        //I take the array a and join it back into a string and set that equal to x
        x = a.join("");
}

function generate_password() {
    //Reset password as a blank string.
    password = ""
    //grab desired password length from element
    var passwordLength = document.getElementById("password_length").value;

    //If statement alerting user that the password length they entered is not in the designated length requirments.
    if (passwordLength > 128 || passwordLength < 8) {
    throw alert("Your length must be between 8 & 128 characters");
    }
    //If statement alerting user that they did not pick at least one password criteria for generation
    if (lowercaseChecked === false && uppercaseChecked === false && symbolsChecked === false && numericChecked === false  ) {
        alert ("Please select AT LEAST ONE criteria for password generation");
    }

    //create a variable "y" used in random generation of portion of passwordlength that is assigned to checked password criteria.
    //Y is equal to one less than the number of criteria that is checked.
    var y = -1;
    if(lowercaseChecked){
        y++;
    } else {
        lowercaseLength = 0;
    }
    if(uppercaseChecked){
        y++;
    } else {
        uppercaseLength = 0;
    }
    if(symbolsChecked) {
        y++;
    } else {
        symbolsLength = 0;
    }
    if(numericChecked) {
        y++;
    } else {
        numericLength = 0;
    }
    
    //Assign a portion of password length to each symbol
    //use Math.random to generate a random number between 0 and 1(essentially a percentage) and multiply it by the passwordLength (between 8 to 128) provided by User.  
    //The goal is to assign a random percentage of the passwordLength to the symbolsLength. Math.Round is used to round that number to nearest integer.
    //make 3 a variable that changes based on trues
    if (lowercaseChecked && lowercaseLength !== 0){
    var lowercaseLength = 1 + Math.round((passwordLength-y)*Math.random());
    }
    //Using Math.random assign a random percentage of remainder of password length to lowercaseLength
    if (uppercaseChecked && uppercaseLength !== 0) {
    var uppercaseLength = 1 + Math.round(((passwordLength-y)-lowercaseLength)*Math.random());
    }
    //Using Math.random assign a random percentage of remainder of password length to uppercaseLength
    if (symbolsChecked && symbolsLength !== 0) {
    var symbolsLength = 1 + Math.round(((passwordLength-y)-lowercaseLength-uppercaseLength)*Math.random());
    }
    //Assign remaining portion of passwordLength to numericLength
    if (numericChecked && numericLength !== 0) {
    var numericLength = passwordLength-symbolsLength-lowercaseLength-uppercaseLength;
    }

    //Below code is if statement that codes for the conditions that specify when only lowercase criteria is checked
    if (lowercaseChecked === true && uppercaseChecked === false && symbolsChecked === false && numericChecked === false){
        lowercaseLength = passwordLength;
    }
    //Below code is if statement that codes for the conditions that specify when only uppercase criteria is checked
    if (lowercaseChecked === false && uppercaseChecked === true && symbolsChecked === false && numericChecked === false){
        uppercaseLength = passwordLength;
    }
    //Below code is if statement that codes for the conditions that specify when only symbols criteria is checked
    if (lowercaseChecked === false && uppercaseChecked === false && symbolsChecked === true && numericChecked === false){
        symbolsLength = passwordLength;
    }
    //Below code is if statement that codes for the conditions that specify when only numeric criteria is checked
    if (lowercaseChecked === false && uppercaseChecked === true && symbolsChecked === false && numericChecked === true){
        numericLength = passwordLength;
    }
   
    //If the boxes are checked generate a random number and use it to pull a character from the desired array.
    //If statement checking for lowercase criteria being checked
    if (lowercaseChecked) {
        //runs the randomPosition function which will pull a random number = to lowercaseLength of characters out of lowercase string
        randomPosition(lowercaseLength, lowercase,);
        }    
    if (uppercaseChecked) {
        randomPosition(uppercaseLength, uppercase,);  
    }  
    if (symbolsChecked) {
        randomPosition(symbolsLength, symbols,);
    }  
    if (numericChecked){
        randomPosition(numericLength, numeric,);
    } 

   randomizeString(password);

    //grab content of password generator and place password into it.
    document.getElementById("password_spot").innerText = password;

}

