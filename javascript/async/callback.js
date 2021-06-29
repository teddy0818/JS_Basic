'use strict';

// 콜백함수란 ? 달해준 함수를 나중에 불러오는것
// JS 는 기본적으로 동기이다
console.log('1');
console.log('2');
console.log('3');
// 1,2,3 : 위에서 밑으로 순서대로 실행된다

// 하지만, 비동기일때가 있다 ex) setTimeout()
console.log('1');
setTimeout(() => { // setTimeout()는 콜백함수
    console.log('2');
}, 1000);
console.log('3');
// 1,3,2 : 순서대로 실행되지 않는다


//Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell Example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy' )
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
        if(user === 'ellie') {
            onSuccess({name : 'ellie', role : 'admin'});
        } else {
            onError(new Error('no access'));
        }
        }, 1000)
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

//콜백지옥의 문제점
// 1. 가독성이 안좋음
// 2. 디버깅, 문제분석, 유지보수가 힘듬
