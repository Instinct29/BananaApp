var clicktxt = document.querySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output-div");
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url = "https://api.funtranslations.com/translate/minion.json"


function gettranslationurl(text){
    return url + "?" +  "text=" +text;
}


function clicked(){
    // outputdiv.innerText = "nahtnam ruog" + textinput.value;
     var inputtext = textinput.value;
     fetch(gettranslationurl(inputtext))
         .then(response => response.json())
         .then(json => {
             outputdiv.innerText= json.contents.translated // output nav 
              });


};
clicktxt.addEventListener("click",clicked);

