// const d = document;

// // Seleccionamos los elementos del DOM
// const textArea = d.getElementById("text");
// const resultadoTexto = d.getElementById("resultado-texto");
// const encryptButton = d.getElementById("encrypt");
// const decryptButton = d.getElementById("decrypt");
// const copyButton = d.getElementById("copy");
// const initialMessage = d.querySelector(".container-initial-message");
// const warningMessage = d.querySelector(".warning-use-lowercase");
// const resultadoContainer = d.querySelector(".container-answer-text");

// // Ocultamos el contenedor de resultados al inicio
// resultadoContainer.style.display = "none";

// // Llaves de encriptación
// const llaves = [
//   ["e", "enter"],
//   ["i", "imes"],
//   ["a", "ai"],
//   ["o", "ober"],
//   ["u", "ufat"],
// ];

// // Función para encriptar
// function encriptarMensaje(mensaje) {
//   let mensajeEncriptado = "";
//   for (let i = 0; i < mensaje.length; i++) {
//     let letra = mensaje[i].toLowerCase();
//     let encriptada = letra;
//     for (let j = 0; j < llaves.length; j++) {
//       if (letra === llaves[j][0]) {
//         encriptada = llaves[j][1];
//         break;
//       }
//     }
//     mensajeEncriptado += encriptada;
//   }
//   return mensajeEncriptado;
// }

// // Función para desencriptar
// function desencriptarMensaje(mensaje) {
//   let mensajeDesencriptado = mensaje;
//   for (let i = 0; i < llaves.length; i++) {
//     let regex = new RegExp(llaves[i][1], "g");
//     mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
//   }
//   return mensajeDesencriptado;
// }

// // Función para mostrar el resultado y ocultar el mensaje inicial
// function mostrarResultado(mensaje) {
//   initialMessage.style.display = "none";
//   resultadoTexto.textContent = mensaje;
//   resultadoContainer.style.display = "flex";
// }

// // Eventos
// encryptButton.addEventListener("click", () => {
//   const mensaje = textArea.value.toLowerCase();
//   const mensajeEncriptado = encriptarMensaje(mensaje);
//   mostrarResultado(mensajeEncriptado);
// });

// decryptButton.addEventListener("click", () => {
//   const mensaje = textArea.value.toLowerCase();
//   const mensajeDesencriptado = desencriptarMensaje(mensaje);
//   mostrarResultado(mensajeDesencriptado);
// });

// // Ocultar el mensaje de advertencia cuando se escribe en el textarea
// textArea.addEventListener("input", () => {
//   warningMessage.style.display = "none";
// });

// // Copiar el texto al portapapeles
// copyButton.addEventListener('click', () => {
//   resultadoTexto.select();
//   document.execCommand('copy');
// });
const d = document;

// Seleccionamos los elementos del DOM
const textArea = d.getElementById("text");
const resultadoTexto = d.getElementById("resultado-texto");
const encryptButton = d.getElementById("encrypt");
const decryptButton = d.getElementById("decrypt");
const copyButton = d.getElementById("copy");
const initialMessage = d.querySelector(".container-initial-message");
const warningMessage = d.querySelector(".warning-use-lowercase");
const resultadoContainer = d.querySelector(".container-answer-text");

// Ocultamos el contenedor de resultados al inicio
resultadoContainer.style.display = "none";

// Llaves de encriptación
const llaves = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Función para encriptar
function encriptarMensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i].toLowerCase();
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}

// Función para desencriptar
function desencriptarMensaje(mensaje) {
  let mensajeDesencriptado = mensaje;
  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
  }
  return mensajeDesencriptado;
}

// Función para mostrar el resultado y ocultar el mensaje inicial
function mostrarResultado(mensaje) {
  initialMessage.style.display = "none";
  resultadoTexto.textContent = mensaje;
  resultadoContainer.style.display = "flex";
}

// Eventos
encryptButton.addEventListener("click", () => {
  const mensaje = textArea.value.toLowerCase();
  const mensajeEncriptado = encriptarMensaje(mensaje);
  mostrarResultado(mensajeEncriptado);
});

decryptButton.addEventListener("click", () => {
  const mensaje = textArea.value.toLowerCase();
  const mensajeDesencriptado = desencriptarMensaje(mensaje);
  mostrarResultado(mensajeDesencriptado);
});

// Ocultar el mensaje de advertencia cuando se escribe en el textarea
textArea.addEventListener("input", () => {
  warningMessage.style.display = "none";
});

// Copiar el texto al portapapeles usando la API moderna
copyButton.addEventListener('click', () => {
  const textoACopiar = resultadoTexto.textContent; // O usa .innerText si prefieres
  
  // Usa la API del portapapeles para copiar el texto
  navigator.clipboard.writeText(textoACopiar)
    .then(() => {
      alert('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
});
