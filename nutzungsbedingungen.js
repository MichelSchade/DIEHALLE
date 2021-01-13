$(document).ready(function() {
  $(":input, a").attr("tabindex", "-1");
  /******Step 1 *******************/
  $('#info-step').click(function(e) {
    $('.w-round div:nth-child(2)').trigger('tap');
  });
  /******Step 2 *******************/
  $('#choose-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#choose-step').click(function(e) {
    $('.w-round div:nth-child(3)').trigger('tap');
  });
  $('#choose-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(1)').trigger('tap');
  });
  /******Step 3 *******************/
  $('#name-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#name-step').click(function(e) {
    e.preventDefault();
    if ($('#name-input').val().length != 0) {
      $('#name-alert').hide();
      $('.w-round div:nth-child(4)').trigger('tap');
    } else {
      $('#name-alert').show(500);
    }
  });
  $('#name-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(2)').trigger('tap');
  });
  /******Step 4 *******************/
  $('#email-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $("#email-input").keyup(function() {
    var email = $("#email-input").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      $('#email-alert').show(500);
      email.focus;
    } else {
      $('#email-alert').hide();
    }
  });
  $('#email-step').click(function(e) {
    e.preventDefault();
    var email = $("#email-input").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      $('#email-alert').show(500);
      email.focus;
    } else {
      $('#email-alert').hide();
      $('.w-round div:nth-child(5)').trigger('tap');
    }
  });
  $('#email-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(3)').trigger('tap');
  });
  /******Step 5 *******************/
  $('#tel-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#tel-step').click(function(e) {
    e.preventDefault();
    if ($('#tel-input').val().length != 0) {
      $('#tel-alert').hide();
      $('.w-round div:nth-child(6)').trigger('tap');
    } else {
      $('#tel-alert').show(500);
    }
  });
  $('#tel-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(4)').trigger('tap');
  });
  /******Step 6 *******************/
  $("#sex-input").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#sex-step').click(function(e) {
    e.preventDefault();
    if ($("#sex-input option:selected").length < 1) {
      $('#sex-alert').show(500);
    } else {
      $('#sex-alert').hide();
      $('.w-round div:nth-child(7)').trigger('tap');
    }
  });
  $('#sex-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(5)').trigger('tap');
  });
  /******Step 7 *******************/
  $("#bday-input").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#bday-step').click(function(e) {
    e.preventDefault();
    if ($("#bday-input").val().length < 10) {
      $('#bday-alert').show(500);
    } else {
      $('#bday-alert').hide();
      $('.w-round div:nth-child(8)').trigger('tap');
    }
  });
  $('#bday-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(6)').trigger('tap');
  });
  /******Step 8 *******************/
  $("#street-input, #plz-input, #ort-input").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#address-step').click(function(e) {
    e.preventDefault();
    if ($("#street-input").val().length == 0) {
      $('#street-alert').show(500);
    } else if ($("#ort-input").val().length == 0) {
      $('#plz-alert').show(500);
    } else if ($("#ort-input").val().length == 0) {
      $('#ort-alert').show(500);
    } else {
      $('#ort-alert, #plz-alert, #street-alert').hide();
      $('.w-round div:nth-child(9)').trigger('tap');
    }
  });
  $('#address-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(7)').trigger('tap');
  });
  /******Step 9 *******************/
  $("#signaturehash").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#sign-step').click(function(e) {
    e.preventDefault();
    if ($("#signaturehash").val().length == 0) {
      $('#sign-alert').show();
    } else {
      $('#sign-alert').hide();
      $('.w-round div:nth-child(10)').trigger('tap');
    }
  });
  $('#sign-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(8)').trigger('tap');
  });
  /******Step 10 *******************/
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
      $('#wf-form-nbf').submit();
      $('#datenschutz-step').val('Bitte warten...');
      setTimeout(function() {
        $('#success').show();
      }, 2000);
      setTimeout(function() {
        location.reload()
      }, 6000);
    }
  });
  $('#datenschutz-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(9)').trigger('tap');
  });
  /******Step 6 (FINAL) *******************/
  /*    
      $('#last-prev').click(function(e) {
  			e.preventDefault();
            $('.w-round div:nth-child(4)').trigger('tap');
  		});
  */
  /*$('#submit-step').click(function(e) {
			e.preventDefault();
      
      if($('#details-input').val().length !=0){
        $('#details-alert').hide();
       }
       
      else
        {
          $('#details-alert').show();
        }
		});*/
});
