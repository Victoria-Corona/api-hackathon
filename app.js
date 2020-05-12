class App {
constructor (){
  this.logResult = this.logResult.bind(this);
  this.logError = this.logError.bind(this);
}
logResult(result) {
  console.log("Success!", result)
}

logError(err) {
  console.error("Failure!", err)
}

getImage (){
$.ajax({
  method: "GET",
  // headers: {

  // } unless it SAYS that you need one, don't put one,
  url: "https://pixabay.com/api/?key=" + pixabayAPIKey + "&q=nevada+tree&category=nature&image_type=photo",
  success: logResult,
  error: logError
})

}
  start() {
    this.getImage;
  }
}
