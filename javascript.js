// resolveは成功時の処理、rejectは失敗時の処理
const Promise = new Promise((resolve, reject) => {
  // 時間のかかる処理
  // resolve("成功");
  setTimeout(() => {
    console.log("1秒経ったよ");
    resolve("some value");
  }, 1000);
});
console.log(promise);

// isClosureはクロージャかどうかを判定するための変数
// コールバックが実行されるタイミングの状態を読み取ることができる
const isClosure = true;

// thenメソッドで成功時の処理を記述(resolveが実行されたときに呼ばれる)
// 副作用として、非同期処理の結果を取得することができる
promise.then(() => {
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
