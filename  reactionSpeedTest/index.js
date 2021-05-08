const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
const $recentResult = document.querySelector('#recentResult');
let records = [];
let sumTime = 0;
let averageTime = 0;
let clickCount = 0; // ready 일때 두 번 클릭 시 경고창 띄우기
let startTime;
let endTime;
let calcTime;

$screen.addEventListener('click', () => {

    if($screen.className == 'waiting') {
        $screen.textContent = '초록색이 뜨면 클릭하세요';
        calcTime = setTimeout(() => {
            $screen.className = 'now';
            $screen.textContent = '클릭클릭클릭!!!'
            startTime = new Date();
        }, (Math.random() * 3000) + 1000)
        $screen.className = 'ready';
    } else if($screen.className == 'ready') {
        clearTimeout(calcTime);
        alert('성급하셨습니다!');
        $screen.className = 'waiting'
        $screen.textContent = '초록색이 뜨면 클릭하세요';
    } else if($screen.className == 'now') {
        clickCount = 0;
        endTime = new Date();
        let resultTime = endTime - startTime;
        alert(`${resultTime}ms 걸리셨습니다`);
        $recentResult.textContent = `최근 기록 : ${resultTime} ms`;
        records.push(resultTime);
        records.forEach(function(item, index) {
            sumTime += item;
        })
        averageTime = Math.floor(sumTime / records.length);
        $result.textContent = `평균 기록 : ${averageTime} ms`;
        $screen.className = 'waiting';
        $screen.textContent = '클릭해서 시작하세요';
    }
})