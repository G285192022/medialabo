//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let a1 = document.querySelector('h2#ex42'); 
let p1 = document.createElement('p'); 
p1.textContent = "写真表と緯度経度のページです" ;
a1.insertAdjacentElement('afterend', p1); 
p1.style.textEmphasis = 'sesame green'; 

// 練習4-3 写真表作成プログラム
let x = document.querySelector('div#phototable');
let ph1 = document.createElement('img');
ph1.setAttribute('src', 'taro.png');
let p00 = document.createElement('p');
p00.insertAdjacentElement('beforeend' , ph1);
x.insertAdjacentElement('beforeend' , p00);

let ph2 = document.createElement('img');
ph2.setAttribute('src', 'jiro.png');
let p01 = document.createElement('p');
p01.insertAdjacentElement('beforeend' , ph2);
x.insertAdjacentElement('beforeend' , p01);

let ph3 = document.createElement('img');
ph3.setAttribute('src', 'hanako.png');
let p02 = document.createElement('p');
p02.insertAdjacentElement('beforeend' , ph3);
x.insertAdjacentElement('beforeend' , p02);



// 練習4-4 箇条書き削除プログラム
let a2 = document.querySelectorAll('ul#location > li'); 
for (let n of a2) {
    n.remove();
} 


// 練習4-5 箇条書き追加プログラム
let ul = document.querySelector('ul#location');
for(let u of data){
    let li = document.createElement('li'); 
    li.textContent = u.name + '… 経度：' + u.lat +', 緯度：'+ u.lng;
    ul.insertAdjacentElement('beforeend', li); 
}


