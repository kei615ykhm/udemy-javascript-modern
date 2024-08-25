// resolveは成功時の処理、rejectは失敗時の処理
const Promise = new Promise((resolve, reject) => {
  // 時間のかかる処理
  // resolve("成功");
  setTimeout(() => {
    console.log("1秒経ったよ");
    resolve("成功");
  }, 1000);
});
console.log(promise);

// Promiseインスタンスの状態を取得するメソッド
console.log(promise.isFulfilled()); // false

// thenメソッドで成功時の処理を記述(resolveが実行されたときに呼ばれる)
// 副作用として、非同期処理の結果を取得することができる
promise.then(() => {
  console.log(value);
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
