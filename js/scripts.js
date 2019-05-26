  $("#accordion").accordion({
      heightStyle: "content"

  });


  $('#btn').click(function () {



              if ($('#btn').hasClass('active')) {

                  $('#btn').removeClass('active');

                  $('#accordion').accordion('enable').css('opacity','1');
//                  $("#accordion").css('opacity','1');
                  


              } else {
                  $('#btn').addClass('active');

                  $("#accordion").accordion("disable").css('opacity','0.5');
//                  $("#accordion").css('opacity','0.5');
//                  
              }
              });
