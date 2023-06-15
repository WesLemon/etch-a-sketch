function createGrid() {
    for (let i = 0; i < numSquares; i++) {
        let square = document.createElement('div')
        square.classList.add('grid-section')
        square.style.width = squareSize + 'px'
        square.style.height = squareSize + 'px'
        container.appendChild(square)
    }
    const square = document.querySelectorAll('.grid-section')
    square.forEach((square) => {
        square.addEventListener('mouseover', draw)
    })
}

function draw(event) {
    const square = event.target
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    square.style.backgroundColor = '#' + randomColor
}

function changeSize() {
    let valid = false
    let size = 0
    while(!valid) {
        size = prompt('What size grid would you like? Maximum 100x100')
        if(size <= 100 && size > 0) {
            valid = true
        }

    }
    console.log('Changed size')
    let containerSize = container.offsetWidth 
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    squareSize = (containerSize / size) - 2 
    numSquares = size*size
    createGrid()
}

function resetGrid() {
    console.log('Reset grid')
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    createGrid()
}

const container = document.querySelector('.container')
let squareSize = 48
let numSquares = 256

createGrid()

const changeButton = document.querySelector('.changeSize')
changeButton.addEventListener('click', changeSize)

const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetGrid)