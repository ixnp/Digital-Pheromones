'use strict';
let projectJson = {
  'projects': [
  {
  'project' : 'Exit Reality',
  'url' : 'http://exitrealityvr.com',
  'role' : 'Technical Lead',
  'awards' : 'contracts from IGT, IMAX, Nissan, Google and more. Recued CaptEX cost by up to $25,000 via discussions with hardware venders including HTC and HP',
      'imgurl': 'scr/img/exitReality.jpg',
  'about' : 'Exit Reality develops, deploys and manages VR infrastructure and services for out-of-home distribution to meet the needs of B2C and B2B companies and the VR industry at large',
  'reviews' : 'https://exitrealityvr.com/friends-and-partners',
  'technologies' : 'Game Stack: HTC Vive, Windows, Steam, Unity and Unreal. Hardware Stack: Arduino, Raspberry Pi, NodeJS, Python, C PCB designs, Various hardware sensors and I/O'
},
{
  'project' : 'Songbird Ocarinas',
  'url' : 'https://www.songbirdocarina.com/collections/synesthesia-ocarinas',
  'role' : 'Chief Technical Officer: Developed Atmel-based chips, created novel signal processing ...',
  'awards' : 'FCC approval ',
  'imgurl': 'scr/img/ocarina2.PNG',
  'about' : 'Exit Reality develops, deploys and manages VR infrastructure and services for out-of-home distribution to meet the needs of B2C and B2B companies and the VR industry at large',
  'reviews' : 'https://exitrealityvr.com/friends-and-partners',
  'technologies' : 'Game Stack: HTC Vive, Windows, Steam, Unity and Unreal. Hardware Stack: Arduino, Raspberry Pi, NodeJS, Python, C PCB designs, Various hardware sensors and I/O'
},
{
  'project' : 'Saying\' it Sam',
  'url' : 'https://www.songbirdocarina.com/collections/synesthesia-ocarinas',
  'role' : 'Chief Technical Officer: Developed Atmel-based chips, created novel signal processing ...',
  'awards' : 'FCC approval ',
  'imgurl': 'scr/img/sam.PNG',
  'about' : 'Exit Reality develops, deploys and manages VR infrastructure and services for out-of-home distribution to meet the needs of B2C and B2B companies and the VR industry at large',
  'reviews' : 'https://exitrealityvr.com/friends-and-partners',
  'technologies' : 'Game Stack: HTC Vive, Windows, Steam, Unity and Unreal. Hardware Stack: Arduino, Raspberry Pi, NodeJS, Python, C PCB designs, Various hardware sensors and I/O'
  }
]
};

$(document).ready(function(){
  // let val = 0;
  let projectTemplate = $('#project-template').html();
  let compiledprojectTemplate = Handlebars.compile(projectTemplate);
  let setup = compiledprojectTemplate(projectJson.projects[0]);


  $('.project_description').html(setup);

  

  $(".project_header_carousel_items").click(function() {
    let val = $(this).val();
    let valSecond = 0;
    let valThirds = 0;
    console.log("hi", val);
    if(val === 0){
       valSecond = 1;
       valThirds = 2;
    }else if (val === 1){
      valSecond = 2;
      valThirds = 0;
    } else {
      valSecond = 1;
      valThirds = 0;
    }
    $(`.project_carousel__items${val}`).addClass('select');
    $(`.project_carousel__items${valSecond}`).removeClass('select');
    $(`.project_carousel__items${valThirds}`).removeClass('select');
    $(".project_description").html(
      compiledprojectTemplate(projectJson.projects[val])
    );
  });


  $('.autoplay').slick({
    
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
 
