// 基本的な関数

// 関数の定義（lengthを受け取り、その2乗を返す）
function square(lenght) {
  // returnによって、関数の実行結果を返す
  return lenght * lenght;
}

// 関数の呼び出し（square関数を呼び出し、引数に3を渡す）
const area = square(3); // 9
// 結果の表示
console.log(area);

// // 無名関数

// 関数の定義（calculatedAreaという変数に無名関数を代入）
const calculatedArea = function (lenght) {
  // calculatedArea関数の呼び出し時に実行される処理
  return lenght * lenght;
};

// 関数の呼び出し（calculatedArea関数を呼び出し、引数に10を渡す）
console.log(calculatedArea(10)); // 100
