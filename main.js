/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
const palette = document.querySelectorAll('.palette-color')
const brush = document.querySelector('.current-brush')
const canvas = document.querySelector('.canvas')
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}
const boxSquares = document.querySelectorAll('.square')
let mouseDown = false;
// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)




/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.


for (const square of boxSquares ){
  square.addEventListener('click', (event)=>{
    const px = event.target
    px.classList= brush.classList
    px.style.border='0px'
    px.classList.add('square')
  })
}


for (const colors of palette){
  colors.addEventListener('click', ()=>{
    brush.classList=colors.classList
  })
}



for (const square of boxSquares ){
  square.addEventListener('mouseenter', (event)=>{
    if(mouseDown){
      const px = event.target
      px.classList= brush.classList
      px.style.border ='0px'
      px.classList.add('square')
  }
})
}
document.body.addEventListener('mousedown', ()=>{
  mouseDown=true;
})
document.body.addEventListener('mouseup', ()=>{
  mouseDown=false;
})
/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
