// 인터페이스
interface Developer1 {
    name: string;
    skill: string;
}

interface Person1 {
    name: string;
}

var developer1: Developer1;
var person1: Person1;

developer1 = person1;   // Person에는 skill이 없기 때문에 에러.


interface Developer2 {
    name: string;
    skill: string;
}

interface Person2 {
    name: string;
    skill: string;
}

class Person4 {
    name: string;
    skill: string;
}

var developer2: Developer2;
var person2: Person2;

developer2 = person2;   // interface는 다르지만 속성(구조)이 같으므로 동일하다고 판단. 구조적 타이핑(structural typing)
developer2 = new Person4();     // 구조가 같으면 class 할당도 가능.

// 함수
var add11 = function(a: number) {
    // ...
}

var sum11 = function(a: number, b: number) {
    // ...
}

sum11 = add11;  // sum의 인자 수가 더 많아 범위가 더 넓으므로 호환 가능하다고 판단.
add11 = sum11;  // add의 인자 수가 더 적으므로 에러.


// 제네릭
interface Empty<T> {
    // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty2;

interface NotEmpty<T> {
    data: T;
}

// 속성의 타입이 선언된 타입에 따라 달라지기 때문에 다른 타입이 선언되면 에러가 발생한다.
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;