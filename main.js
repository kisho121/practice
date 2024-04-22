/*let store = [];

// Load comments from localStorage when the page loads
window.addEventListener('load', function() {
    let storedComments = localStorage.getItem('comments');
    if (storedComments) {
        store = JSON.parse(storedComments);
        updateStore();
    }
});

/*function comment_button() {
    let userName = document.getElementById('username').value;
    let comment = document.getElementById("inputComment").value;

    if (userName.trim() === '' || comment.trim() === '') {
        alert("Please Enter the username and comment");
        return;
    }
    let commentObj = { userName: userName, comment: comment };

    store.push(commentObj);
    updateStore();

    // Save updated comments to localStorage
    localStorage.setItem('comments', JSON.stringify(store));
}

function updateStore() {
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    store.forEach((comment) => {
        let commentItem = document.createElement('div');
        commentItem.textContent = `${comment.userName}: ${comment.comment}`;
        resultElement.appendChild(commentItem);
    })
}
*/
