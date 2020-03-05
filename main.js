  $(document).ready(function(){
    $('.slider').bxSlider({
      mode: 'fade',
      captions: true,
      adaptiveHeight: true,
      slideWidth: 1920,
      pager: false,
      controls: false
    });

    $('#funciones').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dGfEuNGbQmymhiQF4oTUIMb");
    });

    $('#limites').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dG9t51yT4nCwQEtWwCwvBwn");

    });

    $('#derivadas').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dG2UQ35tPsaVMYkQhc8Vp__");

    });

    $('#integrales').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dEHnMLZGaNEXgHzJ2-TPLWw");

    });

    $('#sucesiones').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dHPL4772Xi8NIky1-01D8BH");

    });




  });
