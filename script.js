/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%"; 
  document.querySelector('.rickrollbutton').addEventListener('click', () => {
    $('#screeenn').addClass('rick').removeClass('Norick');
$('#show1').addClass('hiddenreveal').removeClass('hidden');
$('#show2').addClass('hiddenreveal').removeClass('hidden');
$('#show3').addClass('hiddenreveal').removeClass('hidden');
    document.querySelector('audio').muted = false
    document.querySelector('audio').play();
  });
};

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};

window.addEventListener('load', function () {
  openNav()
});
