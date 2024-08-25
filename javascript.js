const promise = new Promise((resolve, reject) => {
  // 時間のかかる処理
  // resolve("成功");
  setTimeout(() => {
    console.log("1秒経ったよ");
    resolve("some value");
  }, 1000);
});
console.log(promise);

const isClosure = true;

// `some value`を取り出すために`promise.then`に`value`を入れている
promise.then((value) => {
  console.log("成功しました");
});

console.log("start");

// setTimeout(() => {
//   console.log("1秒経ったよ");
//   setTimeout(() => {
//     console.log("1秒経ったよ");
//     setTimeout(() => {
//       console.log("1秒経ったよ");
//     }, 1000);
//   }, 1000);
// }, 1000);

console.log("end");
