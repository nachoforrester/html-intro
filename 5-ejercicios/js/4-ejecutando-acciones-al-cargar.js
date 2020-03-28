var elementDiv = document.getElementById("unDiv");
elementDiv.innerHTML = "<p>UN TEXTO DIFERENTE</p>";

var divContenedor = document.getElementById("contenedorBoton");
var spanArriba = document.createElement("span");
var spanAbajo = document.createElement("span");

spanArriba.innerHTML = "texto arriba<br>";
spanAbajo.innerHTML = "<br>texto abajo";

divContenedor.append(spanAbajo);
divContenedor.prepend(spanArriba);

function clickButton() {
  if (confirm("¿Confirma que se muestre el mensaje por alerta?")) {
    alert(elementDiv.innerText);
  }
}
