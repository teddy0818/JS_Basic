const $container = document.querySelector('.image-container');
const $startButton = document.querySelector('.start-button');
const $gameText = document.querySelector('.game-text');
const $playTime = document.querySelector('.play-time');

const tileCount = 16;
// 내가 한 방식
// for(let i=0; i<tileCount; i++) {
//     const $li = document.createElement('li');
//     $container.append($li);
// }
Array(tileCount).fill().forEach((v, i) => {
    const $li = document.createElement('li');
    $li.setAttribute('data-index', i);
    $li.classList.add(`list${i}`);
    $container.appendChild($li);
});