```js
// 同期処理の原則

// 1. 関数の実行が終わるまで次の処理に進まない
// 2. 上から順番に処理される

const a = 1;
const b = 2;

console.log(a + b); // 3

// なぜここで 3 が出力されるのか？
// 1. const a = 1; が実行される
// 2. const b = 2; が実行される
// 3. console.log(a + b); が実行される
// 4. 1 + 2 が実行される
// 5. 3 が出力される

// このように、同期処理の原則により、上から順番に処理される
```

## 同期処理の性質

上から順番に処理されるフローを示したコード

```js
// リクエストオブジェクトの生成
const request = new XMLHttpRequest();
console.log(1);
// リクエストの初期設定(メソッド、URL、非同期通信のON/OFFという三つの設定を行う)
request.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
console.log(2);
// リクエストの送信(nullを引数にして送信)
request.send(null);
console.log(3);

// ネットワークのphotosのリクエストを確認
// リクエスト URL:https://jsonplaceholder.typicode.com/photos
// リクエスト メソッド:GET
// ステータス コード:200 OK

// レスポンスの確認
if (request.status === 200) {
  // レスポンスの表示
  console.log(request.response);
}

console.log(4);
```

> しかし同期処理は致命的な問題がある
