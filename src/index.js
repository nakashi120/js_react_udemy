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
const sayHello = (name = "satoshi") => console.log(`こんにちは!${name}さん!`);
sayHello("ayano");
