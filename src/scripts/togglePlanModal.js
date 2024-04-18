const choosePlansForm = document.getElementById("form");
const backProjectBtn = document.getElementById("back-project-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const closeModalAria = document.getElementById("close-aria-plans-modal");

function toggleModalPlan() {
  choosePlansForm.classList.toggle("hide");
}

backProjectBtn.addEventListener("click", toggleModalPlan);
closeModalAria.addEventListener("click", toggleModalPlan);
closeModalBtn.addEventListener("click", toggleModalPlan);
