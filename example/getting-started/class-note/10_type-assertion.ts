// 타입 단언(type assertion)
var a;
a = 'a';
a = 20;
var b = a as number;  // a만 선언하면 b의 타입은 any. 그러나 as를 사용하여 타입을 지정해주면 b의 타입이 해당 타입으로 인식된다. (내가 더 잘아니까 이건 줄 아셈 이라는 뜻.)


// DOM API 조작
<div id='app'>hi</div>
var div = document.querySelector('div');    // HTMLDivElement
if (div) {
    div.innerText
}