```js
// オブジェクトの分割代入は、関数の引数にも使える

const printObject = (profile) => {
  // 引数profileのnicknameプロパティの値を取り出して表示(.はオブジェクトのプロパティにアクセスする演算子)
  // この場合、profileというオブジェクトのnicknameというプロパティにアクセスしている
  console.log(`nickname: ${profile.nickname}`);
};

printObject(profile); // nickname: Ham
```
