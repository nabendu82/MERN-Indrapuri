//Grab Single Element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

//Grab multiple Elements
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));
// console.log([23, 45, 67]);

// nodeItems.forEach(item => console.log(item))

// for(let i=0; i<colItems.length; i++){
//     console.log(colItems[i])
// }

//DOM Manipulation
const ul = document.querySelector('.items');
// ul.remove();
const btn = document.querySelector('.btn');

//Event Listener
btn.addEventListener('click', e => {
    e.preventDefault()
    ul.firstElementChild.textContent = 'HTML';
    ul.children[1].innerText = 'CSS';
    ul.lastElementChild.innerHTML = '<h4>JavaScript</h4><p>Language of web</p>'
    btn.style.backgroundColor = 'blue';
    btn.style.textTransform = 'uppercase';
})