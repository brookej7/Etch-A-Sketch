function createGridOfSquareBoxes(numBoxes) {

    let container = document.querySelector(".container");
    let rows = numBoxes;
    let boxes = numBoxes;
    while (rows > 0) {
        let row = document.createElement("div")
        row.setAttribute("class", "row");

        while(boxes > 0) {
            const box = document.createElement("div")
            box.setAttribute("class", "box");
            row.appendChild(box);
            boxes -= 1;
        }
        
        boxes = numBoxes;
        rows -= 1;
        container.appendChild(row);

    }

}

function updateGridSize() {
    let size = parseInt(prompt("Enter the size for the length of the grid: "));   
    

    while (size > 100 | size <= 0 | Number.isNaN(size)) {

        size = parseInt(prompt("Enter the size for the length of the grid. It must be between 1 - 100: "));

    }

    const sqaures = document.querySelectorAll(".row");
    sqaures.forEach((square) => {
        square.remove();
    });
    createGridOfSquareBoxes(size);
    addHoverEventToSquares();
}

function addHoverEventToSquares() {

    const sqaures = document.querySelectorAll(".box");

    sqaures.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            randomiseSquareColour(square);
        });
    });
}

function addClickEventToButton() {

    const button = document.querySelector("#updateSize");

    button.addEventListener("click", updateGridSize);

}

function randomiseSquareColour(square) {

    let currentColour = square.style.background;

    if (currentColour == "") {
        let red = Math.floor(Math.random() * 256) + 1;
        let green = Math.floor(Math.random() * 256) + 1;
        let blue= Math.floor(Math.random() * 256) + 1;

        let backgroundColour = `background: rgb(${red},${green},${blue}); opacity: 0.1;`;
        square.setAttribute("style", backgroundColour);

    } else {

        let currentOpacity = parseFloat(square.style.opacity)

        if (currentOpacity == 1) {
            ;
        } else {
            let newOpacity = currentOpacity + 0.1;
            let newStyle= `background:${currentColour}; opacity:${newOpacity}`;
            square.setAttribute("style", newStyle);
        }
    }

}

createGridOfSquareBoxes(16);
addHoverEventToSquares();
addClickEventToButton();
