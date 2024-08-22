// 配列の分割代入

// []の中に変数を入れることで、配列の中身を変数に代入できる
const array = ["Ham", 45];
// ひとつの式で複数の変数に代入することができる。これが分割代入の仕組み
const [nickname, age] = array;

console.log(nickname); // Ham
console.log(age); // 45
