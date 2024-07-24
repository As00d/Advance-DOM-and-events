'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});










// NOTES 

// SELECTING ELEMENT IN DOM
// How would you select the html document ?
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
// to select any other element 
const header = document.querySelector('.header');
// to select multiple elements we should use querySelectorALL and it will return nodeList
const section = document.querySelectorAll('.section');
console.log(section);

document.getElementById('section--1');
// This method basically returns an html collection that is different from nodeList as html collection is so called life collection. It means if there is any change in dom the value changes automatically
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// This also returns live html collection
console.log(document.getElementsByClassName('modal__form'));

// CREATING AND INSERTING ELEMENTS IN DOM
// .insertAdjacentElement
const element = document.createElement('div');
element.classList.add('cookie-message');
// element.textContent = 'hello there we are a div'
element.innerHTML = `We use cookie for improved experience <button class='btn--close-cookie btn'> Click Okay <button>`;

// we can also append as the last child ie append - when we add this functionality we were only able to add it at the end and the prepend went away? why this happenned we can not create multiple copies of same element. In order to achieve the same we need to create a copy and then add. Lets see how

// header.prepend(element);
// header.append(element.cloneNode(true))

header.append(element);

// DELETING THE ELEMENT
// lets delete the element when someone press okay
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  element.remove();
  // initially the remove button was not available so people used the parent element and this is called dom traversing

  // element.parentElement.removeChild(element);
})
