function AgregarFila() {
  let elementTable = document.getElementById("tabla");

  let newRow = elementTable.insertRow();

  let newCell1 = newRow.insertCell();
  let newCell2 = newRow.insertCell();

  newCell1.innerText = "celda{" + elementTable.rows.length + ",1}";
  newCell2.innerText = "celda{" + elementTable.rows.length + ",2}";
}
