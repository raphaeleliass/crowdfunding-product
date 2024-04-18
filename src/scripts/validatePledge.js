const form = document.getElementById("form");
const successModal = document.getElementById("success-modal");

function handlePledgeValidationAndToggleModal(
  pledgeValue,
  alertTextElement,
  minPledgeAmount,
) {
  if (pledgeValue >= minPledgeAmount) {
    alertTextElement.classList.add("hide");
    toggleSuccessModal();
  } else {
    alertTextElement.classList.remove("hide");
  }
}

document
  .getElementById("submit-btn-noReward")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const pledgeValue = parseFloat(
      document.getElementById("no-reward-value-input").value,
    );
    const alertTextElement = document.getElementById("no-reward-alertText");
    const minPledgeAmount = 1;

    handlePledgeValidationAndToggleModal(
      pledgeValue,
      alertTextElement,
      minPledgeAmount,
    );
  });

document
  .getElementById("submit-btn-bamboo")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const pledgeValue = parseFloat(
      document.getElementById("bamboo-value-input").value,
    );
    const alertTextElement = document.getElementById("bamboo-alertText");
    const minPledgeAmount = 25;

    handlePledgeValidationAndToggleModal(
      pledgeValue,
      alertTextElement,
      minPledgeAmount,
    );
  });

document
  .getElementById("submit-btn-blackEdition")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const pledgeValue = parseFloat(
      document.getElementById("black-edition-value-input").value,
    );
    const alertTextElement = document.getElementById("black-edition-alertText");
    const minPledgeAmount = 75;

    handlePledgeValidationAndToggleModal(
      pledgeValue,
      alertTextElement,
      minPledgeAmount,
    );
  });

function toggleSuccessModal() {
  form.classList.toggle("hide");
  successModal.classList.toggle("hide");
}
