var count = 0;
function check(
 questionOne,
 questionTwo,
 questionThree,
 questionFour,
 questionFive,
 questionSix,
 questionSeven,
 questionEight,
 questionNine,
 questionNine,
 questionTen
) {
 if (questionOne == "2") {
   count += 2;
 }
 if (questionTwo == "1") {
   count += 2;
 }
 if (questionThree == "3") {
   count += 2;
 }
 if (questionFour == "1") {
   count += 2;
 }
 if (questionFive == "2") {
   count += 2;
 }
 if (questionSix == "2") {
   count += 2;
 }
 if (questionSeven == "4") {
   count += 2;
 }
 if (questionEight == "4") {
   count += 2;
 }
 if (questionNine == "1") {
   count += 2;
 }
 if (questionTen == "3") {
   count += 2;
 }
 return count;
}
$(document).ready(function() {
 $("#radio form").submit(function() {
   var Question1 = $("input[type='radio'][name='first']:checked").val();
   var Question2 = $("input[type='radio'][name='second']:checked").val();
   var Question3 = $("input[type='radio'][name='third']:checked").val();
   var Question4 = $("input[type='radio'][name='fourth']:checked").val();
   var Question5 = $("input[type='radio'][name='fifth']:checked").val();
   var Question6 = $("input[type='radio'][name='sixth']:checked").val();
   var Question7 = $("input[type='radio'][name='seventh']:checked").val();
   var Question8 = $("input[type='radio'][name='eighth']:checked").val();
   var Question9 = $("input[type='radio'][name='ninth']:checked").val();
   var Question10 = $("input[type='radio'][name='tenth']:checked").val();

   console.log(Question1)

   $("#button").hide();
   $("#quiz").hide();
   $("#number_count").text(
     "You got " +
       check(
         Question1,
         Question2,
         Question3,
         Question4,
         Question5,
         Question6,
         Question7,
         Question8,
         Question9,
         Question10
       ) +
       "%."
   );

   event.preventDefault();
 });
});