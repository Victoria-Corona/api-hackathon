$.ajax({
  method: "GET",
  // headers: {
  //   "Access-Token": "16500842-cbac95fc55267c85b5065aa9e"
  // } unless it SAYS that you need one, don't put one,
  url: "https://pixabay.com/api/?key=" + pixabayAPIKey +"&q=nevada+tree&category=nature&image_type=photo",

  success: logResult,
  error: logError
})

function logResult(result) {
  console.log("Success!", result)
}

function logError(err) {
  console.log("Failure!", err)
}
