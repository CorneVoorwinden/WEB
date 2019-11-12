//bron: https://github.com/juliushonee/blok-web/blob/master/javascript/javascript.js en dit voorbeeld is ook in de les behandeld
var danceRadio = document.getElementById("dance");
var form = document.getElementById("filter");

danceRadio.addEventListener("click", function () {
    form.submit();
});



/* 1. selecteer elementen met document.querySelector */
var section = document.querySelector('section.animatie'); // first section element
var button = document.querySelector('section > button');

var dance = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
    section.classList.toggle('dancing')
}

/* 2. voeg een event toe aan een element */
button.addEventListener('click', dance);
