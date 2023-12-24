// function logText(text) {
//     console.log(text);

//     return text;
// }

// logText(10);    // 숫자 10
// logText('하이')     // 문자열 하이
// logText(true);      // 진위값 true

// function logText<T>(text: T): T {
//     console.log(text);

//     return text;
// }

// logText<string>('하이');


// logText, logNumber은 내용은 같은 로직이지만 타입 때문에 별도로 함수를 선언. 유지보수에 좋지 않음.
// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
    
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
    
//     return num;
// }

// 유니온의 경우, 공통 API만 자동완성으로 뜬다.
function logText(text: string | number) {
    console.log(text);
    // text.split('').reverse().join('');
    
    return text;
}
const a = logText('a');
a.split('');    // number가 들어오는 경우, split을 사용할 수 없으므로 에러가 뜬다.
logText(10);
// logText(true);