/* Stuff */

jQuery(document).ready(function() {
  jQuery('form option:first-child').attr('disabled","disabled');
  function changeMe(sel) {
    sel.style.color = "black";
  }
  jQuery('#iban').mask('SS00 0000 0000 0000 0000 00', {
    placeholder: 'IBAN'
  });
  jQuery('#bic-input, #iban-input').css('text-transform', 'uppercase')
  jQuery('#bic-input, #iban-input').focusout(function() {
    this.value = this.value.toLocaleUpperCase();
    console.log(jQuery('#bic, #iban').val());
  });
  var str = window.location.href;
  var result = str.split("#");
  var id = result[1];
  jQuery('#idclass').val(id);
  jQuery('#auswahlmitgliedschaft').append('<option value="Kursmitgliedschaft">Kursmitgliedschaft</option>');
  jQuery("#auswahlmitgliedschaft, #erabfrage, #er, #ner").on('change', function() {
    if (jQuery('#auswahlmitgliedschaft').val() == "Open Session Mitgliedschaft") {
      jQuery('#containerkurs').hide();
      jQuery('#containerandere').show();
    } else if (jQuery('#auswahlmitgliedschaft').val() == "Kursmitgliedschaft") {
      jQuery('#containerkurs').show();
      jQuery('#containerandere').hide();
    } else if (jQuery('#auswahlmitgliedschaft').val() == "Passive Mitgliedschaft") {
      jQuery('#containerkurs').hide();
      jQuery('#containerandere').show();
    }
  });
  jQuery("#erabfrage").on('change', function() {
    if (jQuery('#erabfrage').val() == "Mit Nachweis") {
      jQuery('#uploadcontainer').hide();
      jQuery('#uploadhinweis').show();
      jQuery('.erziehungsberechtigterdiv, .erzieh').hide();
    } else if (jQuery('#erabfrage').val() == "Ohne Nachweis") {
      jQuery('#uploadcontainer').hide();
      jQuery('#uploadhinweis').hide();
      jQuery('.erziehungsberechtigterdiv, .erzieh').show();
    } else if (jQuery('#erabfrage').val() == "Keine Ermäßigung") {
      jQuery('#uploadcontainer').hide();
      jQuery('#uploadhinweis').hide();
      jQuery('.erziehungsberechtigterdiv, .erzieh').hide();
    }
  });
  jQuery("#mengekurse, #uploadfile, #auswahlmitgliedschaft, #zopen, #erabfrage, #er, #ner").on('change', function() {
    if (jQuery('#auswahlmitgliedschaft').val() == "Passive Mitgliedschaft") {
      if (jQuery('#red-input option:selected').val() == "Ermäßigung") {
        jQuery('#summe').text(passive);
      } else if (jQuery('#red-input option:selected').val() == "Keine Ermäßigung") {
        jQuery('#summe').text(passiv);
      } else {
        jQuery('#summe').text('');
      }
    }
    if (jQuery('#auswahlmitgliedschaft').val() == "Open Session Mitgliedschaft") {
      if (jQuery('#red-input option:selected').val() == "Ermäßigung") {
        jQuery('#summe').text('27');
      } else if (jQuery('#red-input option:selected').val() == "Keine Ermäßigung") {
        jQuery('#summe').text('36');
      } else {
        jQuery('#summe').text('');
      }
    }
    if (jQuery('#mengekurse').val() == "1") {
      jQuery('#erster').show();
      jQuery('#zweiter, #dritter').hide();
      if (jQuery('#red-input option:selected').val() == "Keine Ermäßigung" && jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('47');
      } else if (jQuery('#red-input option:selected').val() == "Keine Ermäßigung" && !jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('29');
      } else if (jQuery('#red-input option:selected').val() == "Ermäßigung" && jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('35');
      } else if (jQuery('#red-input option:selected').val() == "Ermäßigung" && !jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('21');
      }
    }
    if (jQuery('#mengekurse').val() == "2") {
      jQuery('#erster, #zweiter').show();
      jQuery('#dritter').hide();
      if (jQuery('#red-input option:selected').val() == "Keine Ermäßigung" && jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('58');
      } else if (jQuery('#red-input option:selected').val() == "Keine Ermäßigung" && !jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('40');
      } else if (jQuery('#red-input option:selected').val() == "Ermäßigung" && jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('43');
      } else if (jQuery('#red-input option:selected').val() == "Ermäßigung" && !jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('29');
      }
    }
    if (jQuery('#mengekurse').val() == "3") {
      jQuery('#erster, #zweiter, #dritter').show();
      if (jQuery('#red-input option:selected').val() == "Keine Ermäßigung" && jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('69');
      } else if (jQuery('#red-input option:selected').val() == "Keine Ermäßigung" && !jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('51');
      } else if (jQuery('#red-input option:selected').val() == "Ermäßigung" && jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('51');
      } else if (jQuery('#red-input option:selected').val() == "Ermäßigung" && !jQuery('#zopen').is(':checked')) {
        jQuery('#summe').text('37');
      }
    }
    jQuery('#beitraginput').val(jQuery('#summe').text());
  });
});

/* Course Options */

jQuery(document).ready(function() {
  jQuery("#kurs1").on('change', function() {
    jQuery('#zparkour1 option:eq(0)').prop('selected', true);
    jQuery('#zparkour1').removeClass('valid');
    jQuery('#tag1 option:eq(0)').prop('selected', true);
    jQuery('#tag1').removeClass('valid');
  });
  jQuery("#kurs2").on('change', function() {
    jQuery('#zparkour2 option:eq(0)').prop('selected', true);
    jQuery('#tag2 option:eq(0)').prop('selected', true);
  });
  jQuery("#kurs3").on('change', function() {
    jQuery('#zparkour3 option:eq(0)').prop('selected', true);
    jQuery('#tag3 option:eq(0)').prop('selected', true);
  });
  jQuery("#zparkour1").on('change', function() {
    jQuery('#tag1 option:eq(0)').prop('selected', true);
  });
  jQuery("#zparkour2").on('change', function() {
    jQuery('#tag2 option:eq(0)').prop('selected', true);
  });
  jQuery("#zparkour3").on('change', function() {
    jQuery('#tag3 option:eq(0)').prop('selected', true);
  });
  jQuery("#kurs1, #zparkour1, #mengekurse").on('change', function() {
    if (jQuery('#kurs1 option:selected').prop('disabled') == true) {
      jQuery('#tag1').hide();
    } else {
      jQuery('#tag1').show();
    }
    if (jQuery('#kurs1').val() == "Parkour") {
      jQuery('#zparkour1').show();
      if (jQuery('#zparkour1 option:selected').prop('disabled') == true) {
        jQuery('#tag1').hide();
      } else if (jQuery('#zparkour1').val() == "Minis") {
        jQuery('#tag1').show();
        jQuery('#tag1 option:eq(1), #tag1 option:eq(2), #tag1 option:eq(3), #tag1 option:eq(4)').show();
        jQuery('#tag1 option:eq(5), #tag1 option:eq(6)').hide();
      } else if (jQuery('#zparkour1').val() == "Kids") {
        jQuery('#tag1').show();
        jQuery('#tag1 option:eq(1), #tag1 option:eq(2), #tag1 option:eq(3), #tag1 option:eq(4), #tag1 option:eq(5), #tag1 option:eq(6)').show();
      } else if (jQuery('#zparkour1').val() == "Teens") {
        jQuery('#tag1').show();
        jQuery('#tag1 option:eq(1), #tag1 option:eq(2), #tag1 option:eq(3), #tag1 option:eq(4), #tag1 option:eq(5), #tag1 option:eq(6)').show();
      } else if (jQuery('#zparkour1').val() == "Grown-Ups") {
        jQuery('#tag1').show();
        jQuery('#tag1 option:eq(2), #tag1 option:eq(4), #tag1 option:eq(5)').show();
        jQuery('#tag1 option:eq(1), #tag1 option:eq(3), #tag1 option:eq(6)').hide();
      } else if (jQuery('#zparkour1').val() == "Adults") {
        jQuery('#tag1').show();
        jQuery('#tag1 option:eq(1), #tag1 option:eq(2), #tag1 option:eq(3), #tag1 option:eq(4), #tag1 option:eq(5)').show();
        jQuery('#tag1 option:eq(6)').hide();
      }
    } else if (jQuery('#kurs1').val() == "AcroYoga") {
      jQuery('#zparkour1').hide();
      jQuery('#tag1 option:eq(1), #tag1 option:eq(2), #tag1 option:eq(4), #tag1 option:eq(5), #tag1 option:eq(6)').hide();
      jQuery('#tag1 option:eq(3)').show();
    } else if (jQuery('#kurs1').val() == "Tricking") {
      jQuery('#zparkour1').hide();
      jQuery('#tag1 option:eq(1), #tag1 option:eq(4), #tag1 option:eq(5), #tag1 option:eq(6)').hide();
      jQuery('#tag1 option:eq(2), #tag1 option:eq(3)').show();
    } else if (jQuery('#kurs1').val() == "Breakdance") {
      jQuery('#zparkour1').hide();
      jQuery('#tag1 option:eq(1), #tag1 option:eq(3), #tag1 option:eq(4), #tag1 option:eq(5), #tag1 option:eq(6)').hide();
      jQuery('#tag1 option:eq(2)').show();
    } else if (jQuery('#kurs1').val() == "Functional Fitness") {
      jQuery('#zparkour1').hide();
      jQuery('#tag1 option:eq(3), #tag1 option:eq(5), #tag1 option:eq(6)').hide();
      jQuery('#tag1 option:eq(1), #tag1 option:eq(2), #tag1 option:eq(4)').show();
    } else if (jQuery('#kurs1').val() == "Movement") {
      jQuery('#zparkour1').hide();
      jQuery('#tag1 option:eq(2), #tag1 option:eq(4), #tag1 option:eq(6), #tag1 option:eq(5)').hide();
      jQuery('#tag1 option:eq(1), #tag1 option:eq(3)').show();
    }
  });
  jQuery("#kurs2, #zparkour2, #mengekurse").on('change', function() {
    if (jQuery('#kurs2 option:selected').prop('disabled') == true) {
      jQuery('#tag2').hide();
    } else {
      jQuery('#tag2').show();
    }
    if (jQuery('#kurs2').val() == "Parkour") {
      jQuery('#zparkour2').show();
      if (jQuery('#zparkour2 option:selected').prop('disabled') == true) {
        jQuery('#tag2').hide();
      } else if (jQuery('#zparkour2').val() == "Minis") {
        jQuery('#tag2').show();
        jQuery('#tag2 option:eq(1), #tag2 option:eq(2), #tag2 option:eq(3), #tag2 option:eq(4)').show();
        jQuery('#tag2 option:eq(5), #tag2 option:eq(6)').hide();
      } else if (jQuery('#zparkour2').val() == "Kids") {
        jQuery('#tag2').show();
        jQuery('#tag2 option:eq(1), #tag2 option:eq(2), #tag2 option:eq(3), #tag2 option:eq(4), #tag2 option:eq(5), #tag2 option:eq(6)').show();
      } else if (jQuery('#zparkour2').val() == "Teens") {
        jQuery('#tag2').show();
        jQuery('#tag2 option:eq(1), #tag2 option:eq(2), #tag2 option:eq(3), #tag2 option:eq(4), #tag2 option:eq(5), #tag2 option:eq(6)').show();
      } else if (jQuery('#zparkour2').val() == "Grown-Ups") {
        jQuery('#tag2').show();
        jQuery('#tag2 option:eq(2), #tag2 option:eq(4), #tag2 option:eq(5)').show();
        jQuery('#tag2 option:eq(1), #tag2 option:eq(3), #tag2 option:eq(6)').hide();
      } else if (jQuery('#zparkour2').val() == "Adults") {
        jQuery('#tag2').show();
        jQuery('#tag2 option:eq(1), #tag2 option:eq(2), #tag2 option:eq(3), #tag2 option:eq(4), #tag2 option:eq(5)').show();
        jQuery('#tag2 option:eq(6)').hide();
      }
    } else if (jQuery('#kurs2').val() == "AcroYoga") {
      jQuery('#zparkour2').hide();
      jQuery('#tag2 option:eq(1), #tag2 option:eq(2), #tag2 option:eq(4), #tag2 option:eq(5), #tag2 option:eq(6)').hide();
      jQuery('#tag2 option:eq(3)').show();
    } else if (jQuery('#kurs2').val() == "Tricking") {
      jQuery('#zparkour2').hide();
      jQuery('#tag2 option:eq(1), #tag2 option:eq(4), #tag2 option:eq(5), #tag2 option:eq(6)').hide();
      jQuery('#tag2 option:eq(2), #tag2 option:eq(3)').show();
    } else if (jQuery('#kurs2').val() == "Breakdance") {
      jQuery('#zparkour2').hide();
      jQuery('#tag2 option:eq(1), #tag2 option:eq(3), #tag2 option:eq(4), #tag2 option:eq(5), #tag2 option:eq(6)').hide();
      jQuery('#tag2 option:eq(2)').show();
    } else if (jQuery('#kurs2').val() == "Functional Fitness") {
      jQuery('#zparkour2').hide();
      jQuery('#tag2 option:eq(3), #tag2 option:eq(5), #tag2 option:eq(6)').hide();
      jQuery('#tag2 option:eq(1), #tag2 option:eq(2), #tag2 option:eq(4)').show();
    } else if (jQuery('#kurs2').val() == "Movement") {
      jQuery('#zparkour2').hide();
      jQuery('#tag2 option:eq(2), #tag2 option:eq(4), #tag2 option:eq(6), #tag2 option:eq(5)').hide();
      jQuery('#tag2 option:eq(1), #tag2 option:eq(3)').show();
    }
  });
  jQuery("#kurs3, #zparkour3, #mengekurse").on('change', function() {
    if (jQuery('#kurs3 option:selected').prop('disabled') == true) {
      jQuery('#tag3').hide();
    } else {
      jQuery('#tag3').show();
    }
    if (jQuery('#kurs3').val() == "Parkour") {
      jQuery('#zparkour3').show();
      if (jQuery('#zparkour3 option:selected').prop('disabled') == true) {
        jQuery('#tag3').hide();
      } else if (jQuery('#zparkour3').val() == "Minis") {
        jQuery('#tag3').show();
        jQuery('#tag3 option:eq(1), #tag3 option:eq(2), #tag3 option:eq(3), #tag3 option:eq(4)').show();
        jQuery('#tag3 option:eq(5), #tag3 option:eq(6)').hide();
      } else if (jQuery('#zparkour3').val() == "Kids") {
        jQuery('#tag3').show();
        jQuery('#tag3 option:eq(1), #tag3 option:eq(2), #tag3 option:eq(3), #tag3 option:eq(4), #tag3 option:eq(5), #tag3 option:eq(6)').show();
      } else if (jQuery('#zparkour3').val() == "Teens") {
        jQuery('#tag3').show();
        jQuery('#tag3 option:eq(1), #tag3 option:eq(2), #tag3 option:eq(3), #tag3 option:eq(4), #tag3 option:eq(5), #tag3 option:eq(6)').show();
      } else if (jQuery('#zparkour3').val() == "Grown-Ups") {
        jQuery('#tag3').show();
        jQuery('#tag3 option:eq(2), #tag3 option:eq(4), #tag3 option:eq(5)').show();
        jQuery('#tag3 option:eq(1), #tag3 option:eq(3), #tag3 option:eq(6)').hide();
      } else if (jQuery('#zparkour3').val() == "Adults") {
        jQuery('#tag3').show();
        jQuery('#tag3 option:eq(1), #tag3 option:eq(2), #tag3 option:eq(3), #tag3 option:eq(4), #tag3 option:eq(5)').show();
        jQuery('#tag3 option:eq(6)').hide();
      }
    } else if (jQuery('#kurs3').val() == "AcroYoga") {
      jQuery('#zparkour3').hide();
      jQuery('#tag3 option:eq(1), #tag3 option:eq(2), #tag3 option:eq(4), #tag3 option:eq(5), #tag3 option:eq(6)').hide();
      jQuery('#tag3 option:eq(3)').show();
    } else if (jQuery('#kurs3').val() == "Tricking") {
      jQuery('#zparkour3').hide();
      jQuery('#tag3 option:eq(1), #tag3 option:eq(4), #tag3 option:eq(5), #tag3 option:eq(6)').hide();
      jQuery('#tag3 option:eq(2), #tag3 option:eq(3)').show();
    } else if (jQuery('#kurs3').val() == "Breakdance") {
      jQuery('#zparkour3').hide();
      jQuery('#tag3 option:eq(1), #tag3 option:eq(3), #tag3 option:eq(4), #tag3 option:eq(5), #tag3 option:eq(6)').hide();
      jQuery('#tag3 option:eq(2)').show();
    } else if (jQuery('#kurs3').val() == "Functional Fitness") {
      jQuery('#zparkour3').hide();
      jQuery('#tag3 option:eq(3), #tag3 option:eq(5), #tag3 option:eq(6)').hide();
      jQuery('#tag3 option:eq(1), #tag3 option:eq(2), #tag3 option:eq(4)').show();
    } else if (jQuery('#kurs3').val() == "Movement") {
      jQuery('#zparkour3').hide();
      jQuery('#tag3 option:eq(2), #tag3 option:eq(4), #tag3 option:eq(6), #tag3 option:eq(5)').hide();
      jQuery('#tag3 option:eq(1), #tag3 option:eq(3)').show();
    }
  });
});

/* Signatures */

jQuery(document).ready(function() {
  var canvas = document.getElementById("signature-pad");
  var signaturePad = new SignaturePad(canvas);
  signaturePad.onEnd = function(event) {
    jQuery('#export, #clear').attr("disabled", false);
    jQuery('#export, #clear').removeClass('disablesig')
  };
  document.getElementById("export").addEventListener("click", function(e) {
    // Feel free to do whatever you want with the image
    // as export to a server or even save it on the device.
    var imageURI = signaturePad.toDataURL();
    document.getElementById("preview").src = imageURI;
    document.getElementById("signaturehash").value = imageURI;
  }, false);
  document.getElementById('clear').addEventListener('click', function() {
    signaturePad.clear();
    document.getElementById("preview").src = "";
    document.getElementById("signaturehash").value = "";
  });
  jQuery('#export, #clear').attr("disabled", true);
  jQuery('#export, #clear').addClass('disablesig');
  jQuery('#export').click(function() {
    jQuery('.wrapper-signature').hide();
    jQuery('#export').hide();
    jQuery('#preview').fadeIn();
  });
  jQuery('#clear').click(function() {
    jQuery('.wrapper-signature').fadeIn();
    jQuery('#export').attr("disabled", true);
    jQuery('#export').addClass('disablesig');
    jQuery('#export').show();
    jQuery('#preview').hide();
    jQuery('#clear').attr("disabled", true);
    jQuery('#clear').addClass('disablesig');
  });
});
