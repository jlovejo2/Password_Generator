# My Portfolio
This Porfolio is being created as homework 3 assignment in my coding bootcamp with NorthWestern University. The goal is to add responsive to my webpage with boostrap and media queries.

the link to my page is shown below:
https://jlovejo2.github.io/Password_Generator/

## Table of Contents
* [Password Generator](#password-generator)
* [Password Criteria](#password-criteria)
* [Contact](#contact)
* [Coding Languages Used](#coding-languages-used)
* [Technologies](#technologies)
* [Helpful hints](#helpful-hints)
* [Specific Changes Made](#specific-changes-made)
* [Functions Used](#functions-used)
* [Known Issues With Code](#known-issues-with-code)

## Password Generator
* This web application consists of one page that generates a randomized password for the user.
* There are two buttons on the page.  One to create a randomized password and the other to copy the password to the clipboard.

## Password Criteria	
* Length - between 8 and 128 characters
* Character type options -Special characters, Numeric characters, Lowercase characters, Uppercase characters

## Coding Languages Used
* HTML
* CSS
* Boostrap
* Javascript

## Technologies
This project was created with:
* gitbash
* Visual Studio Code
* github
* bootstrap
* media queries
* Javascript

## Helpful Hints
This project has 4 total files of code:
* index.html - html code for about-me page.
* style.css - css code for styling of page customized from bootstrap.
* javascript.js - all javascript code for the page. Contains four functions.
* assets folder - contains all my images used.

## Specific Changes Made
* I intentionally chose to use checkboxes instead of prompts because I find them to be more user friendly and thought it more beneficial for me to spend time learning to code with these.
* I chose to change the layout of the page because I wanted to create something that I would be willing to attached to my portfolio page and wanted it to be different than the template.
* I have a card on my page with links to sites that provide information on password security and suggestions of characters and password length.
* I created a type box criteria for the webpage for password length.  There are no events attached to box.  The password function just pulls length from box when it is clicked on.
* The layout is intentionally offcenter to frame the "password" in the background image.

## Functions Used
* created a copy to clipboard function.
* created a randomPosition function which grabs random characters from the designated string and assigns to string.
* created a randomizeString function which takes a string and rearranges the contents randomnly.
* created a generate password function.  The main concept of my generate password function.  Is that the user designates the password length and what type of characters they want in it. 
   Then based on that I assign a random percent of the password length to each criteria that the user selected.  Then I pull random characters from each chosen character string for the 
   amount of the random password length % assigned.  These characters get assigned to the password string.  Then I rearrange the password in a random order. 

## Known Issues With Code
* I am aware that I used a lot of if statements and would love to hear feedback on if there are more efficient ways to avoid or group these together.
* I am aware that at minimum width my footer overlaps my password criteria a tiny bit.  I could not figure out what was going wrong in the bootstrap to make such a small overlap


