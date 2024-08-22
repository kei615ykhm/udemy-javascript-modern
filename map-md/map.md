```js
// mapメソッド

// mapメソッドとは、配列のデータに対して実行できる関数
// ある配列のすべての要素に対して、関数を実行し、その結果を新しい配列として返す

// mapメソッドの基本構文
const numbers = [5, 3, 4];
// mapメソッドを使って、numbers配列の各要素を2倍にして新しい配列を作成
const squares = numbers.map((number) => {
  // returnで返す値が新しい配列の要素になる
  return number * number;
});

console.log(squares); // [25, 9, 16]
```
