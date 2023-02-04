var langSelect = document.getElementById("language-select");
var currentLang = document.getElementById("current-lang");
var options = document.getElementsByClassName("options");
var langList = document.getElementById("lang-list");

langSelect.onclick = function(){
    console.log("me")
    langList.classList.toggle("hide-lang-list");
}

for (const option of options) {
    option.onclick = function(){
        currentLang.innerHTML = this.textContent;
    }
}
