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




// function test() {
// var passwordLength = document.getElementById("password_length").value;
//             console.log(passwordLength);
//         }

// // function test() {
// //     console.log(document.getElementById("password_length").value);
// // }



function generate_password() {
//grab desired password length from element
    var passwordLength = document.getElementById("password_length").value; //prompt("Please enter length between 8 and 128");
    var password = "";
    //document.getElementById("password_length");
//Arrays containing all possible characters
    var symbols = "!#$%&'()*+,-./:<=>?@[]^_`{|}~";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
//check if boxes are checked for desired character types and assign a boolean value to specified variable
    var symbolsChecked = document.getElementById("special_characters").checked;
    var lowercaseChecked = document.getElementById("lowercase").checked;
    var uppercaseChecked = document.getElementById("uppercase").checked;
    var numericChecked = document.getElementById("numeric").checked;



    if (passwordLength === null) {
        throw alert("See ya later");
    }

    if (passwordLength > 128 || passwordLength < 8) {
    throw alert("Your length must be between 8 & 128 characters");
    }

    if (lowercaseChecked === false && uppercaseChecked === false && symbolsChecked === false && numericChecked === false  ) {
        alert ("Please select AT LEAST ONE criteria for password generation");
    }

//create a variable used in random generation of portion of passwordlength that is assigned to checked password criteria.
//Variable is equal to one less than the number of criteria that is checked.
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

    console.log(y);

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

    //Below code is if statements that code for the conditions that specify when only lowercase criteria is checked
    if (lowercaseChecked === true && uppercaseChecked === false && symbolsChecked === false && numericChecked === false){
        lowercaseLength = passwordLength;
    }
    //Below code is if statements that code for the conditions that specify when only uppercase criteria is checked
    if (lowercaseChecked === false && uppercaseChecked === true && symbolsChecked === false && numericChecked === false){
        uppercaseLength = passwordLength;
    }
    //Below code is if statements that code for the conditions that specify when only symbols criteria is checked
    if (lowercaseChecked === false && uppercaseChecked === false && symbolsChecked === true && numericChecked === false){
        symbolsLength = passwordLength;
    }
    //Below code is if statements that code for the conditions that specify when only numeric criteria is checked
    if (lowercaseChecked === false && uppercaseChecked === true && symbolsChecked === false && numericChecked === true){
        numericLength = passwordLength;
    }

    console.log(symbolsLength)
    console.log(lowercaseLength)
    console.log(uppercaseLength)
    console.log(numericLength);

   
//If the boxes are checked generate a random number and use it to pull a character from the desired array.

//create function for repeat code here.


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
        var num = Math.floor(Math.random()*uppercase.length);
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
        var num = Math.floor(Math.random()*numeric.length);
        password = password.concat(numeric[num]);
        }
    }   else {
            password = password;
        }

    console.log(symbolsLength)
    console.log(lowercaseLength)
    console.log(uppercaseLength)
    console.log(numericLength);

    // if (numericLength + symbolsLength + uppercaseLength + lowercaseLength < passwordLength) {
    //     var x = passwordLength -(numericLength + symbolsLength + uppercaseLength + lowercaseLength)

    // }

    console.log(symbolsLength)
    console.log(lowercaseLength)
    console.log(uppercaseLength)
    console.log(numericLength);
    console.log(password);

    //Below code breaks password string down into its elements and shuffles them around randomnly
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
    document.getElementById("password_spot").innerHTML = password;
    
    }

    // document.getElementById("password_spot").addEventListener("click", generate_password);
    





    
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


