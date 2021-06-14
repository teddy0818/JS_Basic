// 출력 값을 맞춰보시오

function aaa() {
    //타이머3
    setTimeout(() => {
        console.log('d');
    }, 0);
    console.log('c');
}
    //타이머1
    setTimeout(() => {
        console.log('a');
        aaa()
    }, 0);

    //타이머2
    setTimeout(() => { 
        aaa();
        console.log('b');
    }, 0);

// 호출스택 :
// 백그라운드 : 
// 테스트큐 : 


// annoymous : 코드를 실행하면 원래 깔려있는 것
// 콘솔 : accbdd