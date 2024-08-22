```js
// オブジェクトの分割代入

// ｛｝の中にオブジェクトを入れると、オブジェクトのプロパティを変数として取り出すことができる
const profile = { nickname: "Ham", age: 45 };
// restにはnicknameプロパティ以外のプロパティが代入される
const { nickname, ...rest } = profile;

// nicknameプロパティの値が変数nicknameに代入されている
console.log(nickname); // Ham

// nicknameプロパティ以外のプロパティがオブジェクトとしてrestに代入されている
console.log(rest); // { age: 45 }
```
