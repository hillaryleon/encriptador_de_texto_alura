let titulo = document.querySelector(`h2`);
titulo.innerHTML = `Ningun mensaje fue encontrado`
let

function encriptar() {
   let texto = document.getElementById(`texto`).value.tolowerCase();

  let txtCifrado = texto.replace(/e/img,`enter`); 
  let txtCifrado = txtCifrado.replace(/o/img,`ober`);
  let txtCifrado = txtCifrado.replace(/i/img,`imes`);
  let txtCifrado = txtCifrado.replace(/a/img,`ai`);
  let txtCifrado = txtCifrado.replace(/u/img,`ufat`);

  document.getElementById(`imagen`).style.display = "none";
  document.getElementById(`txt`).style.display = "none";
  document.getElementById(`mtxt`).innerHTML = texCifrado;
  document.getElementById(`copiar`).style.display = "show";
  document.getElementById(`copiar`).style.display = "inherit";
}
  

  function desencriptar() {
    let texto = document.getElementById(`texto`).value.tolowerCase();

   let txtCifrado = texto.replace(/enter/img,`e`); 
   let txtCifrado = txtCifrado.replace(/ober/img,`o`);
   let txtCifrado = txtCifrado.replace(/imes/img,`i`);
   let txtCifrado = txtCifrado.replace(/ai/img,`a`);
   let txtCifrado = txtCifrado.replace(/ufat/img,`u`);
 
   document.getElementById(`imagen`).style.display = "none";
   document.getElementById(`txt`).style.display = "none";
   document.getElementById(`mtxt`).innerHTML = txtCifrado;
   document.getElementById(`copiar`).style.display = "show";
   document.getElementById(`copiar`).style.display = "inherit";
  }
  function copiar() {
    let contenido = document.querySelector(`mtxt`);
    contenido.select();
    document.execCommand(`copy`);
    alert(``se copio);
  }
