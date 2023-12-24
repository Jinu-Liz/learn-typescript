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
function logText(text: string) {
    console.log(text);
    // text.split('').reverse().join('');
    
    return text;
}

function logNumber(num: number) {
    console.log(num);
    
    return num;
}
logText('a');
logNumber(10);
logText(true);