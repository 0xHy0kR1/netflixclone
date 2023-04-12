// The below JS code is only for custom select language


var langSelect = document.getElementById("language-select");// The displayed language box id 
var currentLang = document.getElementById("current-lang");// As the name depicts
var options = document.getElementsByClassName("options");// same as previous
var langList = document.getElementById("lang-list");


langSelect.onclick = function(){
    langList.classList.toggle("hide-lang-list");// It will help us when we click on some language select box then it will hide and also show the hindi and english langu.
}
// Hide the language list when the user clicks outside of it
document.onclick = function(event) {
    if (event.target != langSelect && event.target.parentNode != langSelect) {
      langList.classList.add("hide-lang-list");
    }
}
// from the below code we select the language between english and hindi
for (const option of options) {
    option.onclick = function(){
        currentLang.innerHTML = this.textContent;
    }
}
