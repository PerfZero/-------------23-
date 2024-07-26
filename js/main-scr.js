document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.oparation-block-item');
    
    // Открываем первый элемент при загрузке страницы
    items[0].classList.add('open');
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            // Закрываем все элементы
            items.forEach(i => i.classList.remove('open'));
            // Открываем только кликнутый элемент
            item.classList.add('open');
        });
    });
});