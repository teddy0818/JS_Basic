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
    att: 10
}

// 몬스터 객체
let monster = null;

// 몬스터 리스트 배열
const monsterList = [
    { name: '슬라임', hp: 20, att: 10, xp: 10 },
    { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
    { name: '마왕', hp: 150, att: 35, xp: 50 },
  ];

$startScreen.addEventListener('submit', (event) => {
    // preventDefault() : form 태그에서 submit 할 때 페이지 이동을 방지해줌
    event.preventDefault();
    const  name = event.target['name-input'].value;
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
    const input = event.target['menu-input'].value; // 문자열로 넘어옴
    if (input === '1') { // 모험
      $gameMenu.style.display = 'none'; 
      $battleMenu.style.display = 'block';
      monster = JSON.parse( // 깊은복사 
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