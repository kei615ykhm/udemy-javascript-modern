console.log(1);
// settimeoutというapiを使って、1秒後にコンソールに2を表示する
setTimeout(() => {
  console.log("1秒経ったよ");
}, 1000);

console.log(3);

// 1→3→1秒経ったよと表示される
