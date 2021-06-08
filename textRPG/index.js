const $startScreen = document.querySelector("#start-screen");
const $gameMenu = document.querySelector("#game-menu");
const $battleMenu = document.querySelector("#battle-menu");
const $heroName = document.querySelector("#hero-name");
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');

// hero 객체
const hero = {
    name: '',
    lev: 1,
    maxHp: 100,
    hp: 100,
    xp: 0, // 레벨 x 15 = 레벨업하는 경험치 기준  
    att: 10,
    attack(monster) { // function 메소드 생략가능
      //this : 자기자신을 가르키는 것
      // 화살표 함수일 땐 this가 window 객체가 되버린다!!
      monster.hp -= this.att,
      this.hp -= monster.att
    },
    heal(monster) {
      this.hp += 20;
      this.hp -= monster.att;
    }
}

// 몬스터 객체
let monster = null;

//몬스터 클래스
class Monster {
  constructor(name, hp, att, xp) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }

  attack(monster) {
    monster.hp -= this.att;
    this.hp -= monster.att;
  }

  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  }
}

// 몬스터 리스트 배열
const monsterList = [
    { name: '슬라임', hp: 20, att: 10, xp: 10 },
    { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
    { name: '마왕', hp: 150, att: 35, xp: 50 },
  ];

$startScreen.addEventListener('submit', (event) => {
    // preventDefault() : form 태그에서 submit 할 때 페이지 이동을 방지해줌
    event.preventDefault();
    const name = event.target['name-input'].value;
    $startScreen.style.display = 'none';
    $gameMenu.style.display = 'block';
    $heroName.textContent = name;
    $heroLevel.textContent = `${hero.lev}Lev`;
    $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    $heroXp.textContent = `XP: ${hero.xp}/${15 * hero.lev}`;
    $heroAtt.textContent = `ATT: ${hero.att}`;
})

$gameMenu.addEventListener('submit', (event) => {
    event.preventDefault();
    //form 안에 있는 input들은 이런식으로 id로 값을 가져올 수 있음
    const input = event.target['menu-input'].value; // 문자열로 넘어옴
    if (input === '1') { // 모험
      $gameMenu.style.display = 'none'; 
      $battleMenu.style.display = 'block';
      // JSON.stringify - 깊은복사 
      // monster = monsterList[Math.floor(Math.random() * monsterList.length)] - 객체라서 참조가 됨
      // 참조가 되면 둘 중 하나만 값을 바꿔도 둘다 바뀐다
      // 붕어빵 틀이 바뀌는걸 방지
      // 얕은복사 : monster = monsterList[...Math.floor(Math.random() * monsterList.length)]
      // 얕은복사 : 껍데기만 참조관계가 끊기지만 내부는 참조한다. 깊은복시 : 둘다 참조관계가 끊긴다.
      // 대부분 얕은복사면 해결가능 but 객체 안에 객체 있으면 깊은복사 쓰자
      // JSON.stringify 단점 : 느리고, Math, Data 같은 건 복사 안됨 -> lodash 라이브러리 쓰자
      monster = JSON.parse(
        JSON.stringify(monsterList[Math.floor(Math.random() * monsterList.length)])
      );
      monster.maxHp = monster.hp;
      $monsterName.textContent = monster.name;
      $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
      $monsterAtt.textContent = `ATT: ${monster.att}`;
    } else if (input === '2') { // 휴식
    } else if (input === '3') { // 종료
    }
  });

  $battleMenu.addEventListener('submit', (event) => {

      // event.target 은 form
      // input이 number여서 숫자로 저장하고 싶으면 value 대신 valueAsNumber 쓰면 됨
      const input = event.target['battle-input'].value; 

      if(input === '1') { //공격
        hero.attack(monster);
        monster.attack(hero);
        $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
        $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
        $message.textContent = `${hero.att} 데미지를 주고 ${monster.att} 데미지를 받았다.`;

      } else if(input === '2') { //회복

      } else if(input === '3') { //도망
        
      }
  });