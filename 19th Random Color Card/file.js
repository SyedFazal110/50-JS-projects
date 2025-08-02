const container = document.querySelector('.container');

const hexcode = '0123456789ABCDEF'

for (let i = 0; i < 30; i++) {
    const box = document.createElement('div');
    box.classList.add('color-card');
    let color = '#';
    for (let j = 0; j < 6; j++) {
        color += hexcode[getRandom()];
    }
    console.log(color);
    box.textContent = color;
    box.style.backgroundColor = color;
    container.appendChild(box);
}

function getRandom() {
    return Math.floor(Math.random() * (16));
}

console.log(getRandom());
