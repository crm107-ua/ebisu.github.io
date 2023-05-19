$(document).ready(function() {
    // Función para agregar texto al elemento de manera gradual
    function escribirTexto(textoCompleto, $elemento) {
      var textoActual = "";
      var contador = 0;
      var intervalo = setInterval(function() {
        textoActual += textoCompleto[contador];
        $elemento.text(textoActual);
        contador++;
        
        if (contador === textoCompleto.length) {
          clearInterval(intervalo);
        }
      }, 20);
    }
    
    $('.texto-dinamico').each(function() {
      var $elemento = $(this);
      
      var elementoVisible = esVisible($elemento[0]);
      if (elementoVisible) {
        var texto = $elemento.data('texto');
        
        // Evitar que el texto se agregue más de una vez
        if (!$elemento.hasClass('texto-agregado')) {
          escribirTexto(texto, $elemento);
          $elemento.addClass('texto-agregado');
        }
      }
    });

  });
  
  // Función para verificar si un elemento es visible en la ventana del navegador
  function esVisible(elemento) {
    var rect = elemento.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight
    );
  }
  