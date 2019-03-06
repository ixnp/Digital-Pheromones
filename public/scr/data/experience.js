'use strict';
let cards = {
  experience: [
    {
      title: "Development",
      icon: `icon-embed`,
      xlink: "icon-embed2",
      content: `Unreal Node.js Python IOS C C# Unity`
    },
    {
      title: "Hardware",
      icon: `icon-powerplug`,
      xlink: "icon-power-cord",
      content: `Unreal Node.js Python IOS C C# Unity`
    },
    {
      title: "Design",
      icon: `icon-clipboard`,
      xlink: "icon-clipboard",
      content: `Unreal Node.js Python IOS C C# Unity`
    }
  ]
};

$(document).ready(function () {

  let experienceTemplate = $("#experience-template").html();
  let compiledexperienceTemplate = Handlebars.compile(experienceTemplate);
  let setup = compiledexperienceTemplate(cards);

  $(".experiences").html(setup);


});