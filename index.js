console.log('Drag and Drog Project');

const imgBox = document.querySelector('.imgBox');

const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log("Dragstart has triggered");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' hide';
    }, 0);


})

imgBox.addEventListener('dragend', (e) => {
    console.log("Dragend has triggered");
    e.target.className = 'imgBox';
})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (a) => {
        console.log("Dragover has triggered");
        a.preventDefault();
    })

    whiteBox.addEventListener('dragenter', () => {
        console.log("Dragenter has triggered");
    })

    whiteBox.addEventListener('dragleave', () => {
        console.log("Dragleave has triggered");
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop has triggered");
        e.target.append(imgBox);
    })

}