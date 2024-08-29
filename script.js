// Like button functionality
function updateLikes(button) {
    const likeCountSpan = button.nextElementSibling;
    let currentLikes = parseInt(likeCountSpan.textContent.split(": ")[1]);
    likeCountSpan.textContent = `Likes: ${currentLikes + 1}`;
}

// Dark/Light mode toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Switch to Light Mode';
    } else {
        modeToggle.textContent = 'Switch to Dark Mode';
    }
});


let pageNo=document.querySelector('.pagenumber');

pageNo.textContent='page no - 1';
