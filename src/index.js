import './index.css';

import fetchFood from './modules/fetchfood';

fetchFood();
/// render the API data to the DOM
const renderFood = async () => {
  const data = await fetchFood();
  const food = data.meals;
  const foodList = document.querySelector('.main-container');
  foodList.innerHTML = '';
  food.forEach((meal, index) => {
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
            <p>${meal.idMeal} Likes</p>
            <button class="comments" id="${index}">Comments</button>
          </div>
        `;
    foodList.appendChild(foodItem);
  });
};

renderFood();
