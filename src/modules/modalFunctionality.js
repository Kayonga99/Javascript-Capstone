/*eslint-disable*/
const closeModal = document.querySelector('.close');
const modalConatiner = document.getElementById('modals');

export const modalsup = (e, foods) => {
  const { id } = e.target;

  foods.find((food) => {
    if (Number(id) === Number(food.idMeal)) {
      const img = document.getElementById('img');
      const foodName = document.getElementById('foodType');
      img.src = `${food.strMealThumb}`;
      foodName.innerHTML = `${food.strMeal}`;
      modalConatiner.style.display = 'flex';
    }
  });
};

closeModal.addEventListener('click', () => {
  modalConatiner.style.display = 'none';
});
