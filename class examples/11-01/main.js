import Title from './title.js';

const title = new Title('Jessie');

document.body.innerHTML += title.render();

// document.body.innerHTML += title('Not Jessie');