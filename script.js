const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex-col');
    menu.classList.toggle('space-y-4');
    menu.classList.toggle('mt-4');
});

//