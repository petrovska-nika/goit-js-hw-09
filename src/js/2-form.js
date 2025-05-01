const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Заповнення форми зі збережених даних
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email;
  form.message.value = formData.message;
}

// Збереження змін у форму
form.addEventListener('input', () => {
  formData.email = form.email.value.trim();
  formData.message = form.message.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Відправка форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});
