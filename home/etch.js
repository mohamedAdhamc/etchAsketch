const sketchContainer = document.querySelector('#sketch-container');
const colorSelector = document.querySelector('#color-selector');
let drag = false;
sketchContainer.addEventListener('mousedown', () => { drag = true; })
sketchContainer.addEventListener('mouseup', () => { drag = false; })
sketchContainer.addEventListener('mouseleave', () => { drag = false; })

//add 16x16 grid
function makeGrid (cellNumber, coloreo) {
    //our size is 16 * 20 px
    const size = 16 * 20;
    const sizeOfCell = size/cellNumber;
    let setUpString = "";
    for (let i = 0; i<cellNumber; ++i)
        setUpString += `${sizeOfCell}px `;
    sketchContainer.style.gridTemplateColumns = setUpString;
    sketchContainer.style.gridTemplateRows = setUpString;
    sketchContainer.innerHTML = ''
    //add divs to it
    for (let i = 0; i<cellNumber; ++i){
        for(let j = 0; j<cellNumber; ++j){
            const divElement = document.createElement('div');
            divElement.addEventListener('mouseover', (e)=>{
                if (drag)
                    e.target.style.background = coloreo;
                console.log(coloreo);
            });
            sketchContainer.appendChild(divElement);
        }
    }
}

const slider = document.querySelector('#slider');
slider.addEventListener('click', ()=>{
    let written = document.querySelector('#slider').value;
    makeGrid(written, colorSelector.value);
});
colorSelector.addEventListener('click', ()=>{
    makeGrid(document.querySelector('#slider').value, colorSelector.value);
})

//-- INIT
makeGrid(70, colorSelector.value);
