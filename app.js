$(document).ready(() => {
  $("#input").change(function () {
    var input = $(this).val();
    $("ul").append(
      "<li>" +
        input +
        "<i class='fas fa-check'></i><i class='fas fa-trash'></i></li>"
    );
    $(this).val("");
  });
  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(200);
  });
  $("ul").on("click", ".fa-check", function () {
    $(this).parent("li").toggleClass("checked");
  });
  //   Add functuon for btns
  $(".all").on("click", function () {
    $("ul li").show("li");
  });
  $(".active").on("click", function () {
    $("ul li").filter(".checked").hide("ul li");
  });
  $(".completed").on("click", function () {
    $("ul li").filter(":not(.checked)").hide("ul li");
  });
  $(".clearCompleted").on("click", function () {
    $("ul li").filter(".checked").remove("ul li");
  });
});
