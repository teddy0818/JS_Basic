// 구조분해 할당, 객체안의 속성이름과 변수명이 같을 때 줄여서 편하게 쓸 수 있음.
// createElement 는 구조분해할당 시 안돌아감..
const { body } = document; // const body = document.body;랑 같다
const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = 'O';
let count = 0;

/*
rows = [
    [$td, $td, $td],
    [$td, $td, $td],
    [$td, $td, $td]
]
*/


const checkWinner = (target) => {
    //foreach 쓰면 좋은점 : index를 매길 수 있음
    // let rowIndex;
    let rowIndex = target.parentNode.rowIndex; // target = tr
    let cellIndex = target.cellIndex; // target = td

    console.log(turn);
    
    // target의 index 구하기
    // rows.forEach((row, ri) => {
    //     row.forEach((cell, ci) => {
    //         if(turn === cell.textContent) {
    //             rowIndex = ri;
    //             cellIndex = ci;
    //         }
    //     })
    // }) 

    //승리 조건
    let hasWinner = false;


    //승리 조건 - 가로 완성
    if(rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
        ) {
            hasWinner = true;
        }
    
    //승리 조건 - 세로 완성
    if(rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
            ) {
                hasWinner = true;
            }
            
    //승리 조건 - 대각선 완성 1
    if(rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
            ) {
                hasWinner = true;
            }

    //승리 조건 - 대각선 완성 2
    if(rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
            ) {
                hasWinner = true;
            }  

    return hasWinner;
}

const checkWinnerAndDrop = (target) => {
        //승부 판단하기
        if(checkWinner(target)) {
            $result.textContent = `${turn} 님의 승리!!`;
            $table.removeEventListener('click',callback);
        }  

        //무승부
        const draw = rows.flat().every((cell) => cell.textContent);
        if(!checkWinner(target) && draw) {
            $result.textContent = `무승부!!`
        }

        //턴 넘기기
        turn = turn == 'O' ? 'X' : 'O';
}

let clickable = true;
const callback = (event) => {
    if (!clickable) return;

    //event.stopPropagation(); // 이벤트 버블링 방지
    // 칸에 글자가 있나?
    if(event.target.textContent) return; // event.target : td
    event.target.textContent = turn;
    //event.currentTarget : table
    checkWinnerAndDrop(event.target);

    // 컴퓨터 대전 기능 추가
    if(turn === 'X') {
        clickable = false; 
            setTimeout(() => {
            // 컴퓨터 턴일땐 클릭 못하게
            // filter: 조건에 해당하는 애들만 선택해줌
            const emptyCells = rows.flat().filter((v) => !v.textContent); 
            const randomCell  = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            randomCell.textContent = 'X';
            checkWinnerAndDrop(event.target);
            clickable = true;
        }, 1000)
        }
    
}

//반복문은 최대한 짧게 쓰는게 편하다
for(let i=0; i<3; i++) {
    const $tr = document.createElement('tr');
    const cells = [];
    for(let z=0; z<3; z++) {
        const $td = document.createElement('td');
        cells.push($td);
        // $td.addEventListener('click', callback); - 이벤트 버블로 대체
        $tr.append($td); 
    }
    rows.push(cells);
    $table.append($tr); 
}

// 이벤트는 table에 달았는데 클릭은 td가 된다?
// td 클릭시 - td -> tr -> table -> body 함수 다 실행됨
// 이벤트가 부모태그 따라서 방울방울 올라간다 : 이벤트 버블링!!
// 상반되는 개념으로 이벤트 캡처링이 있는데, 주로 팝업 기능 쓸 때 씀 - addEventListener(true)
$table.addEventListener('click', callback);
body.append($table); 
body.append($result);
