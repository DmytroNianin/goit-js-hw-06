const inputRef = document.querySelector('#validation-input');

const validSimbolLength = Number(inputRef.dataset.length);

const onInputBlurAdd = e => {
  if (e.currentTarget.value.length === validSimbolLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', onInputBlurAdd);
