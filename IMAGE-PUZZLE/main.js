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

let tiles = [];
tiles = createImageTiles();
shuffle(tiles).forEach(tile=>$container.appendChild(tile)) // 인자가 하나인경우 중괄호 생략가능

function createImageTiles() {
    const tempArray = [];
    Array(tileCount).fill().forEach((v, i) => {
        const $li = document.createElement('li');
        $li.setAttribute('data-index', i);
        $li.classList.add(`list${i}`);
        tempArray.push($li);
        // $container.appendChild($li);
    });
    return tempArray;
}

function shuffle(array){
    let index = array.length - 1;
    while(index > 0) {
        const randomIndex = Math.floor(Math.random()*(index+1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
        index--;
    }
    return array;

}