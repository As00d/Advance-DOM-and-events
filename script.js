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
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    element.remove();
    // initially the remove button was not available so people used the parent element and this is called dom traversing

    // element.parentElement.removeChild(element);
  });

// Section : styles, attribute and classes
// the point to note here is the style that is set is an inline styles
// STYLES
element.style.backgroundColor = '#37383d';
element.style.width = '120%';
// now what if we wanted to get the style value say so when we set the property ourself then we get the value but say we want to get the height of the not computed element
console.log(element.style.width);
console.log(element.style.height); // we do not get anything but we can get if we want to get the style

console.log(getComputedStyle(element));
console.log(getComputedStyle(element).color);

// say we wanted to increase the height of this message by 40px
const height = getComputedStyle(element).height;
console.log(`${+height.slice(0, 2) + 100}px`);
element.style.height = `${+height.slice(0, 2) + 40}px`;

document.documentElement.style.setProperty('--color-primary', 'lightblue');

// ATTRIBUTES what are attributes ? attributes are the <img src="test.png"> src is an attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.src); // this is a long url
console.log(logo.alt);
console.log(logo.madeBy); // we get undefined
// what if its an attribute set by you, then how do we get the value

console.log(logo.getAttribute('madeBy'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

// how to set value of these attributes
console.log(logo.setAttribute('alt', 'this is an alternate text'));
// just like we saw with images similar thing happens link , when we simply try to get the attribute it might not give full path we might just need the required short path so in that case also we need to use getAtttibute method

// data attribute - the data attribute plays a very important role, lets see how to first create a data attribute. This data is stored in some memory
console.log(logo.dataset.testVersion);

// Classes
logo.classList.add('a');
logo.classList.remove('a');
logo.classList.toggle('a');
logo.classList.contains('a');
