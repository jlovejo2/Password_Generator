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


//Below Function will copy the password to the clipboard
function copyToClipboard() {
    //grabbing the inner text from password_spot which is where the password is printed and setting it equal to variable as a string
    var text = document.querySelector("#password_spot").innerText;
    //creating an temporary element called text area in the document and setting it equal to a variable
    var tempEl = document.createElement("textarea");
    //calling the temp element jsut created to be appended
    document.body.appendChild(tempEl);
    //setting the value of temp element to the variable text
    tempEl.value = text;
    //use the select function to select the text within the  element
    tempEl.select();
    //execute a copy to clipboard on the selected text in the document
    document.execCommand("copy");
    //remove the temporary element
    document.body.removeChild(tempEl)
}

function generate_password() {

    //Reset password as a blank string.
    var password = "";
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
    //grab desired password length from element
    var passwordLength = document.getElementById("password_length").value;

        //If statement alerting user that the password length they entered is not in the designated length requirments.
        if (passwordLength > 128 || passwordLength < 8) {
            throw alert("Your length must be between 8 & 128 characters");
        }
        //If statement alerting user that they did not pick at least one password criteria for generation
        if (lowercaseChecked === false && uppercaseChecked === false && symbolsChecked === false && numericChecked === false  ) {
            throw alert ("Please select AT LEAST ONE criteria for password generation");
        }

        //Declare a variable that is used in the random assigning of percentage of password length below.
        var y = -1;
        if (lowercaseChecked) {
            y++;
        }
        if (uppercaseChecked) {
            y++;
        }
        if (symbolsChecked) {
            y++;
        }
        if (numericChecked) {
            y++;
        }

        //Below is a series of If statements to determine what criteria were selected and what formula to use to calculate random percentage of passwordlength. 
        //use Math.random to generate a random number between 0 and 1(essentially a percentage) and multiply it by the passwordLength (between 8 to 128) provided by User.  
        //The goal is to assign a random percentage of the passwordLength.
        if (y == 1 && lowercaseChecked && uppercaseChecked ){
            var lowercaseLength = Math.round((passwordLength-y)*Math.random());
            var uppercaseLength = passwordLength - lowercaseLength;
        }
        if (y == 1 && lowercaseChecked && symbolsChecked ){
            var lowercaseLength = Math.round((passwordLength-y)*Math.random());
            var symbolsLength = passwordLength - lowercaseLength;
        }
        if (y == 1 && lowercaseChecked && numericChecked ){
            var lowercaseLength = Math.round((passwordLength-y)*Math.random());
            var numericLength = passwordLength - lowercaseLength;
        }
        if (y == 1 && uppercaseChecked && symbolsChecked) {
            var uppercaseLength = Math.round((passwordLength-y)*Math.random());
            var symbolsLength = passwordLength - uppercaseLength;
        }
        if (y == 1 && uppercaseChecked && numericChecked) {
            var uppercaseLength = Math.round((passwordLength-y)*Math.random());
            var numericLength = passwordLength - uppercaseLength;
        }
        if (y == 1 && symbolsChecked && numericChecked) {
            var symbolsLength = Math.round((passwordLength-y)*Math.random());
            var numericLength = passwordLength - symbolsLength;
        }
        if (y == 2 && symbolsChecked && uppercaseChecked && numericChecked) {
            var symbolsLength = Math.round((passwordLength-y)*Math.random());
            var uppercaseLength = Math.round((passwordLength-symbolsLength)*Math.random());
            var numericLength = passwordLength - uppercaseLength - symbolsLength;
        }
        if (y == 2 && uppercaseChecked && numericChecked && lowercaseChecked) {
            var lowercaseLength = Math.round((passwordLength-y)*Math.random());
            var uppercaseLength = Math.round((passwordLength-lowercaseLength)*Math.random());
            var numericLength = passwordLength - lowercaseLength - uppercaseLength;
        }
        if (y == 2 && numericChecked && lowercaseChecked && symbolsChecked) {
            var symbolsLength = Math.round((passwordLength-y)*Math.random());
            var lowercaseLength = Math.round((passwordLength-symbolsLength)*Math.random());
            var numericLength = passwordLength - symbolsLength - lowercaseLength
        }
        if (y == 2 && lowercaseChecked && symbolsChecked && uppercaseChecked) {
            var symbolsLength = Math.round((passwordLength-y)*Math.random());
            var uppercaseLength = Math.round((passwordLength-symbolsLength)*Math.random());
            var lowercaseLength = passwordLength - symbolsLength - uppercaseLength
        }
        if (y == 3 && lowercaseChecked && symbolsChecked && uppercaseChecked && numericChecked) {
            var symbolsLength = Math.round((passwordLength-y)*Math.random());
            var uppercaseLength = Math.round((passwordLength-symbolsLength)*Math.random());
            var numericLength = Math.round((passwordLength-symbolsLength-uppercaseLength)*Math.random());
            var lowercaseLength = passwordLength - symbolsLength - uppercaseLength - numericLength
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
        if (lowercaseChecked === false && uppercaseChecked === false && symbolsChecked === false && numericChecked === true){
            numericLength = passwordLength;
        }

        console.log(lowercaseLength);
        console.log(uppercaseLength);
        console.log(symbolsLength);
        console.log(numericLength);
   
        //If the boxes are checked generate a random number and use it to pull a character from the desired array.
        //If statement checking for lowercase criteria being checked
        if (lowercaseChecked === true) {
            //for loop that runs for the random length of password that lowercase was assigned earlier.
            for (var i=0; i <= lowercaseLength; i++) {
                //find a random number between 0 and one less than length of lowercase string
                var num = Math.floor(Math.random()*lowercase.length);
                //for that random number find the character in that location in lowercase string and add it to password
                password = password.concat(lowercase[num]);
            }
        }    
        if (uppercaseChecked === true) {
            for (var i=0; i <= uppercaseLength; i++) {
                var num = Math.floor(Math.random()*uppercase.length);
                password = password.concat(uppercase[num]);
            }  
        }  
        if (symbolsChecked === true) {
            for (var i=0; i <= symbolsLength; i++) {
                var num = Math.floor(Math.random()*symbols.length);
                password = password.concat(symbols[num]);
            }
        }  
        if (numericChecked === true){
            for (var i=0; i <= numericLength; i++) {
                var num = Math.floor(Math.random()*numeric.length);
                password = password.concat(numeric[num]);
            }
        } 

        console.log(password);

    //Below code breaks a string down into its elements and shuffles them around randomnly
    //splits password into an array of substrings and assigns the array to "a"
    var a = password.split("");
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
    //I take the array a and join it back into a string and set that equal to password
    password = a.join("");

    console.log(password);

    //grab content of password generator and place password into it.
    document.getElementById("password_spot").innerText = password;

}

