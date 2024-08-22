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
