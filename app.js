var clicktxt = document.querySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output-div");

function clicked(){
    outputdiv.innerText = "nahtnam ruog" + textinput.value;
}
clicktxt.addEventListener("click",clicked);