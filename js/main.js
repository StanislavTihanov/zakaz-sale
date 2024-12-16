"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const buttonsShow = document.querySelectorAll('.discount__wrapper');

    buttonsShow.forEach(buttonWrapper => {
        const buttonHide = buttonWrapper.querySelector('.discount__button');
        const info = buttonWrapper.querySelector('.discount__info');
        const line = buttonWrapper.querySelector('.discount__line');
        const blur = buttonWrapper.querySelector('.discount__image_blur');

        // Проверяем наличие обязательных элементов
        if (!buttonHide || !info || !line) {
            return;
        }

        // Общая функция для добавления и удаления класса 'show'
        const toggleShowClass = (add) => {
            const action = add ? 'add' : 'remove';
            info.classList[action]('show');
            buttonHide.classList[action]('show');
            line.classList[action]('show');
            blur?.classList[action]('show'); // Optional chaining для blur
        };

        // Открытие информации
        buttonWrapper.addEventListener('click', () => toggleShowClass(true));

        // Закрытие информации при клике на кнопку скрытия
        buttonHide.addEventListener('click', event => {
            event.stopPropagation(); // Останавливаем всплытие, чтобы не триггерился клик на родителе
            toggleShowClass(false);
        });
    });
});

