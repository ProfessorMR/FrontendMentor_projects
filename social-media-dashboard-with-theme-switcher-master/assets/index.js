const toggleBtn = document.querySelector('.toggle-btn');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active-btn');
    body.classList.toggle('theme-light');
});