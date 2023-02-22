// Writing Below javascript to change the border of div of class input-email-block when input tag gets the focus
const inputGreyBorder = document.querySelector('#email-of-user');
const divWhiteBorder = document.querySelector('.block-of-input');

inputGreyBorder.addEventListener('focus', () =>{
    divWhiteBorder.style.border = "2px solid white";
})
inputGreyBorder.addEventListener('blur', () =>{
    divWhiteBorder.style.border = "none";
})
