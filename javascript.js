console.log("start");

const sleep = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${milliseconds} ms`);
      resolve();
    }, milliseconds);
  });
};

// sleep(900)
//   .then(() => sleep(901))
//   .then(() => sleep(902))
//   .then(() => sleep(903))
//   .then(() => sleep(904))
//   .then(() => sleep(905))
//   .then(() => sleep(906));

console.log("end");
