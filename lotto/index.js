// 메서드가 연결되어 있는것 - 메서드 체인
// fill, map 함수 사용
// const candidate = Array(45).fill().map((v, i) => {return i+1}); // 함수에 중괄호가 있으면 return 붙여줘야함
const candidate = Array(45).fill().map((v, i) => i+1); // 1~45
const shuffle = [];
while(candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
}
console.log(shuffle);

const winBalls = shuffle.splice(0, 6); // 0~5
const bonusBall = shuffle.splice(6, 1) // 6
console.log(winBalls);
console.log(bonusBall);

const resultTag = document.querySelector('#result');
/*
for (let i=0; i<6; i++) { // 클로저 문제는 let 나오면서 없어짐
    setTimeout(() => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        colorize(winBalls[i], ball);
        ball.textContent = winBalls[i];
        resultTag.appendChild(ball);
    }, 1000 * (i + 1))
}
*/
winBalls.forEach((num, index) => {
    setTimeout(() => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        colorize(num, ball);
        ball.textContent = num;
        resultTag.appendChild(ball);
    }, 1000 * (index + 1))
});

setTimeout(() => {
    const bonusTag = document.querySelector('.bonus');
    const ball = document.createElement('div');
    ball.className = 'ball';
    colorize(bonusBall[0], ball);
    ball.textContent = bonusBall[0];
    bonusTag.appendChild(ball);
}, 7000)


function colorize(num, tag) {
    if(num <= 10) {
        tag.style.backgroundColor = 'pink';
    } else if(num <= 20) {
        tag.style.backgroundColor = 'orange';
    } else if(num <= 30) {
        tag.style.backgroundColor = 'yellow';
    } else if(num <= 40) {
        tag.style.backgroundColor = 'skyblue';
    } else {
        tag.style.backgroundColor = 'lightgreen';
    }
}