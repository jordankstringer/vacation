
$(document).ready(function() {
  $("form#vacationAdvisor").submit(function(event) {
  event.preventDefault();
  $("#output").show();

  var q1 = document.getElementById("q1");
  var q2 = document.getElementById("q2");
  var q3 = document.getElementById("q3");
  var q4 = document.getElementById("q4");
  var q5 = document.getElementById("q5");
  var camping = 0;
  var mountains = 0;
  var beach  = 0;

  if (q1 === 0) {
    camping++;
}   else if (q1 === 1) {
      mountains++;
}     else (q1 === 2) {
        beach++;
}

if (q2 === 0) {
  camping++;
}   else if (q2 === 1) {
    mountains++;
}     else (q2 === 2) {
      beach++;
}

if (q3 === 0) {
  camping++;
}   else if (q3 === 1) {
    mountains++;
}     else (q3 === 2) {
      beach++;
}

if (q4 === 0) {
  camping++;
}   else if (q4 === 1) {
    mountains++;
}     else (q4 === 2) {
      beach++;
}

if (q5 === 0) {
  camping++;
}   else if (q5 === 1) {
    mountains++;
}     else (q5 === 2) {
      beach++;
}

if (camping === 5) {
  $(".vacation").html('<a href="http://www.gocampingamerica.com/">Cancun</a>')
}



  });
});
