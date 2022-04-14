// var val1 = "var変数";

// var val1 = "var変数";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

//上書き可能//
//再宣言可能//

let val2 = "let変数";
console.log(val2);

val2 = "let変数をうわがき";
console.log(val2);

let var2 = "let変数";
console.log(val2);

// let var2 = "let変数を再宣言";
//上書き可能//
//再宣言不可能//

const val3 = "const変数";
console.log(val3);

// val3 = "const変数をうわがき";

// const val3 = "const変数";
// console.log(val3);

// const val3 = "const変数を再宣言";エラー//

//上書き不可能//
//再宣言不可能//
//オブジェクト型（・オブジェクト・配列・関数）の中身は変更可能//

const obj1 = {
    name: "主田",
    age: 24,
};
console.log(obj1);

obj1.name = "Nushida";
console.log(obj1);

obj1.address = "Tokyo";
console.log(obj1);

// const arr1 = ["dog", "cat"]
// console.log(arr1);

// arr1[0] = "bird";
// console.log(arr1);

// arr1.push("monkey");
// console.log(arr1);


//テンプレート文字列//
// const name ="主田";

// const age = 24;

// const message = "私の名前は" + name + "です。年齢は"　+ age + "歳です。";

// console.log(message);

// const name = "主田";

// const age = 24;

// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

//テンプレート文字列を使用する場合は`バッククォートで文字列を囲む


// function sayHello() {
//     return "こんにちは";
// }
//関数の呼び出し//

const month = 1;

// const message = `皆さん${sayHello()}。今日から${month * 3}月です!`;


// 従来の関数１//
// console.log(message);

function func1(value) {
    return value;
}

console.log(func1("func1です"));

// //従来の関数２//
// const func1 = function (value) {
//     return value;
// };

//実行結果を出力//
console.log(func1("func1です"));//func1です

const func2 = (value) => {
    return value;
};

console.log(func2("func2です"));//func2です

//引数が１つの場合はカッコを省略できる//

// const func2 = value => {
//     return value;
// };

//実行した結果を出力//
// console.log(func2("func2です"));//func2です//

//引数が2の場合//
// const func3 = value1,value2 => {
//     return value1 + value2;
// };

//2つ以上の場合はカッコで囲む//
const func3 = (value1, value2) => {
    return value1 + value2;
};

//returnの省略//
const func4 = (num1, num2) => num1 + num2;
console.log(func4(10, 20));

// const func4 = (num1, num2) => {
//     num1 + num2;
// }

console.log(func4(10, 20)); //undefined//

const func5 = (val1, val2) => (
    {
        name: val1,
        age: val2,
    }
)

console.log(func5("主田", 24));
//アロー関数//

//分割代入//

// const myProfile = {
//     name: "主田",
//     age: 24,
// };

// const message = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message);

// const myProfile = {
//      name: "主田",
//      age: 24
// };

// const {name, age} =myProfile;
// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);


//一部だけ取り出すこと可能//
// const {age} = myProfile;

//どんな順番でも代入可能//
// const {age, name} =myProfile;

// const myProfile = {
//     name: "主田",
//     age: 24
// };

// const {name: newName, age: newAge} = myProfile;
// const message = `私の名前は${newName}です。年齢は${newAge}歳です。`;
// console.log(message);

// const myProfile = ["主田", 24];
// const message = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// インデックスを利用して代入を行う。//

// console.log(message);

//配列に対して分割代入を行う//
// const myProfile = ["主田", 24];

// const [name, age] = myProfile;

// const message = `私の名前は${name}です。年齢は${age}歳です。`;

// console.log(message);

//配列の必要な要素のみを取り出す.//
//1つ目のみ必要な場合//
// const [name] = myProfile;



// デフォルト値 //

// const sayHello = (name) => console.log(`こんにちは!${name}さん！`);
// sayHello("主田");

// const sayHello = (name) => console.log(`こんにちは！${name}さん`);

// sayHello();

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);

// sayHello();
// sayHello("西田")


//存在しないプロパティを出力
// const myProfile = {
//     age: 24,
// }

// const {name} = myProfile;

// const message = `こんにちは${name}さん!`;
// console.log(message);

// const myProfile = {
//     age: 24,
// }

// const {name = "ゲスト"} = myProfile;

// const message = `こんにちは${name}さん`;
// console.log(message);



// const arr1 = [1, 2];
// console.log(arr1);
//スプレット構文//
//スプレット構文は...の形で3つ繋げて配列の内部の要素を順番に展開してくれる。//


// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

const arr1 = [1, 2];

const summaryFunc = (num1, num2) => console.log(num1 + num2);

summaryFunc(arr1[0], arr1[1]);

summaryFunc(...arr1);

//要素をまとめる//
const arr2 = [1,2,3,4,5];

const[num1, num2, ...arr3] = arr2;

console.log(num1);

console.log(num2);

console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// console.log(arr4);
// console.log(arr6);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const obj4 = {val1:10, val2: 20};
// const obj5 = {val3:30, val4: 40};

// const obj6 = {...obj4};

// const obj7 = {...obj4, ...obj5};

// console.log(obj6);
// console.log(obj7);

// const arr4 = [10, 20];

// const arr8 = arr4;

// console.log(arr8);

const arr4 = [10, 20];

const arr8 = [...arr4];

arr8[0] = 100;

console.log(arr4);
console.log(arr8);
//スプレット構文を使うことによって元の配列に影響を与えることなく動作できる

// const name = "主田";
// const age = 24;

// const user = {
//     name: name,
//     age: age,
// };

// console.log(user);

const name = "主田";
const age = 24;

const user = {
    name,
    age,
};

console.log(user);

//eslint 
    // var変数での変数変数宣言をチェック
    // 使っていない変数をチェック
    // 残っているconsole.logをチェック
    // 意味のない式をチェック
//

// const nameArr = ["主田", "先岡", "後藤"];

// for(let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }

// * 記述量が多い * //

//map関数を使う//

// const nameArr = ["主田", "先岡", "後藤"];

// const nameArr2 = nameArr.map();

//     ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓　//

// const nameArr = ["主田", "先岡", "後藤"];

// const nameArr2 = nameArr.map(() => {});

// const nameArr = ["主田", "先岡", "後藤"];

// const nameArr2 = nameArr.map((name) => {
//     return name;
// })

// console.log(nameArr2);

// const nameArr = ["主田" , "先岡", "後藤"];

// nameArr.map((name) => console.log(name));
//一個ずつ取り出す関数//

const numArr = [1,2,3,4,5];

const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
});

console.log(newNumArr);

//条件が合っているものだけ取り出す//

// const nameArr = ["主田", "先岡", "後藤"];

// for(let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

const nameArr = ["主田", "先岡", "後藤"];

const newNameArr = nameArr.map((name) => {
    if(name === "主田") {
        return name;
    } else {
        return `${name}さん`;
    }
});

console.log(newNameArr);

//三項演算子//

const val1 = 1 > 0 ? "trueです" : "falseです"; 
console.log(val1);

const printFormattedNum = (num) => {
    const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
    console.log(formattedNum);
}

printFormattedNum(1300);
printFormattedNum("1300");

// typeof 変数等の変数等の型を判定してくれる　//

//toLocaleString() 数値を3桁カンマ区切りに区切りに変換してくれる//

const checkSumOver100 = (num1, num2) => {
    return num1 + num2 > 100 ? "100を超えています!" : "許容範囲ないです";
};

console.log(checkSumOver100(50,40));
console.log(checkSumOver100(50,70));

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//     console.log("フラグはのどちらかはtrueです");
// }

// if(flag1 && flag2) {
//     console.log("フラグは両方trueです");
// }

// const num = null;
// const fee = num || "金額未設定です";

// console.log(fee);

const num = 100;
const fee = num || "金額未設定です";
//左が値があればtrue　左が値が設定されていなかったらfalseになる
console.log(fee);

const flag1 = true;
const flag2 = false;

if(flag1 || flag2) {
    console.log("フラグのどちらかはtrueです");
}

const num2 = 100;
const fee2 = num2 && "何か設定されました";

console.log(fee2);

