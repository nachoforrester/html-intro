function cambiarEstilo() {
  let elementText = document.getElementById("texto");

  if (confirm("¿Está seguro que quiere cambiar el estilo?")) {
    elementText.style.fontFamily = "Comic Sans MS";
    elementText.style.fontSize = "14px";
    elementText.style.color = "red";
  }
}
