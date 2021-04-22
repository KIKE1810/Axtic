  //Slider desde cero. Beny
  var estado = 1;
  var iniciaslider = setTimeout('next()',5000);

  var banner1 = "imagenes/banner_mercadolibre.jpg";
  var banner2 = "imagenes/Banner_programador.jpg";
  var banner3 = "imagenes/Servicios/banner_servicios_3.jpg";


  function next(){
       if (estado > 3){
            estado = 1;
       }

       switch (estado) {
            case 1:
            //Coloca Animación y cambia el bannerAxtic
            cambiodeEstado(banner1);
            pintarIndicador(2);
            setTimeout('next()',4000);
            break;

            case 2:
            //Coloca Animación y cambia el bannerAxtic
            cambiodeEstado(banner2);
            pintarIndicador(3);
            setTimeout('next()',4000);
            break;

            case 3:
            //Coloca Animación y cambia el bannerAxtic
            cambiodeEstado(banner3);
            pintarIndicador(1);
            setTimeout('next()',4000);
            break;

            default:
            //Coloca Animación y cambia el bannerAxtic
            cambiodeEstado(banner3);
            pintarIndicador(1);
            setTimeout('next()',4000);
            break;
       }
       estado = estado + 1;
  }

       function seleccionaEstado(indicador){
            switch (indicador) {
                 case 1:
                 cambiodeEstado(banner3);
                 pintarIndicador(1);
                 break;

                 case 2:
                 cambiodeEstado(banner1);
                 pintarIndicador(2);
                 break;

                 case 3:
                 cambiodeEstado(banner2);
                 pintarIndicador(3);
                 break;

                 default:
                 cambiodeEstado(banner3);
                 pintarIndicador(1);
                 break;
            }
       }
   
      function cambiodeEstado(imagen){
               //Revisar animación si se queda o se quita. 
          var banner = document.getElementById("contenedorBanner");
          banner.innerHTML =  '<img src="'+imagen+'" class="img-responsive animate__animated animate__fadeIn" id="banneraxtic">';

          //$("#banneraxtic").attr("src",imagen);
       }
       function pintarIndicador(indicador){
            $("#indicador1").css("background-color","#a3a3a3");
            $("#indicador2").css("background-color","#a3a3a3");
            $("#indicador3").css("background-color","#a3a3a3");

            $("#indicador"+indicador).css("background-color","#279deb");
       }          