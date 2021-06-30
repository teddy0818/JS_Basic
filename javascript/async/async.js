// async & await
// clear style of using promise :)

// 1. async
// async 를 붙이면 자동적으로 promise로 바꿔준다 -> 
async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'ellie';
  }
  
  const user = fetchUser();
  user.then(console.log);
  console.log(user);
  
  // 2. await ✨
  // setTimeout을 편하게 쓸 수 있음
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000);
    return '🍎';
  }
  
  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  
  async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  
  pickFruits().then(console.log);
  
  // 3. useful APIs ✨
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);
  
  function pickOnlyOne() { // 가장먼저 리턴 된 하나값만 전달됨
    return Promise.race([getApple(), getBanana()]);
  }
  
  pickOnlyOne().then(console.log);