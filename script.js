function criptografar() {
  const inputMessage = document.getElementById('inputMessage').value;
  const encodedMessage = inputMessage
  .replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai").replace(/o/g, "ober")
  .replace(/u/g, "ufat");
  document.getElementById('outputMessage').innerHTML = encodedMessage;
}

function descriptografar() {
  const inputMessage = document.getElementById('inputMessage').value;
  const decodedMessage = inputMessage
  .replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");
  document.getElementById('outputMessage').innerHTML = decodedMessage;
}

function copiarTexto() {
  const outputMessage = document.getElementById('outputMessage').innerHTML;
  navigator.clipboard.writeText(outputMessage).then(() => {
    alert('Texto copiado para a área de transferência!');
  }, () => {
    alert('Falha ao copiar o texto.');
  });
}

function checkTextArea() {
  const outputMessage = document.getElementById('outputMessage').value.trim();

  const copyBtn = document.getElementById('copyBtn');

  if (outputMessage > 0) {
    copyBtn.style.display = 'inline-block';
  } else {
    copyBtn.style.display = 'none';
  }
}