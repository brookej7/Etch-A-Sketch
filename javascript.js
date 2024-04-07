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

function listenForHoverOnSquares() {

    const sqaures = document.querySelectorAll(".box");
    console.log("Enter")

    sqaures.forEach((square) => {
        square.addEventListener("mousemove", () => {
            console.log("WTFs")
            updateSquareColourOnHover(square);
        });
    });
}

createGridOfSquareBoxes(16);
listenForHoverOnSquares();