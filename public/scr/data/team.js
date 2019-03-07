'use strict';
let team = {
  header: "A little about us",
  values: "Put a description of your buisness modle and core values here",
  teamMembers: [
    {
      name: "Dr. Zachary Rubin",
      imgurl: "scr/img/zacrubin.jpg",
      link: "https://www.linkedin.com/in/zakrubin/",
      info: "Zac likes bunnies"
    },
    {
      name: "Haven Skinner",
      imgurl: "scr/img/Skinner.jpg",
      link: "https://www.linkedin.com/in/haven-skinner-7746ba19/detail/photo/",
      info: "Zac likes bunnies"
    },
    {
      name: "Yehonatan Koenig",
      imgurl: "scr/img/yehonatan.jpg",
      link: "https://www.linkedin.com/in/yehonatan-koenig-1b83b6/detail/photo/",
      info: "Zac likesS bunnies"
    }
  ]
};

$(document).ready(function() {


  let teamTemplate = $('#team-template').html();
  let compiledteamTemplate = Handlebars.compile(teamTemplate);
  let setup = compiledteamTemplate(team);

  $('.team').html(setup);
});