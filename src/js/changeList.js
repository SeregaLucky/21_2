import localStorage from '../js/localStorage';
// console.log(localStorage);

const input = document.querySelector('.js_input');
const list = document.querySelector('.js_list');

const isChecked = localStorage.load('isChecked');
// console.log(isChecked);

if (isChecked) {
  list.classList.add('active');
  input.checked = isChecked;
}

input.addEventListener('change', handleChangeInput);

function handleChangeInput(e) {
  // console.log(e.target);
  // console.log(e.target.checked);

  if (e.target.checked) {
    list.classList.add('active');
    localStorage.save('isChecked', true);
    return;
  }

  list.classList.remove('active');
  localStorage.save('isChecked', false);
}

//
//

// localStorage.setItem('name', '111');

// const name = localStorage.getItem('name');
// console.log('name --- ', name);

//
//

// const num = 10;
// const strNum = JSON.stringify(num);
// console.log(typeof strNum);

//
//

// const arrNum = [10, 20];
// const strArrNum = JSON.stringify(arrNum);
// console.log(strArrNum);
// console.log(typeof strArrNum);

//
//

// const objNum = { age: 5 };
// const strObjNum = JSON.stringify(objNum);
// console.log(strObjNum);
// console.log(typeof strObjNum);

//
//

// const strNum = '333';
// const num = JSON.parse(strNum);
// console.log(num);
// console.log(typeof num);

//
//

// const strObj = '{"age": 4}';
// const obj = JSON.parse(strObj);
// console.log(obj);
// console.log(typeof obj);

//
//
// Плохо
// const strObj = { age: 4 };

// localStorage.setItem('obj1', strObj);

// const getObj = localStorage.getItem('obj1');
// console.log('getObj', getObj);

// const obj = JSON.parse(getObj);
// console.log(obj);

// console.log(111);

//
//
// Норм
// const strObj = { age: 4 };

// localStorage.setItem('obj1', strObj);

// try {
//   const getObj = localStorage.getItem('obj1');
//   console.log('getObj', getObj);

//   const obj = JSON.parse(getObj);
//   console.log(obj);
// } catch (err) {
//   console.error('ERR', err);
// } finally {
//   console.log('finally');
// }

// console.log(111);

//
//
// Хорошо
// const strObj = { age: 4 };

// localStorage.setItem('obj1', JSON.stringify(strObj));

// const getObj = localStorage.getItem('obj1');
// console.log(getObj);

// const obj = JSON.parse(getObj);
// console.log(obj);
// console.log(111);
