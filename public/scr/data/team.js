'use strict';
let team = {
  'header':'A little about us',
  'values': 'Put a description of your buisness modle and core values here',
  'teamMembers': [
    {
      'name': 'Dr. Zachary Rubin',
      'imgurl': 'scr/img/zac.PNG',
      'link' : 'test',
      'info' : 'Zac likes bunnies'
    },
    {
      'name': 'Zac',
      'imgurl': 'scr/img/zac.PNG',
      'link': 'test',
      'info': 'Zac likes bunnies'
    },
    {
      'name': 'Zac',
      'imgurl': 'scr/img/zac.PNG',
      'link': 'test',
      'info': 'Zac likesS bunnies'
    },
  ]
};

$(document).ready(function() {


  let teamTemplate = $('#team-template').html();
  let compiledteamTemplate = Handlebars.compile(teamTemplate);
  let setup = compiledteamTemplate(team);

  $('.team').html(setup);
});