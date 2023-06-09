// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let x;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// hantei();
// hantei();
// hantei();
// hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let i = document.querySelector('input[name="yosou"]');
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = Number(i.value);
  
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let kai = document.querySelector('span#kaisu');
  kai.textContent = kaisu + 1;

  let ans = document.querySelector('span#answer');
  ans.textContent = yoso;

  let res = document.querySelector('p#result');
  let p = document.createElement('p'); 
  
  
  console.log((kaisu + 1) + "回目の予想" + yoso);
 if(kaisu < 2){
    kaisu++;
    if(kotae === yoso){
      x = "正解です．おめでとう!";
        console.log("正解です．おめでとう!");
    }else if(kotae > yoso){
      x = "まちがい．答えはもっと大きいですよ!";
        console.log("まちがい．答えはもっと大きいですよ!");
    }else{
      x = "まちがい．答えはもっと小さいですよ";
        console.log("まちがい．答えはもっと小さいですよ");
    }
 }else if(kaisu === 2 && yoso !== kotae){
    kaisu++;
    x = "まちがい．残念でした答えは" + kotae + "です．";
    console.log("まちがい．残念でした答えは" + kotae + "です．");
 }else if(kaisu === 2 && yoso === kotae){
    kaisu++;
    x = "正解です．おめでとう! 答えは" + kotae + "です．";
    console.log("正解です．おめでとう! 答えは" + kotae + "です．");
 }else{
    kaisu++;
    x = "答えは" + kotae + "でした．すでにゲームは終わっています";
    
    console.log("答えは" + kotae + "でした．すでにゲームは終わっています");
 }
 res.textContent = x;
 
}

let a = document.querySelector('#print'); 
a.addEventListener('click', hantei); 
