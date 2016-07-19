
$(document).ready(function() {
  $("form#vacationAdvisor").submit(function(event) {
    event.preventDefault();


    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
    var q4 = $("#q4").val();
    var q5 = $("#q5").val();
    var camping = 0;
    var mountains = 0;
    var beach  = 0;


    if (q1 === 0) {
      camping + 1;
    } else if (q1 === 1) {
        mountains + 1;
    }  else {
        beach + 1;
    }

    if (q2 === 0) {
      camping++;
    } else if (q2 === 1) {
        mountains++;
    }  else {
        beach++;
    }

    if (q3 === 0) {
      camping++;
    } else if (q3 === 1) {
        mountains++;
    }  else {
        beach++;
    }

    if (q4 === 0) {
      camping++;
    } else if (q4 === 1) {
        mountains++;
    }  else {
        beach++;
    }

    if (q5 === 0) {
      camping++;
    } else if (q5 === 1) {
        mountains++;
    }  else {
        beach++;
    }
    console.log('camping')

    if (camping >= 3) {
      $("#camping").show()
    } else if (mountains >= 3) {
        $("#mountains").show()
        else {
          $("#beach").show()
    }


    $("#output").show();
  });
});
