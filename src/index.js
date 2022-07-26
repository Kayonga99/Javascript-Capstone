import './index.css';
import { modalsup } from './modules/modalFunctionality';
import fetchFood from './modules/fetchfood';
import uploadLike from './modules/addlike';
import involementAPI from './modules/config';
import itemsCount from './modules/itemsCount';

fetchFood();

/// render the API data to the DOM
const renderFood = async () => {
  const data = await fetchFood();
  const food = data.meals;
  const foodList = document.querySelector('.main-container');
  // const foodCount = document.querySelector('#food-count');
  // foodCount.textContent = food.length;
  itemsCount(food);
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
              <h2 class="meal" data-se=${meal.idMeal}>${meal.strMeal} </h2>
              <i class="fa-solid fa-heart" id=${meal.idMeal}></i>
            </div>
            <p class="like like-${meal.idMeal}">0 Likes</p>
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
uploadLike();

/// / show likes on the DOM when the page loads from the involvement API
const renderLikes = async () => {
  const data = await fetch(involementAPI);
  const likes = await data.json();

  likes.forEach((like) => {
    const likeCount = document.querySelector(`.like-${like.item_id}`);

    // render likes to the specific like count Element
    likeCount.textContent = `${like.likes} Likes`;
  });
};
renderLikes();
