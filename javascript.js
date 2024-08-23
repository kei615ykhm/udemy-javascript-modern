const Promise = new Promise((resolve, reject) => {
  console.log(resolve);
  console.log(reject);
});
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
