// Writing Below javascript to change the border of div of class input-email-block when input tag gets the focus
const inputGreyBorder = document.querySelector('#email-of-user-top-box');
const divWhiteBorder = document.querySelector('.block-of-input');

inputGreyBorder.addEventListener('focus', () =>{
    divWhiteBorder.style.border = "2px solid white";
})
inputGreyBorder.addEventListener('blur', () =>{
    divWhiteBorder.style.border = "none";
})

// Writing js for label when user clicked on email box(top portion of homepage)
const emailInputTop = document.getElementById("email-of-user-top-box"); // this is capturing email of upper box 
const emailLabelTop = document.querySelector(".label-email-name-top-box");

// Check for stored email on page load 
window.addEventListener("load", () =>{
    const storedEmail = localStorage.getItem('userEmail1');
    if(storedEmail){
        emailInputTop.value = storedEmail;
        emailLabelTop.classList.add('label-move-top');
    }
})
// Store email in local storage when user enters it
emailInputTop.addEventListener('input', () => {
    localStorage.setItem('userEmail1', emailInputTop.value);
})
// Move label up on input focus
emailInputTop.addEventListener('focus', () => {
    emailLabelTop.classList.add('label-move-top');
});

// Move label down on input blur if no text entered
emailInputTop.addEventListener('blur', () => {
    if(emailInputTop.value == ''){
        emailLabelTop.classList.remove('label-move-top');
    }
});

// Writing js for label when user clicked on email (bottom portion of homepage)
const emailInputBottom = document.getElementById("email-of-user-bottom-box");
const emailLabelBottom = document.querySelector(".label-email-name-bottom-box");
// Check for stored email on page load
window.addEventListener("load", () =>{
    const storedEmail = localStorage.getItem('userEmail2');
    if(storedEmail){
        emailInputBottom.value = storedEmail;
        emailLabelBottom.classList.add('label-move-bottom');
    }
})
// Store email in local storage when user enters it
emailInputBottom.addEventListener('input', () => {
    localStorage.setItem('userEmail2', emailInputBottom.value);
})
// Move label up on input focus
emailInputBottom.addEventListener('focus', () => {
    emailLabelBottom.classList.add('label-move-bottom');
});
// Move label down on input blur if no text entered
emailInputBottom.addEventListener('blur', () => {
    if(emailInputBottom.value == ''){
        emailLabelBottom.classList.remove('label-move-bottom');
    }
});

// Writing js for validating email and if email is correct then redirecting to another page
const form = document.querySelector('#index-page-email');

form.addEventListener('submit', () =>{
    e.preventDefault();

    const emailInputTop = document.querySelector('#email-of-user-top-box');
    const email = emailInputTop.value.trim();

    // Validate email address
    const emailRegex = `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`;
    if (emailRegex.test(email)) {
        // Redirect to second page
        window.location.href = 'index.pug/signup.pug';
    }
    else{
        // Display the error message
    }
})

// js for Frequently Asked Questions
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(accordionItem => {
    const accordionHeader = accordionItem.querySelector('.accordion-header');
    const accordionContent = accordionItem.querySelector('.accordion-content');

    accordionHeader.addEventListener('click',()=>{
        // Check if the clicked accordion is already open
        const isOpen = accordionContent.classList.contains('accordion-content-show');
        
        // Close all accordion items
        accordionItems.forEach(item => {
            const content = item.querySelector('.accordion-content');
            content.classList.remove('accordion-content-show');
        })

        // Open the clicked accordion only if it was closed initially
        if(!isOpen) {
            accordionContent.classList.add('accordion-content-show');
        }
    })
})