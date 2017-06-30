$(document).ready(function() {
  drawingApp.init();

  $(".button-collapse").sideNav();

  $(".dropdown-button").dropdown();

  $('#randomButton').click(addCharacter)

  $('#searchButton').click(searchCharacter)

  function addCharacter(event) {
  event.preventDefault()

  $.get('https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters?api_key=94f09437a4a631a6681888cfeef46dfa08e58ee8&filter=name:&format=json')
  .then(function(data) {

    var randomNumber = Math.floor(Math.random() * 100)
    //console.log(data.results[randomNumber])
    var formalCharName = data.results[randomNumber].name
    $('#charDropDown').text(formalCharName)
    var realName = data.results[randomNumber].real_name
    $('#charRealName').text(realName)
    var firstAppeared = data.results[randomNumber].first_appeared_in_issue.name
    $('#firstAppeared').text(firstAppeared)
    var charDescription = data.results[randomNumber].deck
    $('#charDescription').text(charDescription)
    var chosenImage = data.results[randomNumber].image.medium_url
    $('.charImage').attr('src', chosenImage)

    })

  }


  function searchCharacter(event) {
  event.preventDefault()

  var url = 'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters?api_key=94f09437a4a631a6681888cfeef46dfa08e58ee8&filter=name:'
  var userCharacter = $('.charSearch').val()
  //console.log(userCharacter)
  var format = '&format=json'

  $.get(url + userCharacter + format)
    .then(displayCharInfo)
  } //searchCharacter function
  function displayCharInfo(data){

  var formalCharName = data.results[0].name
      //console.log(formalCharName)
  $('#charDropDown').text(formalCharName)
  var realName = data.results[0].real_name
  $('#charRealName').text(realName)
  var firstAppeared = data.results[0].first_appeared_in_issue.name
  $('#firstAppeared').text(firstAppeared)
  var charDescription = data.results[0].deck
  $('#charDescription').text(charDescription)
  var chosenImage = data.results[0].image.medium_url
      //console.log(chosenImage)
  $('.charImage').attr('src', chosenImage)
  }
}) //closing doc.ready









// );




// $.get('https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters?api_key=94f09437a4a631a6681888cfeef46dfa08e58ee8&filter=name:'+ characterName + '&format=json')
// .then(function(data) {
//    var newImage = data.results[0].image.medium_url
//    console.log(newImage)
//    $('.charImage').attr('src', newImage)

//RANDOM MAKE MY OWN ARRAY AND POPULATE IT WITH 10-20 IMAGES **


//to push img to html :
    //  var newImage = data.results[0].image.medium_url
    //  console.log(newImage)
    //  $('.charImage').attr('src', newImage)

//******img stc line 499 canvas code******
