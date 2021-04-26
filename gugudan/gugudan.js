// .(점)은 소유를 의미 ()은 동작실행을 의미

// <스스로 짠 코드>
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let btn_calc = document.querySelector('#btn_calc');
// let result = document.querySelector('#result');

// function calc() {
//     if(input1.value.length <= 0) {
//         alert('첫번째 값을 입력해주십시오');
//         return;
//     }

//     if(input2.value.length <= 0) {
//         alert('두번째 값을 입력해주십시오');
//         return;
//     }

//     let num1 = input1.value;
//     let num2 = input2.value;
//     let resultNum = num1 * num2;
//     result.innerHTML = resultNum;

// }

// <여기서부터는 강의 결과>
document.querySelector("#btn_calc").addEventListener("click", () => {
  // 변수 선언하면 컴퓨터 메모리에 저장됨
  // 변수는 실제 사용 될 곳에 가까이 붙여 놓는게 가장 좋고, 중복을 없애는 게 좋다
  const a = document.querySelector("#input1").value;
  const b = document.querySelector("#input2").value;
  const r = document.querySelector("#result");

  // a 값이 있으면 true 없으면 false
  if (a) {
    if (b) {
      // span 일땐 textContent 사용
      r.textContent = a * b;
    } else {
      r.textContent = "두번째 값을 입력해주세요";
    }
  } else {
    r.textContent = "첫번째 값을 입력해주세요";
  }
});
