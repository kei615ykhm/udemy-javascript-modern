// 一行で書かれている場合のmapメソッド

const numbers = [5, 3, 4];
// この書き方をすると、暗黙的にreturnされる
const square = (number) => number * number;
const squares = numbers.map(square);

console.log(squares); // => [25, 9, 16]
