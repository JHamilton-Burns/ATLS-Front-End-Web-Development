// GLOBAL VARIABLES
const horse = document.getElementById('horse');
const x = document.getElementById('howdyButton');

// FUNCTIONS
function cowboyAlert() {
  alert ("I'm a Cowboy!");
}

const followMouse = (object, event) => {
    const width = event.clientX - object.clientWidth / 2;
    const height = event.clientY;
    object.style.left = `${width}px`;
    object.style.top = `${height}px`;
};

// EVENT LISTENERS

// Event Listener #1: Learned button alert here: https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_add_many
x.addEventListener("click", cowboyAlert);


// Event Listener #1: Learned button pop-up listener here: https://github.com/peterrosenthal/ctd-fwd/blob/main/code/lab-1/main.js 
// + https://levelup.gitconnected.com/use-javascript-to-make-an-element-follow-the-cursor-3872307778b4 

document.addEventListener('mousemove', (event) => {
    followMouse(horse, event);
});

