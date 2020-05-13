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
  url: "https://pixabay.com/api/?key=" + pixabayAPIKey + "&q=yellow+flower&image_type=photo",
  success: this.logResult,
  error: this.logError
})
}

// getLocation(){
//   $.ajax({
//     method"GET",
//     url: https://maps.googleapis.com/maps/api/js
//     data: {
//        location: "a location"
//      }
//     success: logResult,
//     error: logError
//   })
// }


  start() {
    this.getImage;
  }
}
