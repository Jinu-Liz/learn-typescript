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
// function logText(text: string | number) {
//     console.log(text);
//     // text.split('').reverse().join('');
    
//     return text;
// }
// const a = logText('a');
// a.split('');    // number가 들어오는 경우, split을 사용할 수 없으므로 에러가 뜬다.
// logText(10);
// logText(true);


/**
 * 함수명을 변경하여 별도로 선언하지 않아도, 타입을 유동적으로 지정하여 해당 타입의 API를 사용할 수 있다. 
 * 제네릭은 타입에 무엇이 들어갈 지 호출한 시점에 정하여 타입을 추론해서 최종 반환값까지 붙일 수 있다.
 */
function logText<T>(text: T): T {
    console.log(text);
    
    return text;
}

const abc = logText<string>('abc');
abc.split('');

const login = logText<boolean>(true);
login.valueOf();

logText<number>(10);


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const dropObj: Dropdown<string> = { value: 'abc', selected: false };
const dropObj2: Dropdown<number> = { value: 10, selected: false };


// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] { // 배열을 추가적으로 줌으로써 length 사용이 가능.
    console.log(text.length);
    text.forEach(text => console.log(text));
    return text;
}

logTextLength<string>(['hi', 'abc']);