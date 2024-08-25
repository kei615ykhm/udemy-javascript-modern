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
promise
  .then((value) => {
    console.log("1回目のthen");
    console.log(value);
    setTimeout(() => {
      console.log("最初のthenの中の1秒経ったよ");
    }, 1000);
  })
  // ひとつめの`then`の`value`を使いたくない場合は、`then`をチェインする
  .then(() => {
    console.log("2回目のthen");
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
