## Promise チェインの 2 回目以降を書く理由

- 非同期処理を連続して行いたい場合
- 前の非同期処理の結果に基づいて次の非同期処理を行いたい場合

たとえば:

```js
fetchData() // 最初の非同期処理
  .then((response) => {
    // 最初の結果を処理
    return processData(response);
  })
  .then((processedData) => {
    // 次の非同期処理
    return saveData(processedData);
  })
  .then((savedData) => {
    console.log("Data saved successfully:", savedData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

最初の`.then()`ブロックは、`fetchData()`の結果を処理している。

次の`.then()`ブロックは、前の`.then()`の結果に基づいて次の非同期処理を行っている。

最後の`.catch()`ブロックは、いずれかの非同期処理でエラーが発生した場合のエラーハンドリングを行う。

## Promise チェインの役割まとめ

チェインを使うことで非同期処理の順序立てを簡潔に記述できる。
