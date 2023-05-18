function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto.replace(/e/gi, "enter")
        textoCifrado=textoCifrado.replace(/i/gi, "imes")
        textoCifrado=textoCifrado.replace(/a/gi, "ai")
        textoCifrado=textoCifrado.replace(/o/gi, "ober")
        textoCifrado=textoCifrado.replace(/u/gi, "ufat");
    
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.style.display="none";
      document.getElementById("textoParrafo").innerHTML = textoCifrado;
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";
    } else {
      Muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto.replace(/enter/gi, "e")
      textoCifrado=textoCifrado.replace(/imes/gi, "i")
      textoCifrado=textoCifrado.replace(/ai/gi, "a")
      textoCifrado=textoCifrado.replace(/ober/gi, "o")
      textoCifrado=textoCifrado.replace(/ufat/gi, "u");
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        Muñeco.src = "./img/desencriptado.jpg";
        document.getElementById("textoParrafo").innerHTML = textoCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
      } else {
        Muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }

  }