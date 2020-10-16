

$(document).ready(function () {

  var showskill = false;
  $(".scrollTop").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var targetPos = $(target).offset().top;
    $("html,body").animate({ scrollTop: targetPos }, 1000);
  });

  $('#deletelId').on('show.bs.modal', function (e) {
    var button = $(e.relatedTarget);
    var title = button.data("title");

    var modal = $(this);
    modal.find('.modal-title').text(title);
    // Use above variables to manipulate the DOM


  });
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()


});