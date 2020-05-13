$.ajax({
  method: "GET",
  url: "https://pixabay.com/api/?key=" + pixabayAPIKey + "&q=yellow+flower&image_type=photo",
  success: this.logResult,
  error: this.logError
})

function logResult(result) {
  console.log("Success!", result)
}

function logError(err) {
  console.error("Failure!", err)
}
