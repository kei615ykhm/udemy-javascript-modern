const sleep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1秒経ったよ");
      resolve();
    }, 1000);
  });
};

const promise = sleep();
console.log(promise);

const isClosure = true;

// `some value`を取り出すために`promise.then`に`value`を入れている
promise
  .then(() => {})
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
