document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.post-actions button:first-child');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You liked this post!');
        });
    });

    const commentButtons = document.querySelectorAll('.post-actions button:nth-child(2)');
    
    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You commented on this post!');
        });
    });

    const shareButtons = document.querySelectorAll('.post-actions button:nth-child(3)');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You shared this post!');
        });
    });
});
