$(document).ready(function() {
  $(":input, a").attr("tabindex", "-1");
  /******Step 1 *******************/
  $('#name-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#name-step').click(function(e) {
    e.preventDefault();
    if ($('#name-input').val().length != 0) {
      $('#name-alert').hide();
      $('.w-round div:nth-child(2)').trigger('tap');
    } else {
      $('#name-alert').show(500);
    }
  });
  /******Step 2 *******************/
  $('#email-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#email-step').click(function(e) {
    e.preventDefault();
    if ($('#email-input').val().length != 0) {
      $('#email-alert').hide();
      $('.w-round div:nth-child(3)').trigger('tap');
    } else {
      $('#email-alert').show(500);
    }
  });
  $('#email-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(1)').trigger('tap');
  });
  /******Step 3 *******************/
  $('#bday-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#bday-step').click(function(e) {
    e.preventDefault();
    if ($('#helfen-text').val().length != 0) {
      $('#helfen-alert').hide();
      $('.w-round div:nth-child(4)').trigger('tap');
    } else {
      $('#helfen-alert').show(500);
    }
  });
  $('#bday-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(2)').trigger('tap');
  });
  /******Step 4 *******************/
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
      $('#wf-form-probeminis').submit();
      $('#datenschutz-step').val('Bitte warten...');
      var loc = window.location.href;
      setTimeout(function() {
        window.open(loc + "-bestaetigung", "_self");
      }, 4000);
    }
  });
  $('#datenschutz-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(3)').trigger('tap');
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
