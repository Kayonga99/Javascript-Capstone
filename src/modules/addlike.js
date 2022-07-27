import involementAPI from "./config";
//add like to a post and POST to the involvement API

//get target id from the element that was clicked
const mainContainer = document.querySelector(".main-container");

const uploadLike = async () => {
  mainContainer.addEventListener("click", (e) => {
    const clicked = e.target.closest(".fa-solid");
    if (!clicked) return;
    const item = clicked.getAttribute("id");
    console.log("id", item);

    fetch(involementAPI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        item_id: item,
      }),
    });
    fetch(involementAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        const likeCount = document.querySelector(`.like-${item}`);
        console.log("el", likeCount);

        //render likes to the like count Element
        likeCount.textContent = `${
          data.filter((items) => items.item_id === item)[0].likes
        } Likes`;
      });
  });
};

export default uploadLike;
