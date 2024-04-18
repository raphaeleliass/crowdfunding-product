const btnRewardBamboo = document.getElementById('select-reward-bamboo')
const btnRewardBlackEdition = document.getElementById('select-reward-black-edition')
const modalPlans = document.getElementById("form")

function toggleModalPlans(){
 modalPlans.classList.toggle('hide')
}

btnRewardBamboo.addEventListener("click", toggleModalPlans)
btnRewardBlackEdition.addEventListener("click", toggleModalPlans)