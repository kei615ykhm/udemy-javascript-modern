// リクエストオブジェクトの生成
const request = new XMLHttpRequest();
// リクエストの初期設定(メソッド、URL、非同期通信のON/OFFという三つの設定を行う)
request.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
// リクエストの送信(nullを引数にして送信)
request.send(null);

// ネットワークのphotosのリクエストを確認
// リクエスト URL:https://jsonplaceholder.typicode.com/photos
// リクエスト メソッド:GET
// ステータス コード:200 OK
