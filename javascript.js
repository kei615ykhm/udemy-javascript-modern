// mapメソッド

// mapメソッドとは、配列のデータに対して実行できる関数
// ある配列のすべての要素に対して、関数を実行し、その結果を新しい配列として返す

// 関数に名前が付けられるmapメソッドの書き方
const numbers = [5, 3, 4];
// 関数squareは引数numberを受け取り、number * numberを返す
const square = (number) => {
  return number * number;
};

// mapメソッドを使って、numbersのすべての要素にsquare関数を適用する
const squares = numbers.map(square);
console.log(squares); // [25, 9, 16]

// 関数に名前を付けているほうが、コードの意図が明確になる

// 無名関数よりも関数に名前を付けるほうが、可読性が高い
// また、関数に名前を付けることで、関数を再利用しやすくなる
// Reactでは、関数に名前を付けることが推奨されている
