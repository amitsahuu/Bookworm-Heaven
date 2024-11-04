document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const commentText = commentForm.querySelector('textarea').value;
            if (commentText) {
                const newComment = document.createElement('p');
                newComment.textContent = commentText;
                commentList.appendChild(newComment);
                commentForm.reset();
            }
        });
    }
});
