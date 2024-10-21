const formData = {
    email: "",
    message: ""
};

// При загрузке страницы проверяем наличие данных в локальном хранилище
window.addEventListener('load', () => {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
        formData.email = savedData.email;
        formData.message = savedData.message;
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }
});

// Делегирование событий для отслеживания ввода
document.querySelector('.feedback_form').addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Отправка формы
document.querySelector('.feedback_form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
    Object.keys(formData).forEach(key => formData[key] = "");
});
