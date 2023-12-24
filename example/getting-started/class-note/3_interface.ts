interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    age: 50,
    name: '캡틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var summary: SumFunction;
summary = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr1: StringArray = ['a', 'b', 'c'];
// arr1[0] = 10; // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj1: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 에러발생
// obj['cssFile'] = 'a'

Object.keys(obj1).forEach(function(value) {

})