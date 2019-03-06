let team = {
  "header":"A little about us",
  "values": "Put a description of your buisness modle and core values here",
  "teamMembers": [
    {
      "name": "Dr. Zachary Rubin",
      "img": "scr/img/zac.png",
  "link" : "",
  "info" : "Zac likes bunnies"
},
    {
      "name": "Zac",
      "img": "scr/img/zac.png",
      "link": "",
      "info": "Zac likes bunnies"
    },
    {
      "name": "Zac",
      "img": 'scr / img / Songbird_Logo_410x.png',
      "link": "",
      "info": "Zac likes bunnies"
    },
]
}

$(document).ready(function() {


  let teamTemplate = $("#team-template").html();
  let compiledteamTemplate = Handlebars.compile(teamTemplate);
  let setup = compiledteamTemplate(team);

  $(".team").html(setup);
});