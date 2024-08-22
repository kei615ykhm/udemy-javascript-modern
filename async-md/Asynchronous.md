## 同期処理から非同期処理（コールバック）への移行

```js
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
    console.log(request.response);
  }
};

const before = new Date();
// リクエストの送信(nullを引数にして送信)
request.send(null);
const after = new Date();
const ms = after - before;
console.log(`${ms}ms`);

console.log(4);
```

## つまりどうなった？

- `send`が平均 90ms から概ね 0ms になった
- 実行順序が保証されていない（上から順番ではない）
- メインスレッドのプログラム実行において時間的コストがかからない
- 後続の処理が待たされることが無い

## コールバックとは？

非同期処理が終わったら実行してね、という関数のこと
しかし、重大な欠点があった
