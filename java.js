function check() {

    var count = 0;

  if (questionOne == "2") {
    count += 5;
  }
  if (questionTwo == "2") {
    count += 5;
  }
  if (questionThree == "3") {
    count += 5;
  }
  if (questionFour == "3") {
    count += 5;
  }
  if (questionFive == "4") {
    count += 5;
  }
  if (questionSix == "2") {
    count += 5;
  }
  if (questionSeven == "2") {
    count += 5;
  }
  if (questionEight == "3") {
    count += 5;
  }
  if (questionNine == "2") {
    count += 5;
  }
  if (questionTen == "4") {
    count += 5;
  }
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("number_count").innerHTML =
    "You got " + count + "/50";

  $("#button").hide();
  $("#quiz").hide();
  $("#number_count").show();
  event.preventDefault();
}
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var questionOne =$("input:radio[name:first]:checked");
  var questionTwo = $("input:radio[name:second]:checked");
  var questionThree = $("input:radio[name:third]:checked");
  var questionFour = $("input:radio[name:fourth]:checked");
  var questionFive = $("input:radio[name:fifth]:checked");
  var questionSix = $("input:radio[name:sixth]:checked");
  var questionSeven = $("input:radio[name:seventh]:checked");
  var questionEight = $("input:radio[name:eighth]:checked");
  var questionNine = $("input:radio[name:ninth]:checked");
  var questionTen = $("input:radio[name:tenth]:checked");
    
  })
})