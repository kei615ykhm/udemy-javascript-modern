// 配列の分割代入

// []の中に変数を入れることで、配列の中身を変数に代入できる
const array = ["Ham", 45, "EggPlants", "Oranges"];
// ...restで残りの要素を配列として取得できる
const [nickname, age, ...rest] = array;

console.log(nickname); // Ham
console.log(age); // 45
console.log(rest); // ["EggPlants", "Oranges"]
// rest: 残余要素
// ...: 残余演算子、残余オペレーター、rest operator
