var form = document.querySelector("form");
form.addEventListener("submit", submitSearch)

function submitSearch(){
  event.preventDefault();
  var formData = new FormData(form)
  var location = formData.get("location")

  onSubmit(location);
}

function onSubmit(location){
  $.ajax({
  method: "GET",
  url: "https://pixabay.com/api/?key=" + pixabayAPIKey + "&q=" + location + "&image_type=photo",
  success: logResult,
  error: logError
})

function logResult(result) {
  console.log("Success!", result)

  var imageContainer = document.querySelector(".image-container");

  for (var index = 0; index < 10; index++) {
    var div = document.createElement("div");
    var imageDiv = document.createElement("img");
    imageDiv.setAttribute("src", result.hits[index].previewURL);

    div.append(imageDiv);
    imageContainer.append(div);
  }
}

function logError(err) {
  console.error("Failure!", err)
}

}
