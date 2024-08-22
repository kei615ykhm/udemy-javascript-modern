// オブジェクトの分割代入

// ｛｝の中にオブジェクトを入れると、オブジェクトのプロパティを変数として取り出すことができる
const profile = { nickname: "Ham", age: 45 };
// restにはnicknameプロパティ以外のプロパティが代入される
const { nickname, ...rest } = profile;

// nicknameプロパティの値が変数nicknameに代入されている
console.log(nickname); // Ham

// nicknameプロパティ以外のプロパティがオブジェクトとしてrestに代入されている
console.log(rest); // { age: 45 }

// オブジェクトの分割代入は、関数の引数にも使える

const printObject = (profile) => {
  // 引数profileのnicknameプロパティの値を取り出して表示(.はオブジェクトのプロパティにアクセスする演算子)
  // この場合、profileというオブジェクトのnicknameというプロパティにアクセスしている
  console.log(`nickname: ${profile.nickname}`);
};

printObject(profile); // nickname: Ham
