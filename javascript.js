console.log(1);
// settimeoutというapiを使って、1秒後にコンソールに2を表示する
setTimeout(() => {
  console.log(2);
}, 1000);

console.log(3);

// 1→3→2と表示される
