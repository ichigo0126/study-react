import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// stringで指定 //
let str: string = "A";
str = "10"; // OK //

// numberで指定 //
let num : number = 0;
num = 10; // OK //

// booleanで指定　//
 let bool: boolean = true;
 bool = false;

 // Array<型名> または : 型名[] で指定
 //　数値を格納する配列の場合
 const arr1 : Array<number> = [0, 1, 2];
 let arr2: number[] = [0,1,2];
 arr1.push(10);
 arr2.push(10);
 
 //null型で指定
 let null1: null = null;
 null1 = null;

//undefinedで指定
 let undefined1 : undefined = undefined;
 undefined1 = undefined;

//any型で指定
 let any1: any;
 any1 = false;
 any1 = 10;
 any1 = undefined;

 // voidで指定
 // 関数の型は(引数:　引数の型名) : void => {}
 const funcA = (num: number): void => {
  //  console.log(num);
 };

 funcA(10);

 //オブジェクト型を指定
 // : { :　型名, : 型名 ...}で指定
 const obj: {str: string, num: number} = {
   str: "A",
   num: 10,
 };

 obj.str = "B";
 obj.num = 20;

 //複合的な型(intersection(交差)) //
 // 型 & 型 で指定 //
const object : {str: string} & { num : number} = {
  str: "A",
  num: 10,
};

object.str = "20";


// type 型を定義するための構文
type TypeA = {
  str: string;
  num: number;
}
type TypeB = {
  str: string;
  bool: boolean;

}//TypeAとTypeBから新しいTypeCを作成
type TypeC = TypeA & TypeB;

const obj2: TypeC = {
  str: "A",
  num: 10,
  bool: false,
};

//union(合併,共用体)
let val1 : string | number = "";
val1 = "A";
val1 = 10;

//Generics(ジェネリクス)
//型の定義を使用時に動的に変更できる機能

type CustomType<T> ={
  val: T;
}

//CustomTypeの使用方法
const strObj: CustomType<string> = {val: "A"};


export default App;
