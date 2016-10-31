// business logic
function Destination(location, landmark, date, duration, transport) {
  this.newLocation = location;
  this.newLandmark = landmark;
  this.newDate = date;
  this.newDuration = duration;
  this.newTransport = transport;
}

Destination.prototype.travelInfo = function() {
  return "I went to " + this.newLocation + " and visited one their reknown landmark called " + this.newLandmark + ". I arrived on " + this.newDate + " and was there for " + this.newDuration + " travelling by " + this.newTransport + "."
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

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.travelInfo()+ "</span></li><br>");

    $("input#new-destination-loaction").val("");
    $("input#new-destination-landmark").val("");
    $("input#new-destination-date").val("");
    $("input#new-destination-duration").val("");
    $("input#new-destination-transport").val("");

    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("#show-destination h3").text(newDestination.newLocation);
      $(".destination-location").text(newDestination.newLocation);
      $(".destination-landmark").text(newDestination.newLandmark);
      $(".destination-date").text(newDestination.newDate);
      $(".destination-duration").text(newDestination.newDuration);
      $(".destination-transport").text(newDestination.newTransport);
    });
  });
});
