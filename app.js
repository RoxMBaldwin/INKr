$(document).ready(function() {
  drawingApp.init();
  $.get("https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters?api_key=94f09437a4a631a6681888cfeef46dfa08e58ee8")
  .then(function(data) {
    console.log(data);
  })
})

// 
// $.get("https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters?api_key=94f09437a4a631a6681888cfeef46dfa08e58ee8")
// .then(function(data) {
//   console.log(data);
// })
