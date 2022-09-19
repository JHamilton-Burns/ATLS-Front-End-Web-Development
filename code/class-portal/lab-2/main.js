// disable form from refreshing the page when you press enter
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
