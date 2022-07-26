import './index.css';
import { modalsup } from './modules/modalFunctionality';
import fetchFood from './modules/fetchfood';

fetchFood();
/// render the API data to the DOM
const renderFood = async () => {
  const data = await fetchFood();
  const food = data.meals;
  const foodList = document.querySelector('.main-container');
  foodList.innerHTML = '';
  food.forEach((meal) => {
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-container');
    foodItem.innerHTML = `
        <div class="food-image">
            <img
              class="food-img"
              src="${meal.strMealThumb}"
              alt="food"
            />
          </div>
          <div class="food-info">
            <div class="name-like">
              <h2>${meal.strMeal}</h2>
              <i class="fa-solid fa-heart"></i>
            </div>
            <p>0 Likes</p>
            <button class="comments" id="${meal.idMeal}">Comments</button>
          </div>
        `;
    foodList.appendChild(foodItem);
  });
  const modalsUp = document.querySelectorAll('.comments');

  modalsUp.forEach((btn) => {
    btn.addEventListener('click', (e) => modalsup(e, food));
  });
};
renderFood();
