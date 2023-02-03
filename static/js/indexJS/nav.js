var langSelect = document.getElementById("lang-select");
var currentLang = document.getElementById("current-lang");
var options = document.getElementsByClassName("options");
var langList = document.getElementById("lang-list");

for (const option of options) {
    option.onclick = function(){
        currentLang.innerHTML = this.textContent;
    }
}

langSelect.addEventListener('click', function(e){
    langList.classList.toggle("hide-lang-list");
});