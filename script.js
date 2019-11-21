//bron: https://github.com/juliushonee/blok-web/blob/master/javascript/javascript.js en dit voorbeeld is ook in de les behandeld
var danceRadio = document.getElementById("dance");
var form = document.getElementById("filter");

danceRadio.addEventListener("click", function () {
    form.submit();
});


// function die ervooor zorgt dat als je op de button klikt je een alert krijgt.
var versturen = document.getElementById("knopje");

 versturen.addEventListener("click",function() {
     alert("je bericht is verstuurd.")
 }  );




//class toevoegen aan button

var button = document.querySelector("article > button");
var element = document.querySelector("img");

button.addEventListener("click", function(){
    element.classList.toggle("bijzonder");
});

