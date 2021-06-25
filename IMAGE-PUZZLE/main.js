const $container = document.querySelector('.image-container');
const $startButton = document.querySelector('.start-button');
const $gameText = document.querySelector('.game-text');
const $playTime = document.querySelector('.play-time');

const tileCount = 16;
let tiles = [];
const dragged = {
    el: null,
    class: null,
    index: null
} 

setGame();

function setGame() {
    $container.innerHTML = '';
    tiles = createImageTiles();
    tiles.forEach(tile=>$container.appendChild(tile))
    setTimeout(() => {
        $container.innerHTML = '';
        shuffle(tiles).forEach(tile=>$container.appendChild(tile)) // 인자가 하나인경우 중괄호 생략가능
    }, 3000);
}


function createImageTiles() {
    const tempArray = [];
    Array(tileCount).fill().forEach((v, i) => {
        const $li = document.createElement('li');
        $li.setAttribute('data-index', i);
        $li.setAttribute('draggable', true); // 드래그 되게하기
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

//event
$container.addEventListener('dragstart', e => {
    const obj = e.target;
    dragged.el = obj;
    dragged.class = obj.className;
    // object를 배열로 만들어줌
    dragged.index = [...obj.parentNode.children].indexOf(obj);
    // console.log(dragged.index);
});
$container.addEventListener('dragover', e => {
    e.preventDefault(); // 놓았을때 drop 이 실행되도록 함
    
});
$container.addEventListener('drop', e => {
    const obj = e.target;
    if(obj.className !== dragged.className) {
        let originPrice;
        let isLast = false;

        if(dragged.el.nextSibling) {
            originPrice = dragged.el.nextSibling;
        } else {
            originPrice = dragged.el.previousSibling
            isLast = true;
        }

        const droppedIndex = [...obj.parentNode.children].indexOf(obj);
        // 순서 파악후 드래그 되게 만듬
        dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el);
        isLast ? originPrice.after(obj) : originPrice.before(obj);
    }
});