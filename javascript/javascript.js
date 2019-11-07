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

//low security
//Math.random()

//Criteria:
//length 8 to 128 characters
// special characters
// lowercase characters
// uppercase characters
// numeric characters


/*if (length > 128 && length < 8) {
    alert("You have chosen a length outside of criteria");
    break
}*/


//function passwordGeneration() {
//grab desired password length from element
    var passwordLength = 10; //document.getElementbyId("password_length");
    var password = "";
    //document.getElementById("password_length");
//Arrays containing all possible characters
    var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
//check if boxes are checked for desired character types and assign a boolean value to specified variable
    var symbolsChecked = document.getElementById("special_characters").checked;
    var lowercaseChecked = document.getElementById("lowercase").checked;
    var uppercaseChecked = document.getElementById("uppercase").checked;
    var numericChecked = document.getElementById("numeric").checked;

//Assign a portion of password length to each symbol
    //use Math.random to generate a random number between 0 and 1(essentially a percentage) and multiply it by the passwordLength (between 8 to 128) provided by User.  
    //The goal is to assign a random percentage of the passwordLength to the symbolsLength. Math.Round is used to round that number to nearest integer.
    var lowercaseLength = 1 + Math.round((passwordLength-3)*Math.random());
    //Using Math.random assign a random percentage of remainder of password length to lowercaseLength
    var uppercaseLength = 1 + Math.round(((passwordLength-3)-lowercaseLength)*Math.random());
    //Using Math.random assign a random percentage of remainder of password length to uppercaseLength
    var symbolsLength = 1 + Math.round(((passwordLength-3)-lowercaseLength-uppercaseLength)*Math.random());
    //Assign remaining portion of passwordLength to numericLength
    var numericLength = passwordLength-symbolsLength-lowercaseLength-uppercaseLength;

    console.log(symbolsLength)
    console.log(lowercaseLength)
    console.log(uppercaseLength)
    console.log(numericLength);
//If the boxes are checked generate a random number and use it to pull a character from the desired array.

function generate_password() {

    if (lowercaseChecked === false && uppercaseChecked === false && symbolsChecked === false && numericChecked === false  ) {
        alert ("Please select AT LEAST ONE criteria for password generation");
        break;
    }

    if (lowercaseChecked === true ) {
        for (i=0; i < lowercaseLength; i++) {
        var num = Math.floor(Math.random()*lowercase.length);
        password = password.concat(lowercase[num]);
        }    
    }   else {
            password = password;
        }

    if (uppercaseChecked === true ) {
        for (i=0; i < uppercaseLength; i++) {
        var num = Math.floor(Math.random()*lowercase.length);
        password = password.concat(uppercase[num]);
        }
    }   else {
            password = password;
        }

    if (symbolsChecked === true ) {
        for (i=0; i < symbolsLength; i++) {
        var num = Math.floor(Math.random()*symbols.length);
            password = password.concat(symbols[num]);
        }    
    }   else {
            password = password;
        }

    if (numericChecked === true ){
        for (i=0; i < numericLength; i++) {
        var num = Math.floor(Math.random()*10);
        password = password.concat(numeric[num]);
        }
    }   else {
            password = password;
        }
   
    console.log(password);

    //Below code breaks password string down into its elements and shuffles them around randomnly
    //splits password into an array of substrings and assigns the array to a
    var a = password.split("");
    //assigns the length of array a to variable n
    var n = a.length;
    //For loop is defined to run for every element of array a.  i = n-1 becauses first element of array is 0.
        for(var i = n - 1; i > 0; i--) {
            //Variable j is assigned to a random number that is between 1 and n.
            var j = Math.floor(Math.random() * (i + 1));
            //The element of current position in array is assigned to a temp variable
            var tmp = a[i];
            //Since the current content was assigned to temp variable in above line I set current array position equal to a random array position.
            a[i] = a[j];
            //Now I set the temp variable (the old content of current position) equal to the random position that just got assigned to current position.
            a[j] = tmp;
        }
        //I take the array a and join it back into a string and set that equal to password
        password = a.join("");

    console.log(password);

    //grab content of password generator and place password into it.
    document.getElementById("password_spot").innerHTML = "password";
    }
    





    
    //try adding results to a string
    
    //try approach of adding array to a larger array
    /*if (symbolsChecked === true && lowercaseChecked === true && uppercaseChecked === true && numericChecked === true ) {
        var password = symbols + lowercase + uppercase + numeric;
    } else if (lowercaseChecked === true && uppercaseChecked)

    if (lowercaseChecked === true ) {
        var password = lowercase;
    }
    
    if (uppercaseChecked === true ) {

    }

    if (numericChecked === true ){

    }
*/


