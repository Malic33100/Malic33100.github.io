<<<<<<< HEAD
//assigning js variables to html elements
var AboutText = document.getElementById('about-text');
var myResume = document.getElementById('resume');
var myGithub = document.getElementById('github');
var myLinkedin = document.getElementById('linkedin');
var myContact = document.getElementById('contact');   


//AboutText.textContent = "Hover over an icon to learn more!";

/* for(var i=0;i < pictures.length;i++){
    pictures[i].addEventListener('mouseover',chicken);
} */

// event listeners for each img, on img
myResume.addEventListener('mouseover',resume);
myGithub.addEventListener('mouseover',github);
myLinkedin.addEventListener('mouseover',linkedin);
myContact.addEventListener('mouseover',contactPage);
setTimeout(3000,Welcome());
// functions that change about text according to image hovered over
// event listeners for mouse moving off img are also added

function Welcome(){
    AboutText.textContent = "Hover over an icon to learn more!"
}

function resume() {
AboutText.textContent = "Take a look at my resume";
AboutText.style.opacity = 1;
myResume.addEventListener('mouseout',ResetText);

};

function github() {
    AboutText.textContent = "Check out my Github";
    AboutText.style.opacity = 1;
   myGithub.addEventListener('mouseout',ResetText); 
}

function linkedin() {
    AboutText.textContent = "See me in a dress shirt (linkedin)";
    AboutText.style.opacity = 1;
myLinkedin.addEventListener('mouseout',ResetText);
}

function contactPage() {
    AboutText.textContent = "Contact page";
    AboutText.style.opacity = 1;
myContact.addEventListener('mouseout',ResetText); 
}

// function to reset the about box text after hover
function ResetText() {
    AboutText.textContent = "Hover over an icon to learn more!"
    AboutText.style.opacity = 1;
    AboutText.style.transition = "ease-in";
    AboutText.style.transitionDuration = 2;
}

=======
//assigning js variables to html elements
var AboutText = document.getElementById('about-text');
var myResume = document.getElementById('resume');
var myGithub = document.getElementById('github');
var myLinkedin = document.getElementById('linkedin');
var myContact = document.getElementById('contact');   


//AboutText.textContent = "Hover over an icon to learn more!";

/* for(var i=0;i < pictures.length;i++){
    pictures[i].addEventListener('mouseover',chicken);
} */

// event listeners for each img, on img
myResume.addEventListener('mouseover',resume);
myGithub.addEventListener('mouseover',github);
myLinkedin.addEventListener('mouseover',linkedin);
myContact.addEventListener('mouseover',contactPage);
setTimeout(3000,Welcome());
// functions that change about text according to image hovered over
// event listeners for mouse moving off img are also added

function Welcome(){
    AboutText.textContent = "Hover over an icon to learn more!"
}

function resume() {
AboutText.textContent = "Take a look at my resume";
AboutText.style.opacity = 1;
myResume.addEventListener('mouseout',ResetText);

};

function github() {
    AboutText.textContent = "Check out my Github";
    AboutText.style.opacity = 1;
   myGithub.addEventListener('mouseout',ResetText); 
}

function linkedin() {
    AboutText.textContent = "See me in a dress shirt (linkedin)";
    AboutText.style.opacity = 1;
myLinkedin.addEventListener('mouseout',ResetText);
}

function contactPage() {
    AboutText.textContent = "Contact page";
    AboutText.style.opacity = 1;
myContact.addEventListener('mouseout',ResetText); 
}

// function to reset the about box text after hover
function ResetText() {
    AboutText.textContent = "Hover over an icon to learn more!"
    AboutText.style.opacity = 1;
    AboutText.style.transition = "ease-in";
    AboutText.style.transitionDuration = 2;
}

>>>>>>> af40c1d6e7d2976f696e726a00c3bd1dadaaabf2
