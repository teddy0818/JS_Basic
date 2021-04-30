const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');


// 정답 값 구하기
// 여태까지 2중 배열로 했었는데 이런 방법이 있구나!
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let numbers = [];
for (let i=0; i<=9; i++) {
    numbers.push(i);
}
let answer = [];
for(let i=0; i<=3; i++) {
    // const index = Math.floor(Math.random() * (10-n));
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1) // arr.splice(a, b) : a에서 b(갯수)만큼 배열에서 삭제
}
console.log('answer : ' + answer);


// count가 10번 초과 시 게임오버!
let count = 0;
check.addEventListener('click', () => {
    count++;

    let s = 0;
    let b = 0;

    const value = input.value;
    if(value && value.length === 4) {
        if(value === answer.join('')) { // 배열은 객체라서 비교불가, answer(배열)을 문자열로 만들어주자
            console.log('같다');
            logs.appendChild(document.createTextNode('홈런!!'));
        } else {
            console.log('다르다');
            for(const [index, number] of answer.entries()) {
                for(const [index2, number2] of input.value.split('').entries()) {
                    if(number == number2) {
                        if(index == index2) {
                            s++;
                        } else {
                            b++;
                        }
                    } 
                }
            }

            //기존 나의 방식 (로직은 같음 문법만 조금 달라졌을뿐)
            /*
            for(let i=0; i<value.length; i++) {
                for(let z=0; z<value. length; z++) {
                    if(value[i] == answer[z]) {
                        if(i == z) {
                            s++
                        } else {
                            b++;
                        }
                    }
                }
            }
            */

            // logs.appendChild(document.createTextNode(s + ' strike  ' + b + ' ball  ' + 4-s-b + ' out'));
            // const message = document.createTextNode(`${input.value} : ${s} strike  ${b} ball  ${4-s-b} out`)
            // logs.appendChild(message);
            // logs.appendChild(document.createElement('br')); // 줄바꿈 추가

            // append 로 한방에 처리 가능 
            logs.append(`${input.value} : ${s} strike  ${b} ball  ${4-s-b} out`, document.createElement('br'));

            if(count > 10) {
                logs.appendChild(document.createTextNode(`GAME OVER : ${answer.join('')}`));
                alert('GAME OVER');
            }

        }
    }
    
});


