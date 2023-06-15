function createGrid() {
    const container = document.querySelector('.container')
    console.log(container)
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div')
        square.classList.add('grid-section')
        container.appendChild(square)
        console.log('Hello world')
    }
}

function draw(event) {
    const square = event.target
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    square.style.backgroundColor = '#' + randomColor
}

createGrid()

const square = document.querySelectorAll('.grid-section')
square.forEach((square) => {
    square.addEventListener('mouseover', draw, false)
})