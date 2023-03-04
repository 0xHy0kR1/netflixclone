// Writing Below javascript to change the border of div of class input-email-block when input tag gets the focus
const inputGreyBorder = document.querySelector('#email-of-user');
const divWhiteBorder = document.querySelector('.block-of-input');

inputGreyBorder.addEventListener('focus', () =>{
    divWhiteBorder.style.border = "2px solid white";
})
inputGreyBorder.addEventListener('blur', () =>{
    divWhiteBorder.style.border = "none";
})

// Writing js for label when user clicked on email box
const emailInput = document.getElementById("email-of-user");
const emailLabel = document.querySelector(".label-email-name");

// Check for stored email on page load 
window.addEventListener("load", () =>{
    const storedEmail = localStorage.getItem('userEmail');
    if(storedEmail){
        emailInput.value = storedEmail;
        emailLabel.classList.add('label-move');
    }
})
// Store email in local storage when user enters it
emailInput.addEventListener('input', () => {
    localStorage.setItem('userEmail', emailInput.value);
})
// Move label up on input focus
emailInput.addEventListener('focus', () => {
    emailLabel.classList.add('label-move');
});

// Move label down on input blur if no text entered
emailInput.addEventListener('blur', () => {
    if(emailInput.value == ''){
        emailLabel.classList.remove('label-move');
    }
});
// Writing js for validating email and if email is correct then redirecting to another page
const form = document.querySelector('#index-page-email');

form.addEventListener('submit', () =>{
    e.preventDefault();

    const emailInput = document.querySelector('#email-of-user');
    const email = emailInput.value.trim();

    // Validate email address
    const emailRegex = `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`;
    if (emailRegex.test(email)) {
        // Redirect to second page
        window.location.href = 'signup-step-1.html';
    }
    else{
        // Display the error message
    }
})