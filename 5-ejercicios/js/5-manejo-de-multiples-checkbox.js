function checkboxAll(checkBoxGeneral) {
  let checkBoxList = document.getElementsByClassName("checkbox");

  [...checkBoxList].forEach(checkBox => {
    checkBox.checked = checkBoxGeneral.checked;
  });
}
