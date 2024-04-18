const checkboxNoReward = document.getElementById("checkbox-1");
const checkboxBamboo = document.getElementById("checkbox-2");
const checkboxBlackEdition = document.getElementById("checkbox-3");
const noRewardPledgeField = document.getElementById("no-reward-pledge-field");
const bambooPledgeField = document.getElementById("bamboo-pledge-field");
const blackEditionPledgeField = document.getElementById(
  "black-edition-pledge-field",
);

checkboxNoReward.addEventListener("click", () => {
  noRewardPledgeField.classList.remove("hide");
  bambooPledgeField.classList.add("hide");
  blackEditionPledgeField.classList.add("hide");
});

checkboxBamboo.addEventListener("click", () => {
  bambooPledgeField.classList.remove("hide");
  noRewardPledgeField.classList.add("hide");
  blackEditionPledgeField.classList.add("hide");
});

checkboxBlackEdition.addEventListener("click", () => {
  blackEditionPledgeField.classList.remove("hide");
  noRewardPledgeField.classList.add("hide");
  bambooPledgeField.classList.add("hide");
});
