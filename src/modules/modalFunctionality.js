/* eslint-disable */
import Comments from './comments';

const closeModal = document.querySelector('.close');
const modalConatiner = document.getElementById('modals');
const NewComments = new Comments();

export const modalsup = (e, foods) => {
  const { id } = e.target;

  foods.find((food) => {
    if (Number(id) === Number(food.idMeal)) {
      const img = document.getElementById('img');
      const btn = document.querySelector('.comment-btn');
      const foodName = document.getElementById('foodType');
      img.src = `${food.strMealThumb}`;
      foodName.innerHTML = `${food.strMeal}`;
      NewComments.FetchComments(food.idMeal);
      modalConatiner.style.display = 'flex';
      btn.id = food.idMeal;
    }
  });
};

closeModal.addEventListener('click', () => {
  modalConatiner.style.display = 'none';
});

const commentForm = document.getElementById('form');

commentForm.addEventListener('submit', (e) => {
  const btn = document.querySelector('.comment-btn');
  e.preventDefault();
  const { name } = commentForm;
  const textArea = commentForm.comment;
  NewComments.PostComment({ commentId: btn.id, name: name.value, textArea: textArea.value });
  name.value = '';
  textArea.value = '';
});
