// business logic
function Destination(location, landmark, date, duration, transport) {
  this.newLocation = location;
  this.newLandmark = landmark;
  this.newDate = date;
  this.newDuration = duration;
  this.newTransport = transport;
}



// user interface login
$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-destination-loaction").val();
    var inputtedLandmark = $("input#new-destination-landmark").val();
    var inputtedDate = $("input#new-destination-date").val();
    var inputtedDuration = $("input#new-destination-duration").val();
    var inputtedTransportation = $("input#new-destination-transport").val();

    var newDestination = new Destination(inputtedLocation, inputtedLandmark, inputtedDate, inputtedDuration, inputtedTransportation);

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.newLocation + "</span></li>");
  });
});
