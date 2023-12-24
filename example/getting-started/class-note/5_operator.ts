// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// union 타입을 사용하면 복수의 타입을 사용할 수 있다.
var sehos: string | number | boolean;
function logMessage(value: string | number) {
    // 타입별로 해당 타입의 API를 자동완성을 통하여 바로 쓸 수 있다.
    if (typeof value === 'number') {
        value.toLocaleString();
    }

    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer2 {
    name: string;
    skill: string;
}

interface Person2 {
    name: string;
    age: number;
}

// 복수의 인터페이스를 사용할 경우, 공통 인자들만 자동완성이 된다. (타입 세이프)
function askSomeone(someone: Developer2 | Person2) {
    someone.name;
    someone.age;    // 에러뜸
    someone.skill;  // 에러뜸
}