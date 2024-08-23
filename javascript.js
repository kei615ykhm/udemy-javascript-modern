const Promise = new Promise(() => {});
console.log(promise);

console.log("start");

setTimeout(() => {
  console.log("1秒経ったよ");
  setTimeout(() => {
    console.log("1秒経ったよ");
    setTimeout(() => {
      console.log("1秒経ったよ");
    }, 1000);
  }, 1000);
}, 1000);

console.log("end");
