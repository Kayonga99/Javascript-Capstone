// const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/osAfoWotRUU7ff2xu5gl/comments?item_id=item1`
import CountComments from './CountComments';

class Comments {
  FetchComments = (itemId) => {
    fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/osAfoWotRUU7ff2xu5gl/comments?item_id=${itemId}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) return;
        const commentContainer = document.querySelector('.all-comments');
        commentContainer.innerHTML = data
          .map(
            (element) => `<li class="comments-element">
            ${element.creation_date.replace('-', '/')}&nbsp;${
              element.username
            }&nbsp:&nbsp;${element.comment}
            </li>`,
          )
          .join('');
        return CountComments(data);
      });
  };