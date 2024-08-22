```js
// オブジェクトの代入

// ｛｝の中にオブジェクトを入れると、オブジェクトのプロパティを変数として取り出すことができる
const profile = { nickname: "Ham", age: 45 };
// nicknameプロパティを取り出して、nicknameという変数に代入している
const { nickname } = profile;

// nicknameプロパティの値が変数nicknameに代入されている
console.log(nickname); // Ham
```
