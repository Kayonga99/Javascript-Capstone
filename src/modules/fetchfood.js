import foodUrl from './url';

/// fetch(foodUrl)API call
const fetchFood = async () => {
  const response = await fetch(foodUrl);
  const data = await response.json();
  return data;
};

export default fetchFood;
