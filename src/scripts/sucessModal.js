const modalSuccess = document.getElementById("success-modal");
const btnSuccess = document.getElementById("btn-success-modal");

function toggleModalSuccess() {
  modalSuccess.classList.toggle("hide");
}

btnSuccess.addEventListener("click", toggleModalSuccess);
