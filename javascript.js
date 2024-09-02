console.log("start");

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1秒経ったよ");
      resolve();
    }, 1000);
  });
};

const promise = sleep();

promise
  .then(() => sleep())
  .then(() => sleep())
  .then(() => sleep())
  .then(() => sleep())
  .then(() => sleep())
  .then(() => sleep());

console.log("end");
