var toggle = document.querySelector('.popup-toggle') // Using a class instead, see note below.

$(document).ready(function(){
  $('#popup-toggle').on('click', function() {
    toggle.classList.toggle('hidden');
    console.log("coucou")
  });
});

