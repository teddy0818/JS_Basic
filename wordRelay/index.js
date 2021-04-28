let btnWord = document.querySelector(".btnWord");
// const arr = []; 이렇게도 가능
const arr = new Array();
arr.push(document.querySelector(".displayWord").textContent);

btnWord.addEventListener("click", () => {
  let displayWord = document.querySelector(".displayWord");
  let inputWord = document.querySelector(".inputWord");

  let displayWordText = displayWord.innerText; // textContent도 가능함. input만 value
  //displayWordText[displayWordText.length-1] 이렇게도 가져올수있음
  let displayWordTextLast = displayWordText.substr(
    displayWordText.length - 1,
    1
  );
  let inputWordText = inputWord.value;
  // inputWordText[0] 이렇게도 가져올수있음
  let inputWordTextLast = inputWordText.substr(0, 1);

  if (inputWordText == null || inputWordText == "") {
    // 입력값이 없을때
    alert("값을 입력해주세여");
    return;
  } else {
    // 입력값이 있을때

    // 중복된 값 있으면 취소
    if (arr.includes(inputWordText)) {
      alert("중복입니다");
      return;
    }

    if (displayWordTextLast == inputWordTextLast) {
      // 맞았을때
      displayWord.innerHTML = inputWordText;
      inputWord.value = "";
      inputWord.focus();
      arr.push(inputWordText);
    } else {
      //틀렸을때
      alert("땡");
      inputWord.value = "";
      inputWord.focus();
      return;
    }
  }
});

/*
 - 변수는 스코프를 벗어나면 메모리에서 사라진다 
 - 변수는 사용하는곳에서 가까운 곳에 만들어 놓는게 좋다
 - 변수명을 줄이는 건 그렇게 좋지 않다. 차라리 길게 적어도 명확하게 알 수 있는 변수명이 좋다
*/
