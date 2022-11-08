const refs = {
  input: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

const rename = event => {
  refs.input.value.length === 0
    ? (refs.spanEl.textContent = 'Anonymous')
    : (refs.spanEl.textContent = event.currentTarget.value);
};

refs.input.addEventListener('input', rename);
