function Ticket(movieName, movieTime, viewerAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.viewerAge = viewerAge;
}


$(function() {
  $("form").submit(function(event) {

    var movie = $("select#movie").val();
    var time = parseInt($("input#time").val());
    var age = parseInt($("input#age").val());

    var movieTicket = new Ticket(movie, time, age)
    console.log(movieTicket);
    event.preventDefault();
  });
});
