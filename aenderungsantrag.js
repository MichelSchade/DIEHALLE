$(document).ready(function() {
  $(":input, a").attr("tabindex", "-1");
  $('#info-step').click(function(e) {
    $('.w-round div:nth-child(2)').trigger('tap');
  });
  // Step 2
  $('#choose-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#choose-step').click(function(e) {
    $('.w-round div:nth-child(3)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  $('#choose-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(1)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  // Step 3
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
      $("html, body").animate({
        scrollTop: "0"
      });
    } else {
      $('#name-alert').show(500);
    }
  });
  $('#name-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(2)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  // Step 4
  $('#red-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#red-step').click(function(e) {
    e.preventDefault();
    if ($('#red-input option:selected').length < 1) {
      $('#red-alert').show(500);
    } else if (jQuery('#red-input').val() == "Mitgliedschaftsänderung") {
      $('#red-alert').hide();
      $('.w-round div:nth-child(5)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    } else if (jQuery('#red-input').val() == "SEPA Änderung") {
      $('#red-alert').hide();
      $('.w-round div:nth-child(7)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    } else if (jQuery('#red-input').val() == "Beides") {
      $('#red-alert').hide();
      $('.w-round div:nth-child(5)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  $('#red-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(3)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  // Step 5
  $('#ma-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#ma-step').click(function(e) {
    e.preventDefault();
    if ($('#auswahlmitgliedschaft option:selected').length < 1) {
      $('#ma-alert').show(500);
    } else if (jQuery('#auswahlmitgliedschaft').val() == "Open Session Mitgliedschaft" || jQuery('#auswahlmitgliedschaft').val() == "Passive Mitgliedschaft") {
      $('#ma-alert').hide();
      if (jQuery('#red-input').val() == "Mitgliedschaftsänderung") {
        $('.w-round div:nth-child(11)').trigger('tap');
        $("html, body").animate({
          scrollTop: "0"
        });
      } else {
        $('.w-round div:nth-child(7)').trigger('tap');
        $("html, body").animate({
          scrollTop: "0"
        });
      }
    } else if (jQuery('#auswahlmitgliedschaft').val() == "Kursmitgliedschaft") {
      $('#ma-alert').hide();
      $('.w-round div:nth-child(6)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  $('#ma-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(4)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  // Step 6
  $('#kurs-input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#kurs-step').click(function(e) {
    e.preventDefault();
    if ($('#mengekurse').prop('selectedIndex') == 0) {
      $('#kurs-alert').show(500);
    } else if ($('#kurs1').prop('selectedIndex') == 0 && $('#kurs1').is(':visible')) {
      $('#kurs1-alert').show(500);
      $('#kurs-alert').hide(500);
    } else if ($('#kurs2').prop('selectedIndex') == 0 && $('#kurs2').is(':visible')) {
      $('#kurs2-alert').show(500);
      $('#kurs-alert').hide(500);
    } else if ($('#kurs3').prop('selectedIndex') == 0 && $('#kurs3').is(':visible')) {
      $('#kurs3-alert').show(500);
      $('#kurs-alert').hide(500);
    } else if ($('#tag1').prop('selectedIndex') == 0 && $('#tag1').is(':visible')) {
      $('#kurs1-alert').show(500);
      $('#kurs-alert').hide(500);
    } else if ($('#tag2').prop('selectedIndex') == 0 && $('#tag2').is(':visible')) {
      $('#kurs2-alert').show(500);
      $('#kurs-alert').hide(500);
    } else if ($('#tag3').prop('selectedIndex') == 0 && $('#tag3').is(':visible')) {
      $('#kurs3-alert').show(500);
      $('#kurs-alert').hide(500);
    } else if ($('#zparkour1').prop('selectedIndex') == 0 && $('#zparkour1').is(':visible')) {
      $('#kurs1-alert').show(500);
      $('#kurs-alert').hide(500);
    } else if ($('#zparkour2').prop('selectedIndex') == 0 && $('#zparkour2').is(':visible')) {
      $('#kurs2-alert').show(500);
      $('#kurs-alert').hide(500);
    } else if ($('#zparkour3').prop('selectedIndex') == 0 && $('#zparkour3').is(':visible')) {
      $('#zkurs3-alert').show(500);
      $('#kurs-alert').hide(500);
    } else {
      $('#kurs-alert').hide(500);
      $('.w-round div:nth-child(7)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
      $('#kurs1-alert, #kurs2-alert, #kurs3-alert').fadeToggle("slow", "linear");
      $('#tag1-alert, #tag2-alert, #tag3-alert').fadeToggle("slow", "linear");
      $('#zkurs1-alert, #zkurs2-alert, #zkurs3-alert').fadeToggle("slow", "linear");
    }
  });
  $('#kurs-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(5)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  // Step 7
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
      $('.w-round div:nth-child(8)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  $('#address-prev').click(function(e) {
    if (jQuery('#auswahlmitgliedschaft').val() == "Kursmitgliedschaft") {
      $('.w-round div:nth-child(6)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    } else {
      $('.w-round div:nth-child(5)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  // Step 8
  $("#email-input").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#email-step').click(function(e) {
    e.preventDefault();
    if ($("#email-input").val().length < 7) {
      $('#email-alert').show(500);
    } else {
      $('#email-alert').hide();
      $('.w-round div:nth-child(9)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  $('#email-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(7)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  // Step 9
  $("#tel-input").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#tel-step').click(function(e) {
    e.preventDefault();
    if ($("#tel-input").val().length < 10) {
      $('#tel-alert').show(500);
    } else {
      $('#tel-alert').hide();
      $('.w-round div:nth-child(10)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  $('#tel-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(8)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  // Step 10
  $("#iban-input, #bic-input").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('#konto-step').click(function(e) {
    e.preventDefault();
    if ($("#iban-input").val().length < 22) {
      $('#iban-alert').show(500);
    } else if ($("#bic-input").val().length < 8) {
      $('#bic-alert').show(500);
    } else if ($("#namesign-input").val().length < 5) {
      $('#namesign-alert').show(500);
    } else {
      $('#iban-alert').hide();
      $('#bic-alert').hide();
      $('#namesign-alert').hide();
      $('.w-round div:nth-child(11)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  $('#konto-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(9)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
  // Step 11
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
      $('.w-round div:nth-child(12)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  $('#sign-prev').click(function(e) {
    e.preventDefault();
    if (jQuery('#red-input').val() == "Mitgliedschaftsänderung") {
      $('.w-round div:nth-child(5)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    } else {
      $('.w-round div:nth-child(10)').trigger('tap');
      $("html, body").animate({
        scrollTop: "0"
      });
    }
  });
  // Step 12
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
      $('#wf-form-aendern').submit();
      $('#datenschutz-step').val('Bitte warten...');
      var loc = window.location.href.split(/[?#]/)[0];
      setTimeout(function() {
        window.open(loc + "-bestaetigung", "_self");
      }, 4000);
    }
  });
  $('#datenschutz-prev').click(function(e) {
    e.preventDefault();
    $('.w-round div:nth-child(11)').trigger('tap');
    $("html, body").animate({
      scrollTop: "0"
    });
  });
});
