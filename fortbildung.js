$(document).ready(function() {
  $(":input, a").attr("tabindex", "-1");
  /******Step 1 *******************/
  $('#startpage').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#startpage').click(function(e) {
    $('.w-round div:nth-child(2)').trigger('tap');
  });
  /******Step 2 *******************/
  $('#name-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#name-step').click(function(e) {
    e.preventDefault();
    if ($('#name-input').val().length != 0) {
      $('#name-alert').hide();
      $('.w-round div:nth-child(3)').trigger('tap');
    } else {
      $('#name-alert').show(500);
    }
  });
  $('#name-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(1)').trigger('tap');
  });
  /******Step 3 *******************/
  $('#email-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#email-step').click(function(e) {
    e.preventDefault();
    if ($('#email-input').val().length != 0) {
      $('#email-alert').hide();
      $('.w-round div:nth-child(4)').trigger('tap');
    } else {
      $('#email-alert').show(500);
    }
  });
  $('#email-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(2)').trigger('tap');
  });
  /******Step 4 *******************/
  $('#bday-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#bday-step').click(function(e) {
    e.preventDefault();
    if ($('#bday-input option:selected').selectedIndex != 0) {
      $('#bday-alert').hide();
      $('.w-round div:nth-child(5)').trigger('tap');
    } else {
      $('#bday-alert').show(500);
    }
  });
  $('#bday-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(3)').trigger('tap');
  });
  /******Step 5 *******************/
  $("#tage-input").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#budget-step').click(function(e) {
    $('.w-round div:nth-child(6)').trigger('tap');
  });
  $('#budget-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(4)').trigger('tap');
  });
  /******Step 6 *******************/
  $("#datenschutz").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#datenschutz-step').click(function(e) {
    e.preventDefault();
    if (!$("#datenschutz").is(':checked')) {
      $('#platform-alert').show(500);
    } else {
      $('#platform-alert').hide();
      $('#datenschutz-step').prop("disabled", true);
      $('#datenschutz-step').css('opacity', '0.2');
      $('#wf-form-fortbildung').submit();
      $('#datenschutz-step').val('Bitte warten...');
      var loc = window.location.href;
      setTimeout(function() {
        window.open(loc + "-bestaetigung", "_self");
      }, 4000);
    }
  });
  $('#datenschutz-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(5)').trigger('tap');
  });
});
