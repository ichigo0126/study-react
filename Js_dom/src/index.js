
//要素を取得//
const title1 = document.getElementById("title");
console.log(title1);

//<hi id="title">Hello World!</h1>

//querySelectorを使う
const title2 = document.querySelector("#title");
console.log(title2);
//一致する最初の要素が返却される

// const containers = document.getElementsByClassName("container");
// console.log(containers);
//class="container"を持つdivタグは2つ以上存在するので上図のようにどちらも取得されていることが確認できる//
//まとめてElementを取得するようなこともできる//

const container = document.querySelector(".container");
console.log(container);
//querySelectorの複数Elementを取得できるバージョン
//querySelectorAllがある//

const containers = document.querySelectorAll(".container");
console.log(containers);


//domの生成//
// const divEl = document.createElement("div");
// console.log(divEl);

//HTMLUnknownElementの生成　※特に使い道はない※ //
const nushidaEl = document.createElement("nushida");
console.log(nushidaEl);

//domの追加//

// const divEl = document.createElement("div");

// const pEl = document.cre.ateElement("p");

// divEl.appendChild(pEl);
// console.log(divEl);
//appendChildを使うことで、Elementの配下に他のElementを追加することができる

// const divEl = document.createElement("div");
//divタグの作成//
const pEl = document.createElement("p");
//pタグの作成
const h2El = document.createElement("h2");
//h2タグの作成


// divEl.appendChild(pEl);
//divタグ配下にpタグを追加
// divEl.appendChild(h2El);
//divタグ配下にh2を追加
// console.log(divEl);


const buttonEl = document.createElement("button");
//buttonタグの生成//
buttonEl.textContent="ボタン";
//ボタンのラベル設定//
const divEl = document.querySelector(".container");
//エリア1のdivタグを取得
divEl.appendChild(buttonEl);
//divタグ配下にbuttonタグを追加//

//domの削除//

//h1タグの取得//
const h1El = document.getElementById("title");

//bodyタグの取得//
// const bodyEl = document.querySelector("body");

//bodyタグ配下から削除//
// bodyEl.removeChild(h1El);

//body配下を全削除//
//bodyタグの取得//
const bodyEL = document.querySelector("body");

//bodyタグ配下から削除//
bodyEL.textContent = null;