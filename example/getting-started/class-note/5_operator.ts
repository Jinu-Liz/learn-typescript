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

// Developer2 또는 Person2 둘 중 하나만 충족하면 된다.
askSomeone({ name: '개발자', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });


// 복수의 인터페이스를 모두 충족한 인자만 들어오므로, 인터페이스의 인자들 모두 자동완성이 된다.
function askSomeone1(someone: Developer2 & Person2) {
    someone.name;
    someone.age;    // 에러뜸
    someone.skill;  // 에러뜸
}

// Developer2와 Person2의 인자를 모두 가지고 있어야 한다.
askSomeone1({ name:'개발자', skill: '웹 개발', age: 34 });


var union: string | number | boolean;   // 적어도 한 개가 충족돼야함. (or)
var intcpt: string & number & boolean;  // 모두 충족해야함. (and)