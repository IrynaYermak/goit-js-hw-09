const formDataKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
// const input = document.querySelector('input');
// const textarea = document.querySelector('textarea');

const formData = {
  email: '',
  message: '',
};

const savedMessage = localStorage.getItem(formDataKey);

if (savedMessage) {
  const parsed = JSON.parse(savedMessage);
  form.elements.email.value = parsed.email;
  form.elements.message.value = parsed.message;
  formData.email = parsed.email;
  formData.message = parsed.message;
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(formDataKey, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(formDataKey);
  form.reset();
  formData.email = '';
  formData.message = '';
}
