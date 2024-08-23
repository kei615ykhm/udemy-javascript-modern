### 1 秒後に同じ処理を 3 回繰り返す（トータル 3 秒）の非同期処理

```js
console.log("start");

setTimeout(() => {
  console.log("1秒経ったよ");
  setTimeout(() => {
    console.log("1秒経ったよ");
    setTimeout(() => {
      console.log("1秒経ったよ");
    }, 1000);
  }, 1000);
}, 1000);

console.log("end");
```
