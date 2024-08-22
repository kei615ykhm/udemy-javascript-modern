console.log(1);
// settimeoutというapiを使って、1秒後にコンソールに2を表示し、さらに1秒後にコンソールに3を表示する
setTimeout(() => {
  console.log("1秒経ったよ");
  setTimeout(() => {
    console.log("1秒経ったよ");
    setTimeout(() => {
      console.log("1秒経ったよ");
    }, 1000);
  }, 1000);
}, 1000);

console.log(3);
