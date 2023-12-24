// class는 아래와 똑같음.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log("생성 되었습니다.");
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30);   // 생성 되었습니다.
console.log(seho);

// Prototype 소개
var user = { name: 'capt', age: 100 };
var admin = {};
admin.__proto__ = user;     // user의 인자 상속
console.log(admin.name);    // 'capt'
console.log(admin.age);     // 100

admin.role = 'admin';
console.log(admin); // {role: 'admin'} role: "admin" > [[Prototype]]: Object age: 100 name: "capt" > [[Prototype]]: Object

/**
 * prototype이 Array이기 때문에 Array의 API 사용 가능.
 * 이를 'Built-in Javascript API' 또는 'Javascript Native API'라고 부른다.
 */
var arr2 = [];