const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleFormSubmint);

function handleFormSubmint(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены!');
  }

  console.log({ Email: email.value, Password: password.value });
  e.currentTarget.reset();
}
