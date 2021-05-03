const computerTag = document.querySelector('#computer');
// 사진의 좌표를 바꿔서 바위,가위,보를 나타냄
// 바위 : 0 0 // 가위 : -142px 0 // 보 : -284px 0 
computerTag.style.background = 'url(./rcp.jpeg) 0 0';

let computerChoice = 'rock';

//객체선언
//객체를 쓰는 이유 : 변수를 그룹화 하기 위해서
//코드만 봐도 이해가 가도록 짜야한다. 주석은 많이 쓰지마라.
const rspCoord = {
    //속성들
    rock : 0, 
    scissors : -142,
    paper : -284
}


// 가위 바위 보 사진을 1초마다 바꿔줌 (좌표값을 바꿔줌)
//setInterval 일정한 시간을 정해서 반복해서 실행하는 함수
const intervalMaker = () => {
    return setInterval(() => {
        if (computerChoice == 'paper') {
            // rspCoord['scissors'] 와 같음. 이런 방식은 변수로 접근가능 함. rspCoord.scissors은 접근불가
            computerChoice = 'scissors';
        } else if (computerChoice == 'scissors') {
            computerChoice = 'rock';
        } else if (computerChoice == 'rock') {
            computerChoice = 'paper';
        }
           
        computerTag.style.background = `url(./rcp.jpeg) ${rspCoord[computerChoice]}px 0`;
        
    }, 50)
}

let intervalId = intervalMaker();

const rockTag = document.querySelector('#rock');
const scissorsTag = document.querySelector('#scissors');
const paperTag = document.querySelector('#paper');


// 가위 :1 바위:0 보:-1
// 나\컴퓨터 가위 바위 보
// 가위     0   1   2
// 바위     -1  0  1
// 보      -2  -1  0
// 0일때 무승부 // 2,-1 일때 승리 // -2, 1 일때 패배
const score = {
    scissors : 1,
    rock : 0,
    paper : -1
}

//이렇게 변경 가능 - 고차함수
// 고차함수를 쓰는 이유 : 고차함수를 쓰지않으면 undefined를 반환
// 함수는 기본적으로 undefined를을 return 한다
const clickBtn = (myChoice) => () => {
        // return () => {} //  화살표 하나 빼려면 이걸추가 하면 됨
        clearInterval(intervalId);
        const computerScore = score[computerChoice];
        const myScore = score[myChoice];
        const diff = myScore - computerScore;
        const scoreTag = document.querySelector('#score');
        let accScore = Number(scoreTag.textContent);
        if(diff == 2 || diff == -1) {
            accScore++;
        } else if(diff == -2 || diff == 1) {
            accScore--;
        }
        scoreTag.textContent = accScore;
        
        setTimeout(() => {
            intervalId = intervalMaker();
        }, 1000);
}

// 고차함수를 쓰지않으면 undefined를 반환
// 함수를 return 해야한다
rockTag.addEventListener('click', clickBtn('rock')) 
scissorsTag.addEventListener('click', clickBtn('scissors'))
paperTag.addEventListener('click', clickBtn('paper'))

