document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger_menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const tabItems = document.querySelectorAll('.tab__list li');
    const tabContents = document.querySelectorAll('.tab_content');

    tabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabNumber = tab.getAttribute('data-tab');

            tabItems.forEach(item => item.classList.remove('active_tab'));
            tab.classList.add('active_tab');

            tabContents.forEach(content => {
                if (content.getAttribute('data-content') === tabNumber) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {

    // Open modal on click
    document.querySelectorAll('[data-modal-target]').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const modal = document.querySelector(button.dataset.modalTarget);
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    // Close modal
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
                modal.style.display = "none";
            }
        });
    });

    // Маска для номера телефона
    var phoneInput = document.getElementById("phn_numb");
    var inputMask = new Inputmask("+7 (999) 999-99-99");
    inputMask.mask(phoneInput);

    // Валидация формы
    document.getElementById("applicationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var fullName = document.getElementById("fullName").value.trim();
        var phone = document.getElementById("phn_numb").value.trim();

        if (!fullName || !phone) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        if (!/^[а-яА-ЯёЁ\s]+$/.test(fullName)) {
            alert("Пожалуйста, введите корректное ФИО.");
            return;
        }

        alert("Форма успешно отправлена!");
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = "none";
        });
    });
});
