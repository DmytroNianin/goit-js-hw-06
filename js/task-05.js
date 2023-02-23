const refs = {
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

const rename = e => {
  refs.inputEl.value.length === 0
    ? (refs.spanEl.textContent = 'Anonimus')
    : (refs.spanEl.textContent = e.currentTarget.value);
};

refs.inputEl.addEventListener('input', rename);
