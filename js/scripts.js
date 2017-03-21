function Ticket(movieName, movieTime, viewerAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.viewerAge = viewerAge;
}

Ticket.prototype.findPrice = function() {
  var ticketPrice = 15;
  if (this.viewerAge <= 3) {
    ticketPrice = 0;
  } else if (this.viewerAge >= 65) {
    ticketPrice -= 2;
  } else if (this.viewerAge >= 4 && this.viewerAge <= 8) {
    ticketPrice -= 3;
  }

  if (this.movieTime >= 10 && this.movieTime <= 16) {
    ticketPrice -= 2;
  }

  if ( !($('select option:selected').hasClass('new-release')) ) {
    ticketPrice -= 2;
  }

  return ticketPrice;
}


$(function() {
  $("form").submit(function(event) {

    var movie = $("select#movie").val();
    var time = parseInt($("input#time").val());
    var age = parseInt($("input#age").val());
    var movieTicket = new Ticket(movie, time, age);

    var ticketPrice = movieTicket.findPrice();
    $('#output-wrapper').show();
    $('span#output').text(ticketPrice);
    console.log(movieTicket.movieTime);
    event.preventDefault();
  });
});
