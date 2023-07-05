// The below JS code is only for custom details(learn more signin)

// The below JS code is only for custom select language

var langSelect = document.getElementById("language-select"); // The displayed language box id
var currentLang = document.getElementById("current-lang"); // As the name depicts
var options = document.getElementsByClassName("options"); // Same as previous
var langList = document.getElementById("lang-list");

langSelect.onclick = function(){
    langList.classList.toggle("hide-lang-list"); // It will help us when we click on some language select box then it will hide and also show the hindi and english language
}
// Hide the language list when the user clicks outside of it
document.onclick = function(event){
    if(event.target != langSelect && event.target.parentNode != langSelect){
        langList.classList.add("hide-lang-list");
    }
    
}
// From the below code we select the language between english and hindi
for(const option of options){
    option.onclick = function(){
        currentLang.innerHTML = this.textContent;
    }
}