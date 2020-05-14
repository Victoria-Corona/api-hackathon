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

//AJAX needs to first be able to work (done)
//when it runs, the console needs to return as a "success" and give me the
//information requested (done)
//for users to search for specific things, there needs to be a variable
//after the &q= and before the &image_type that changes depending on the input

//check if that works

//when that works, post your results
//when the results are posted, the pixabay will spit out the location you
//are searching for
//dynamically create that image onto your DOM
//pass the object in the array of objects into them as a value?? it's called
//previewURL but that's super tiny
//have a function that'll allow for a new search/reset your search bar and
//also delete the image for a new one to take its place
//rinse and repeat


//var div = document.createElement("div");
//form.append(div);
//at one point, the data: {"location": previewURL} needs to be passed


//you have to populate the img element with the data object
//+=?? y e s
//l o o p
