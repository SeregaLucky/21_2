import debounce from 'lodash.debounce';
import localStorage from './localStorage';
// console.log(localStorage);
// console.log('debounce', debounce);

const textarea = document.querySelector('.js_textarea');

const valueTextarea = localStorage.load('textarea');
// console.log(valueTextarea);

if (valueTextarea) {
  textarea.value = valueTextarea;
}

textarea.addEventListener('input', debounce(handleInput, 300));

function handleInput(e) {
  // console.dir(e.target);
  // console.log(e.target.value);
  const value = e.target.value;

  localStorage.save('textarea', value);
}
