var danceRadio = document.getElementById("dance");
var form = document.getElementById("filter");

danceRadio.addEventListener("click", function () {
    form.submit();
});


 var myLittleMenu = document.querySelector("form");
var myLittleButton = document.querySelector("input");

//Als we klikken op de button
//voegen we een class toe aan de button

myLittleButton.addEventListener("click", function(){
    myLittleMenu.classList.toggle("liked");
});
