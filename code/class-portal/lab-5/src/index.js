// import _ from 'lodash';

// import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ width: 2000 , height: 1000});
document.body.appendChild(app.view);

// holder to store the fruits
const fruits = [];

const totalPears = 30;

for (let i = 0; i < totalPears; i++) {
    // create a new Sprite that uses the image name that we just generated as its source
    const pear = PIXI.Sprite.from('Images/pear.png');

    // set the anchor point so the texture is centered on the sprite
    pear.anchor.set(0.5);

    // set a random scale for the pear - no point them all being the same size!
    pear.scale.set(0.8 + Math.random() * 0.3);

    // finally lets set the pear to be at a random position..
    pear.x = Math.random() * app.screen.width;
    pear.y = Math.random() * app.screen.height;

    pear.tint = Math.random() * 0xFFFFFF;

    // create some extra properties that will control movement :
    // create a random direction in radians. This is a number between 0 and PI*2 which is the equivalent of 0 - 360 degrees
    pear.direction = Math.random() * Math.PI * 2;

    // this number will be used to modify the direction of the pear over time
    pear.turningSpeed = Math.random() - 0.8;

    // create a random speed for the pear between 2 - 4
    pear.speed = 2 + Math.random() * 2;

    // finally we push the pear into the fruits array so it it can be easily accessed later
    fruits.push(pear);

    app.stage.addChild(pear);
}

// create a bounding box for the little pears
const pearBoundsPadding = 100;
const pearBounds = new PIXI.Rectangle(-pearBoundsPadding,
    -pearBoundsPadding,
    app.screen.width + pearBoundsPadding * 2,
    app.screen.height + pearBoundsPadding * 2);

app.ticker.add(() => {
    // iterate through the pears and update their position
    for (let i = 0; i < fruits.length; i++) {
        const pear = fruits[i];
        pear.direction += pear.turningSpeed * 0.01;
        pear.x += Math.sin(pear.direction) * pear.speed;
        pear.y += Math.cos(pear.direction) * pear.speed;
        pear.rotation = -pear.direction - Math.PI / 2;

        // wrap the pears by testing their bounds...
        if (pear.x < pearBounds.x) {
            pear.x += pearBounds.width;
        } else if (pear.x > pearBounds.x + pearBounds.width) {
            pear.x -= pearBounds.width;
        }

        if (pear.y < pearBounds.y) {
            pear.y += pearBounds.height;
        } else if (pear.y > pearBounds.y + pearBounds.height) {
            pear.y -= pearBounds.height;
        }
    }
});
