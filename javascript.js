// リクエストオブジェクトの生成
const request = new XMLHttpRequest();
console.log(1);
// リクエストの初期設定(メソッド、URL、非同期通信のON/OFFという三つの設定を行う)
request.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
console.log(2);
request.onload = function () {
  console.log(3);
  // request.statusのチェックをここに移植する
  if (request.status === 200) {
    //   console.log(request.response);
  }
};

const before = new Date();
// リクエストの送信(nullを引数にして送信)
request.send(null);
const after = new Date();
const ms = after - before;
console.log(`${ms}ms`);

console.log(4);
