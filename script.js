// Example queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=jjHRnf1E7o5XmGaMOlfhqL58YO30lmHJ";
//console.log(queryURL)

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  const tbody = $("tbody");
  response.data.forEach(function(gif) {
    const newRow = $("<tr>");
    const idTd = $("<td>").text(gif.id);
    const titleTd = $("<td>").text(gif.title);
    const imageTd = $("<td>").text(gif.image);
    const image = $("<img>").attr("src", gif.images.fixed_height.url);
    imageTd.append(image);
    const usernameTd = $("<td>").text(gif.username);
    const timeTd = $("<td>").text(gif.import_datetime);
    newRow.append(idTd, titleTd, imageTd, usernameTd, timeTd);
    tbody.append(newRow);
  });
});