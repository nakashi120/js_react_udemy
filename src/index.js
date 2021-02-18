/**
 * const, letの変数宣言
 */

// // varを使って変数宣言
//  var val1 = "var変数";
//  console.log(val1)
//
//  // var変数は上書き可能
//  val1 = "var変数を上書き"
//  console.log(val1)
//
// // var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1)
//
// // letを使って変数宣言
// let val2 = "let変数";
// console.log(val2)
//
// // letは上書きが可能
// val2 = "let変数を上書き"
// console.log(val2)
//
// // val変数は再宣言不可能
// let val2 = "let変数を再宣言"
// console.log(val2)
//
// const val3 = "const変数"
// console.log(val3)
//
// val3 = "const変数を上書き"
// console.log(val3)

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "nakashi",
//   age: 34,
// };
//
// val4.name = "ayano"
// val4.address = "Aichi"
//
// console.log(val4)

// constで定義した配列は変更可能
// const val5 = [
//   'dog',
//   'cat',
// ];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);


/**
 * テンプレート文字列
 */
// const name = "nakashi";
// const age = 34;
//
// // 「わたしの名前はnakashiです。年齢は34歳です。」
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1);
//
// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
//  const func1 = function(str) {
//    return str;
//  }
// console.log(func1("func1です"));
//
// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));
//
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(2, 3));


/**
 * 分割代入
 */

// const myProfile = {
//   name: "nakashi",
//   age: 34,
// };
//
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
//
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['nakashi', 34];
//
// const [name, age]  = myProfile;
// const message3 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message3)

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "satoshi") => console.log(`こんにちは!${name}さん!`);
// sayHello("ayano");

/**
 * スプレッド構文
 */
// 配列の展開
// 配列の中身を展開してくれる
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
//
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
//
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3)

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
//
// const arr6 = [...arr4];
// console.log(arr6)
//
// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// ＝でコピーしてしまうと参照私をしてしまう
// const arr8 = arr4;
// console.log(arr8)
//
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列処理
 */
// const nameArr = ["tanaka", "yamada", "nakashi"];

// 従来
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// };

// mapを使った処理
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name, index) => console.log(name, index));

// filterをつかった処理
// const numArr = [1, 2, 3, 4, 5];
//
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr)

// 実践的なもの
// const newNameArr = nameArr.map((name) => {
//   if (name === "nakashi") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrue : 条件がfalse
// const val1 = 1 > 0 ? 'true

// const num = "1300";
// console.log(num.toLocaleString());
//
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています。' : '許容範囲内です。';
// }
// console.log(checkSum(40, 50))

/**
 * 論理演算子の本当の意味を知ろう
 */

 // const flag1 = true;
 // const flag2 = true;
 //
 // if (flag1 || flag2) {
 //   console.log("1か2はTrueです。")
 // }
 //
 // if (flag1 && flag2) {
 //   console.log("1も2もTrueです。")
 // }

// ||は左側がfalseなら右側を返す,左側がtrueなら左側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す、左側がfalseなら左側を返す
// const num = 100;
// const fee = num && "金額が設定されています";
// console.log(fee)
