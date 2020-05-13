class App {
constructor (imageTable){
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
  url: "https://pixabay.com/api/?key=" + pixabayAPIKey + "&q=nevada+tree&category=nature&image_type=photo",
  success: logResult,
  error: logError
})


}
