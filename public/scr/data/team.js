let team = {
  "teamMembers": [
    {
      "name": "Dr. Zachary Rubin",
  "img" : "zac.png",
  "link" : "",
  "info" : "Zac likes bunnies"
},
    {
      "name": "Zac",
      "img": "zac.png",
      "link": "",
      "info": "Zac likes bunnies"
    },
    {
      "name": "Zac",
      "img": "zac.png",
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