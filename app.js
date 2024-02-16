const container = document.querySelector(".container");
const pTag = document.querySelector("p");
const body = document.querySelector("body");

const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
];

const randomColor = function () {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.trunc(Math.random() * values.length);
        color += values[randomNumber];
    }
    return color;
};

container.addEventListener("click", () => {
    const deg = Math.trunc(Math.random() * 360);
    const color1 = randomColor();
    const color2 = randomColor();

    const result = `linear-gradient(${deg}deg, ${color1}, ${color2})`;
    pTag.textContent = result;

    body.style.backgroundImage = result;
    console.log(result);
});
