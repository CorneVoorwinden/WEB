//bron: https://github.com/juliushonee/blok-web/blob/master/javascript/javascript.js en dit voorbeeld is ook in de les behandeld
var danceRadio = document.getElementById("dance");
var form = document.getElementById("filter");

danceRadio.addEventListener("click", function () {
    form.submit();
});


//Als we klikken op de zoekbalk
//voegen we een class toe aan de body
var zoekbalk =document.getElementById("search wrapper");
var zoekgedeelte =document.getElementsByClassName("searchwrapper");

zoekbalk.addEventListener("click", function(){
    zoekgedeelte.classList.toggle("liked");
})
