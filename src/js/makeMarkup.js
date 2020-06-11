import data from '../data.json';
import itemCat from '../templates/itemCat.hbs';

// console.log(data);
// console.log('itemCat', itemCat);

const list = document.querySelector('.js_list');
// console.log(list);

const allLi = data
  .map(item => {
    const age = Math.floor(Math.random() * 10);
    const objAddAge = { ...item, age };
    return itemCat(objAddAge);
  })
  .join('');

list.insertAdjacentHTML('beforeend', allLi);
