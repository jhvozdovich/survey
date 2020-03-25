$(document).ready(function() {
  $("form#survey").submit(function(event) {
    
    var name = $("#name").val();
    var color = $("#color").val();
    var leastFavColor = $("#leastFavColor").val();
    var birthday = $("#birthday").val();
    var pet = $("input:radio[name=pet]:checked").val();

    $(".name").text(name);
    $(".color").text(color);
    $(".leastFavColor").text(leastFavColor);
    $(".birthday").text(birthday);
    $(".pet").text(pet);

    $("#verifyForm").show();

    event.preventDefault();
  })
})