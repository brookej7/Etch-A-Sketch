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

function updateSquareColourOnHover(square) {

    square.setAttribute("class", "box coloured");
    
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
        square.addEventListener("mousemove", () => {
            updateSquareColourOnHover(square);
        });
    });
}

function addClickEventToButton() {

    const button = document.querySelector("#updateSize");

    button.addEventListener("click", updateGridSize);

}

createGridOfSquareBoxes(16);
addHoverEventToSquares();
addClickEventToButton();
