function CompareText() {
  let captchaText = document.getElementById("spanAComparar").textContent;
  let inputText = document.getElementById("inputTexto").value;
  let resultElement = document.getElementById("spanResultado");

  if (captchaText === inputText) {
    resultElement.style.color = "green";
    resultElement.innerText = "Coincide";
  } else {
    resultElement.style.color = "red";
    resultElement.innerText = "No coincide";
  }
}
