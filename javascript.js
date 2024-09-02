console.log("start");

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

promise
  .then(() => sleep())
  .then(() => {
    return sleep();
  });

console.log("end");
