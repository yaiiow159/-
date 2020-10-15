

$(document).ready(function () {

    var showskill = false;
    $(".scrollTop").click(function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      var targetPos = $(target).offset().top;
      $("html,body").animate({ scrollTop: targetPos }, 1000);
    });

});