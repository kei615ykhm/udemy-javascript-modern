//オブジェクトの分割代入

// ｛｝の中にオブジェクトを入れると、オブジェクトのプロパティを変数として取り出すことができる
const profile = { nickname: "Ham", age: 45 };
// restにはnicknameプロパティ以外のプロパティが代入される
const { nickname, ...rest } = profile;

// nicknameプロパティの値が変数nicknameに代入されている
console.log(nickname); // Ham

// nicknameプロパティ以外のプロパティがオブジェクトとしてrestに代入されている
console.log(rest); // { age: 45 }

// オブジェクトの分割代入は、関数の引数にも使える

// nicknameだけを引数として受け取る場合は、引数にオブジェクトを指定して、その中でnicknameプロパティを分割代入する
const printObject = ({ nickname }) => {
  console.log(`nickname: ${nickname}`);
};

printObject(profile); // nickname: Ham
