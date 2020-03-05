  $(document).ready(function(){
    $('#funciones_flecha').hide();
    $('#derivadas_flecha').hide();
    $('#integrales_flecha').hide();
    $('#limites_flecha').hide();
    $('#sucesiones_flecha').hide();
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
      $('#funciones_flecha').fadeIn(1000);
      $('#limites_flecha').fadeOut(100);
      $('#derivadas_flecha').fadeOut(100);
      $('#integrales_flecha').fadeOut(100);
      $('#sucesiones_flecha').fadeOut(100);
    });

    $('#limites').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dG9t51yT4nCwQEtWwCwvBwn");
      $('#funciones_flecha').fadeOut(100);
      $('#limites_flecha').fadeIn(1000);
      $('#derivadas_flecha').fadeOut(100);
      $('#integrales_flecha').fadeOut(100);
      $('#sucesiones_flecha').fadeOut(100);

    });

    $('#derivadas').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dG2UQ35tPsaVMYkQhc8Vp__");
      $('#funciones_flecha').fadeOut(100);
      $('#limites_flecha').fadeOut(100);
      $('#derivadas_flecha').fadeIn(1000);
      $('#integrales_flecha').fadeOut(100);
      $('#sucesiones_flecha').fadeOut(100);

    });

    $('#integrales').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dEHnMLZGaNEXgHzJ2-TPLWw");
      $('#funciones_flecha').fadeOut(100);
      $('#limites_flecha').fadeOut(100);
      $('#derivadas_flecha').fadeOut(100);
      $('#integrales_flecha').fadeIn(1000);
      $('#sucesiones_flecha').fadeOut(100);

    });

    $('#sucesiones').click(function(){
      $('#video_v').fadeOut(300);
      $('#video_v').fadeIn(1500);
      $('#video_v').attr("src","https://www.youtube.com/embed/videoseries?list=PLeySRPnY35dHPL4772Xi8NIky1-01D8BH");
      $('#funciones_flecha').fadeOut(100);
      $('#limites_flecha').fadeOut(100);
      $('#derivadas_flecha').fadeOut(100);
      $('#integrales_flecha').fadeOut(100);
      $('#sucesiones_flecha').fadeIn(1000);
    });




  });
