//Напиши скрипт, который для каждого элемента массива ingredients 
//создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().
//В HTML есть пустой список ul#ingredients.
//В JS есть массив строк.  Репета занятие №13 38 минута
//const body = document.querySelector('body');
//const ul = document.createElement('ul');
//const ingredients = [
 // 'Картошка',
 // 'Грибы',
 // 'Чеснок',
 // 'Помидоры',
 // 'Зелень',
 // 'Приправы',
//];

//ul.append(...ingredients);

//body.insertAdjacentHTML('afterend', ingredients);
"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
  parent.append(...items)
});

console.log(foodIngredients);