'use strict';

$(document).ready(function(){
  $(".btn_submit_contact").click(function(e) {
   
    let name = $(".name").val();
    let email = $(".email").val();
    let subject = $(".subject").val();
    let message = $(".message").val();

    
    console.log(name,email,subject,message);

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
    console.log('valid email')
    } else {
    console.log('not valid email')
      e.preventDefault();
    };
    
    $(".contact-form").children('input').val('');
    $(".contact-form").children('textarea').val('');
  
   
    
  });
})