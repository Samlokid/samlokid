
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleMode');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
    console.log("Welcome to Santiago's Y2K Portfolio with CRT vibes!");
});
