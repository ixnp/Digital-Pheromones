'use strict';
let partners = {
  'logos' :[
    {
      'name': 'Lucasarts',
      'imgurl': 'scr/img/Lucasarts_logo.png'
    },
    {
      'name': 'NISSAN',
      'imgurl': 'scr/img/NISSAN-LOGO.png'
    },
    {
      'name': 'imax',
      'imgurl': 'scr/img/imax-logo.png'
    },
    {
      'name': 'hotelzetta',
      'imgurl': 'scr/img/hotelzetta.png'
    },
    {
      'name': 'Columbia Records',
      'imgurl': 'scr/img/Columbia_Records.png'
    },
    {
      'name': 'Songbird',
      'imgurl': 'scr/img/Songbird_Logo_410x.png'
    },
    {
      'name': 'HTC',
      'imgurl': 'scr/img/HTC.png'
    }
  ]
};

$(document).ready(function () {
 

  let partnersTemplate = $('#partners-template').html();
  let compiledpartnersTemplate = Handlebars.compile(partnersTemplate);
  let setup = compiledpartnersTemplate(partners);

  $('.partners').html(setup);


});