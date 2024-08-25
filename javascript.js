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
  .then(() => {
    // ここでリターンすることによって、次の`then`に`value`を渡すことができる
    return sleep();
  })
  .then(() => {
    return sleep();
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
