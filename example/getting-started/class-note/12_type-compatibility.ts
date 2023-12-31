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