const commentFormHandler = async function(event) {
    event.preventDefault();
  
    var id = window.location.pathname.length
    var postId = window.location.pathname[id - 1]
    const comment = document.querySelector('textarea[name="comment-body"]').value;
  
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          post_id: postId,
          comment_text: comment
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);