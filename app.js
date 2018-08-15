const url = 'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters?api_key=94f09437a4a631a6681888cfeef46dfa08e58ee8&filter=name:'
const formatJson = '&format=json'
const $charDropDown = $('#charDropDown')
const $charRealName = $('#charRealName')
const $firstAppeared = $('#firstAppeared')
const $charDescription = $('#charDescription')
const $charImage = $('.charImage')

$(document).ready(function() {
  drawingApp.init();

  $(".button-collapse").sideNav();

  $(".dropdown-button").dropdown();

  $('#randomButton').click(addCharacter)

  $('#searchButton').click(searchCharacter)

})

function addCharacter(event) {
  event.preventDefault()

  $.get(url + formatJson)
  .then(function(data) {

    var randomNumber = Math.floor(Math.random() * 100)
    var formalCharName = data.results[randomNumber].name
    var realName = data.results[randomNumber].real_name
    var firstAppeared = data.results[randomNumber].first_appeared_in_issue.name
    var charDescription = data.results[randomNumber].deck
    var chosenImage = data.results[randomNumber].image.medium_url

    $charDropDown.text(formalCharName)
    $charRealName.text(realName)
    $firstAppeared.text(firstAppeared)
    $charDescription.text(charDescription)
    $charImage.attr('src', chosenImage)

  })
}


function searchCharacter(event) {
  event.preventDefault()

  var userCharacter = $('.charSearch').val()

  $.get(url + userCharacter + formatJson)
    .then(displayCharInfo)
}

function displayCharInfo(data){

var formalCharName = data.results[0].name
var realName = data.results[0].real_name
var firstAppeared = data.results[0].first_appeared_in_issue.name
var charDescription = data.results[0].deck
var chosenImage = data.results[0].image.medium_url

$charDropDown.text(formalCharName)
$charRealName.text(realName)
$firstAppeared.text(firstAppeared)
$charDescription.text(charDescription)
$charImage.attr('src', chosenImage)
}

//
// anime({
//   targets: '#lineDrawing .image path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   rotate: '1turn',
//   backgroundColor: '#ffffff',
//   duration: 1500,
//   loop: false
// }, console.log('testerr', anime()));


  var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    rotate: '1',
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0]
});

//
// var lineDrawing = anime({
//   targets: '#lineDrawing .image path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   rotate: '1turn',
//   backgroundColor: '#ffffff',
//   duration: 1500,
//   loop: false
// });



// document.addEventListener('DOMContentLoaded', function () {
//   console.log('innit')
//   // Get all "navbar-burger" elements
//   var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
//
//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//
//     // Add a click event on each of them
//     $navbarBurgers.forEach(function ($el) {
//       $el.addEventListener('click', function () {
//
//         // Get the target from the "data-target" attribute
//         var target = $el.dataset.target;
//         var $target = document.getElementById(target);
//
//         // Toggle the class on both the "navbar-burger" and the "navbar-menu"
//         $el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');
//
//       });
//     });
//   }
//
// });
