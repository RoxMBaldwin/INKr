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
