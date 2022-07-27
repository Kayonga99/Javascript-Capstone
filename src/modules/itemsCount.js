const itemsCount = (food) => {
  const foodCount = document.querySelector('#food-count');
  foodCount.textContent = food.length;
  return food.length;
};

export default itemsCount;
