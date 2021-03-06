function on_planyo_form_loaded(event) {
  jQuery('#price_info_div_sticky').css('background-color', '#26A86F');
  jQuery('#price_info_div_sticky, #res_form_buttons').hide();
  jQuery('#rental_prop_children').change(function() {
    if (jQuery('#rental_prop_children option:selected').val() == "none") {
      jQuery('#rental_prop_Teilnehmerdaten_1').addClass('hidefromcustomer');
    } else if (jQuery('#rental_prop_children option:selected').val() > 0) {
      jQuery('#rental_prop_Teilnehmerdaten_1').removeClass('hidefromcustomer');
    }
  });
  jQuery('#row_event_date').parent().addClass('hidefromcustomer');
  // Event Reserve
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
    // Verfügbare Plätze
    var length = jQuery('#event_date > option').length;
    for (var i = 0; i < length; i++) {
      var dateString = jQuery("#event_date")[0].options[i].value;
      if (dateString == "none") {} else {
        var dateTimeParts = dateString.split(" ");
        var timeParts = dateTimeParts[1].split(":");
        var dateParts = dateTimeParts[0].split("-");
        var date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2]);
        var future = new Date().getTime() + (59 * 24 * 60 * 60 * 1000);
        var timestamp = date.getTime();
        var ende = moment(dateTimeParts[1], 'LT').add(5, 'hour').format('LT');
        var enddate = moment(date).add(4, 'day').format('L');
        var starttag = moment(date).format('dddd');
        var endtag = moment(enddate).format('dddd');
        if (i == 0) {
          jQuery("#workshoptext" + 1).html(moment(date).format('L') + " bis " + enddate + "<br />" + dateTimeParts[1] + " bis " + ende)
        } else {
          jQuery("#workshoptext" + i).html(moment(date).format('L') + " bis " + enddate + "<br />" + dateTimeParts[1] + " bis " + ende)
        }
        if (jQuery("#termin" + i).html() == 0) {
          jQuery("#workshop" + i).prop('disabled', true);
          jQuery("#workshop" + i).val('ausgebucht');
          jQuery("#workshop" + i).addClass('ausgebucht');
          jQuery("#workshop" + i).css('cursor', 'default');
        }
      }
    }
    for (var i = 1; i < 6; i++) {
      if (jQuery('#workshoptext' + i).text().indexOf('.') == -1) {
        jQuery('#feriencampzeile' + i).hide();
      }
    }
    jQuery("#workshop1, #workshop2, #workshop3, #workshop4, #workshop5, #workshop6, #workshop7").click(function() {
      var sel = jQuery(this).attr('id').split("p")[1];
      for (var i = 1; i < 6; i++) {
        if (jQuery("#workshop" + i).hasClass("ausgebucht")) {} else {
          jQuery("#workshop" + i).val('Auswählen');
          jQuery("#workshop" + i).prop("disabled", false);
        }
        jQuery("#workshop" + i).removeClass('selected');
      }
      jQuery(this).addClass('selected');
      jQuery(this).prop("disabled", true);
      if (jQuery(this).val() == 'Auswählen') {
        jQuery('#price_info_div_sticky, #res_form_buttons').show();
        jQuery(this).val('ausgewählt');
        jQuery('#event_date option')[sel].selected = true;
      } else if (jQuery(this).val() == 'ausgewählt') {
        jQuery(this).val('Auswählen');
        jQuery('#event_date option')[0].selected = true;
      }
      planyo_dates_changed();
    });
  }
  // Event New Step
  if (event == 'reserve_new_step') {
    jQuery('#price_info_div_sticky, #res_form_buttons').show();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    if (jQuery('.reservation_step_2').hasClass('reservation_step_current')) {
      jQuery('.reservation_step_1').addClass('completed');
      jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />');
    } else if (jQuery('.reservation_step_3').hasClass('reservation_step_current')) {
      jQuery('.reservation_step_1, .reservation_step_2').addClass('completed');
      jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />');
    } else if (jQuery('.reservation_step_4').hasClass('reservation_step_current')) {
      jQuery('.reservation_step_1, .reservation_step_2, .reservation_step_3').addClass('completed');
      jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />');
    } else if (jQuery('.reservation_step_5').hasClass('reservation_step_current')) {
      jQuery('.reservation_step_1, .reservation_step_2, .reservation_step_3, .reservation_step_4').addClass('completed');
      jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />');
    }
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
    if (jQuery('#rental_prop_children option:selected').val() == "none") {
      jQuery('#rental_prop_Teilnehmerdaten_1').addClass('hidefromcustomer');
    } else if (jQuery('#rental_prop_children option:selected').val() > 0) {
      jQuery('#rental_prop_Teilnehmerdaten_1').removeClass('hidefromcustomer');
    }
  }
  // Reservation Details / Form / Done
  if (event == 'reservation_details' || event == 'payment_form' || event == 'reservation_done') {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    jQuery('.reservation_step_1, .reservation_step_2, .reservation_step_3').addClass('completed');
    jQuery('.completed .reservation_step_img_text').html('<img src="https://uploads-ssl.webflow.com/5e5bcb9d0e170635e182079a/5e9ff8e6f9a5b1d89d40f5cb_check-solid.svg" width=50% />');
  }
  // Only Done GTM
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
  // Failure
  if (event == 'reservation_failure') {
    jQuery('#price_info_div_sticky, #res_form_buttons, #multipage_prev').show();
  }
}
jQuery(document).ready(function() {
  if (window.location.href.indexOf("mode") > -1) {
    jQuery('.workshopdiv').hide();
  }
});
