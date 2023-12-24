/**
 * 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능/불가능 이다.
 * 타입의 경우 확장이 불가능하므로 가능하면 인터페이스를 사용하는 것이 좋다.
 */
interface Person1 {
    name: string;
    age: number;
}

// type Person1 = {
//     name: string;
//     age: number;
// }

var seho: Person1 = {
    name: '세호',
    age: 30
}

type MyString = string;
var str1: MyString = 'hello';