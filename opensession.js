jQuery('#multipage_next').keypress(function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});

function on_planyo_form_loaded(event) {
  if (jQuery('#one_date').val() == "") {
    jQuery('#start_time').hide();
  } else {
    jQuery('#start_time').show();
  }
  jQuery('#price_info_div_sticky, #res_form_buttons').hide();
  jQuery('#one_datecal').on('click', function() {
    jQuery('#start_time option:eq(2)').show()
    jQuery('#price_info_div_sticky, #res_form_buttons').show();
    var dateString = jQuery("#one_date").val();
    var dateParts = dateString.split(".");
    var createdate = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0]);
    var date = moment(createdate);
    console.log(date);
    console.log(date.day());
    if (date.day() == 6) {
      jQuery('#start_time').show();
      jQuery('#start_time option:eq(0)').prop("selected", true);
      jQuery('#start_time option:eq(1)').prop("selected", false)
      jQuery('#start_time option:eq(2)').hide().prop("selected", false)
      planyo_dates_changed();
    } else if (date.day() == 0) {
      jQuery('#start_time').hide();
      jQuery('#start_time option:eq(0)').prop("selected", true);
      jQuery('#start_time option:eq(1)').prop("selected", false);
      jQuery('#start_time option:eq(2)').show().prop("selected", false);
      planyo_dates_changed();
    } else {
      jQuery('#start_time').hide();
      jQuery('#start_time option:eq(0)').prop("selected", false);
      jQuery('#start_time option:eq(1)').prop("selected", false);
      jQuery('#start_time option:eq(2)').show().prop("selected", true);
      planyo_dates_changed();
    }
  })
  jQuery('#price_info_div_sticky').css('background-color', '#e5ac4c');
  jQuery('.reservation_steps').hide();
  jQuery('#rental_prop_children, #rental_prop_adults').change(function() {
    if ((jQuery('#rental_prop_adults option:selected').val() == "none") && (jQuery('#rental_prop_children option:selected').val() == "none")) {
      jQuery('#rental_prop_Teilnehmerdaten_1').addClass('hidefromcustomer');
    } else {
      jQuery('#rental_prop_Teilnehmerdaten_1').removeClass('hidefromcustomer');
    }
  });
  
  if (event == 'reservation_done') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'gtm_conversion',
      'conversionInfo': {
        'productName': jQuery('#rs').text(),
        'productId': jQuery('#pid').text(),
        'productPrice': jQuery('#preis').text().split(" ")[0]
      }
    });
  }
  
  if (event == 'payment_form' || event == 'reservation_details' || event == 'payment_confirmation') {
    jQuery('.booking').css({
      'width': '100%',
      'margin-bottom': '20px !important'
    });
  }
  if (event == 'reserve') {
    window.addEventListener('touchstart', function onFirstTouch() {
      jQuery('#price_info_div_sticky, #res_form_buttons').addClass('user-is-touching');
      window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);
    if (jQuery("#step_reservation_details").hasClass('reservation_step_current')) {
      jQuery('.workshopdiv, .footer, .navbar, .breadcrumb').show();
      jQuery('.h1top').css('padding-top', '0px');
      jQuery('body').css('padding-bottom', '0px', 'min-height', '100% !important');
      jQuery('#reqfinfo').addClass('hidefromcustomer');
    } else {
      jQuery('.workshopdiv, .footer, .navbar, .breadcrumb, .logo-section, .newsletterfooter').hide();
      jQuery('body').css('padding-bottom', '25vh', 'min-height', '0px !important');
      jQuery('.h1top').css('padding-top', '10%');
      jQuery('#reqfinfo').removeClass('hidefromcustomer');
    }
    if (jQuery("#step_personal_details").hasClass('reservation_step_current')) {
      jQuery('#submit_button').val('Weiter >>')
    }
    if (jQuery("#price_info_div_sticky").hasClass("user-is-touching") == true) {
      jQuery('input[type="text"], textarea, select').focus(function() {
        jQuery('#price_info_div_sticky').fadeOut();
        jQuery('#multipage_next, #submit_button, #multipage_prev').fadeOut()
      });
      jQuery('input[type="text"], textarea, select').focusout(function() {
        jQuery('#price_info_div_sticky').fadeIn();
        jQuery('#multipage_next, #submit_button, #multipage_prev').fadeIn()
      });
    }
    jQuery('#row_event_date').parent().addClass('hidefromcustomer');
    jQuery('#multipage_next').css("display", "none !important")
    if (jQuery("#step_reservation_details").hasClass('reservation_step_current')) {
      jQuery('.workshopdiv').show();
    } else {
      jQuery('.workshopdiv').hide();
    }
  }
  if (event == 'reserve_new_step') {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    jQuery('#price_info_div_sticky, #res_form_buttons').show();
    if (jQuery('.reservation_steps_1').hasClass('reservation_step_current')) {
      jQuery('.reservation_steps').hide();
    } else if (jQuery('.reservation_step_2').hasClass('reservation_step_current')) {
      jQuery('.reservation_step_1').addClass('completed');
      jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />')
    } else if (jQuery('.reservation_step_3').hasClass('reservation_step_current')) {
      jQuery('.reservation_step_1, .reservation_step_2').addClass('completed');
      jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />')
    } else if (jQuery('.reservation_step_4').hasClass('reservation_step_current')) {
      jQuery('.reservation_step_1, .reservation_step_2, .reservation_step_3').addClass('completed');
      jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />')
    } else if (jQuery('.reservation_step_5').hasClass('reservation_step_current')) {
      jQuery('.reservation_step_1, .reservation_step_2, .reservation_step_3, .reservation_step_4').addClass('completed');
      jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />')
    }
    window.addEventListener('touchstart', function onFirstTouch() {
      jQuery('#price_info_div_sticky').addClass('user-is-touching');
      window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);
    if (jQuery("#step_personal_details").hasClass('reservation_step_current')) {
      jQuery('#submit_button').val('Weiter >>');
    }
    if (jQuery("#step_reservation_details").hasClass('reservation_step_current')) {
      jQuery('.workshopdiv, .footer, .navbar, .breadcrumb').show();
      jQuery('.h1top').css('padding-top', '0px');
      jQuery('body').css('padding-bottom', '0px', 'min-height', '100% !important');
      jQuery('#reqfinfo').addClass('hidefromcustomer');
    } else {
      jQuery('.workshopdiv, .footer, .navbar, .breadcrumb, .logo-section, .newsletterfooter').hide();
      jQuery('body').css('padding-bottom', '25vh', 'min-height', '0px !important');
      jQuery('.h1top').css('padding-top', '10%');
      jQuery('#reqfinfo').removeClass('hidefromcustomer');
    }
    if (jQuery("#step_reservation_details").hasClass('reservation_step_current')) {
      jQuery('#reqfinfo').addClass('hidefromcustomer');
    } else {
      jQuery('#reqfinfo').removeClass('hidefromcustomer');
    }
    if (jQuery("#step_personal_details").hasClass('reservation_step_current')) {
      jQuery('#submit_button').val('Weiter >>')
    }
    jQuery('#row_event_date').parent().addClass('hidefromcustomer');
    jQuery('#multipage_next').css("display", "none !important")
    if (jQuery("#step_reservation_details").hasClass('reservation_step_current')) {
      jQuery('.workshopdiv').show();
    } else {
      jQuery('.workshopdiv').hide();
    }
    if (jQuery('#rental_prop_children option:selected').val() == "none") {
      jQuery('#rental_prop_Teilnehmerdaten_1').addClass('hidefromcustomer');
    } else if (jQuery('#rental_prop_children option:selected').val() > 0) {
      jQuery('#rental_prop_Teilnehmerdaten_1').removeClass('hidefromcustomer');
    }
  }
  
  if (event == 'reservation_details' || event == 'payment_form' || event == 'reservation_done') {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    jQuery('.reservation_step_1, .reservation_step_2, .reservation_step_3').addClass('completed');
    jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />');
  }
  
  if (event == 'reservation_failure') {
    jQuery('#price_info_div_sticky, #res_form_buttons, #multipage_prev').show();
  }
}
jQuery(document).ready(function() {
  if (window.location.href.indexOf("mode") > -1) {
    jQuery('.workshopdiv').hide();
  }
});
