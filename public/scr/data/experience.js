'use strict';
let cards = {
  "experience": [
    {
      "title": "Development",
      "icon": `icon-embed`,
      "xlink":"icon-embed2",
      "content": `<li>Unreal</li><li>Node.js</li><li>Python</li><li>IOS</li><li>C C#</li><li>Unity</li>`
    },
    {
      "title": "Hardware",
      "icon": `icon-powerplug`,
      "xlink": "icon-power-cord",
      "content": `<li>Unreal</li><li>Node.js</li><li>Python</li><li>IOS</li><li>C C#</li><li>Unity</li><`
    },
    {
      "title": "Design",
      "icon": `icon-clipboard`,
      "xlink": "icon-clipboard",
      "content": `<li>Unreal</li><li>Node.js</li><li>Python</li><li>IOS</li><li>C C#</li><li>Unity</li>`
    }
  ]
};

$(document).ready(function () {

  let experienceTemplate = $("#experience-template").html();
  let compiledexperienceTemplate = Handlebars.compile(experienceTemplate);
  let setup = compiledexperienceTemplate(cards);

  $(".experiences").html(setup);


});