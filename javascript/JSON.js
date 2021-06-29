// JSON
// Javascript Object Notaion
// 프로그래밍언어와 관계없이 널리 사용하는 데이터 포맷
// 따라서 다른 시스템간 다른 프로그래밍언어간 데이터를 교환하기 좋다.(이외 XML, YAML등이 있음)

// 1. Object to JSON
//stringify(obj)
const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: ( )=> {
        console.log(`${name} can jump !!`);
    } 
};

let json = JSON.stringify(rabbit);
console.log(json); // jump 메소드는 출력 되지 않는다.

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); // name, color 값만 나온다

json = JSON.stringify(rabbit, (key, value) => { // 콜백함수로 표현 가능함
    console.log(`key : ${key}, value : ${value}`);
    return value 
});
console.log(json); 

// 2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
let  obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump(); // 에러 발생! 왜냐 obj엔 jump 메소드가 없기때문!

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); 에러 발생! 왜냐 JSON으로 변환될때 데이터 오브젝트가 스트링으로 들어감

obj = JSON.parse(json, (key, value) => { // 콜백함수를 이용해 value를 원하는 값으로 가져올수있음
    return key === 'birthDate' ? new Date() : value;
});
console.log(obj.birthDate.getDate()); // 에러 x !!