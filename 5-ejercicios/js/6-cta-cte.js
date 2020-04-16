var overlayElement = document.getElementById("overlay");
var inputAmountElement = document.getElementById("inputAmount");
var balanceElement = document.getElementById("balance");
var balanceTotal = parseFloat(
  balanceElement.innerText.substring(1, balanceElement.innerText.length)
);
var tableBody = document.getElementById("tableBody");
var overlayTextPElement = document.getElementById("overlayTextP");

var operation = "deposit";

function overlayOn() {
  overlayElement.style.display = "block";
}

function overlayOff() {
  overlayElement.style.display = "none";
}

function depositButtonHandler() {
  operation = "deposit";
  overlayTextPElement.innerText = "¿Cuánto deseas depositar?";
  overlayOn();
}

function extractButtonHandler() {
  operation = "extraction";
  overlayTextPElement.innerText = "¿Cuánto deseas extraer?";
  overlayOn();
}

function confirmButtonHandler() {
  if (
    !isNaN(inputAmountElement.value) &&
    parseInt(inputAmountElement.value) > 0 &&
    inputAmountElement.value !== ""
  ) {
    if (validateAndExecuteOperation()) {
      balanceElement.innerText =
        "$" + balanceTotal.toFixed(2).toString().replace(".", ",");
      overlayOff();
    }
  } else {
    alert(
      "Por favor ingresar un monto válido. El decimal es un punto, no una coma. El monto no puede ser igual a 0."
    );
  }
  clearOverlayContent();
}

function getNewDate() {
  let today = new Date();
  let date = today.toJSON().slice(0, 10);
  let nDate =
    date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  return nDate;
}

function addNewLineToTable(value, styleName) {
  balanceTotal = balanceTotal + parseFloat(value);
  let newBalanceFormatted = balanceTotal
    .toFixed(2)
    .toString()
    .replace(".", ",");
  let valueFormatted = parseFloat(value)
    .toFixed(2)
    .toString()
    .replace(".", ",");
  let newDate = getNewDate();

  let newRow = document.createElement("tr");

  let htmlString = "<td>" + newDate + "</td>";
  htmlString =
    htmlString +
    '<td class="text-' +
    styleName +
    '">$' +
    valueFormatted +
    "</td>";
  htmlString = htmlString + "<tr><td>$" + newBalanceFormatted + "</td>";
  newRow.innerHTML = htmlString;

  tableBody.append(newRow);
}

function validateAndExecuteOperation() {
  if (operation === "deposit") {
    addNewLineToTable(inputAmountElement.value, "success");
    return true;
  } else if (operation === "extraction") {
    if (inputAmountElement.value > balanceTotal) {
      alert("No tienes fondos suficientes.");
      return false;
    } else {
      addNewLineToTable(inputAmountElement.value * -1, "danger");
      return true;
    }
  }
}

function cancelButtonHandler() {
  clearOverlayContent();
  overlayOff();
}

function clearOverlayContent() {
  inputAmountElement.value = "";
}
