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
//have a function that'll allow for a new search/reset your search bar and
//also delete the image for a new one to take its place
//rinse and repeat
