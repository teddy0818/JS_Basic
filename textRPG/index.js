const $startScreen = document.querySelector("#start-screen");
const $gameMenu = document.querySelector("#game-menu");
const $battleMenu = document.querySelector("#battle-menu");
const $heroName = document.querySelector("#hero-name");

$startScreen.addEventListener('submit', (event) => {
    // preventDefault() : form 태그에서 submit 할 때 페이지 이동을 방지해줌
    event.preventDefault();

    const  name = event.target['name-input'].value;
    $startScreen.style.display = 'none';
    $gameMenu.style.display = 'block';
    $heroName.textContent = name;
    

})