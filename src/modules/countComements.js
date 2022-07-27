const CountComments = (data) => {
    const Count = document.querySelector('.count-comment');
    Count.innerHTML = data.length;
    return data.length;
  };
  
  export default CountComments;