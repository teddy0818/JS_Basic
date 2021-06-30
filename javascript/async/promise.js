'use strict';

// Promise 는 비동기를 사용할 때 유용하게 쓰일 수 있는 Object 이다.
// 핵심 : 1. 상태(state) 2. 정보 제공자(Producer)와 정보 소비자(Consumer)의 차이점
// State : pending -> 1. fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files)
    console.log('doing something... '); // promise 는 만드는 순간 바로 실행된다. 고로 주의해야한다.
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('에러!')); // Uncaught (in promise) Error: 에러!
    }, 2000)
})

// 2. Consumer (then, catch, finally)
promise
    .then(value => { // resolve가 동작시 실행 (resolve에서 값이 넘어옴)
        console.log(value);
    })
    .catch(error => { // reject 동작 시 실행  
        console.log(error);
    })
    .finally(()=> {
        console.log('finally'); // 동작 성공여부와 상관없이 무조건 실행
    })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => new Promise((resolve, reject) => 
        setTimeout(() => resolve(num - 1), 1000)
    )) // then 에 Promise 도 사용 가능
    .then(num => console.log(num));

    // 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = hen =>
new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen() //
.then(getEgg)
.then(cook)
.then(console.log)
.catch(console.log);