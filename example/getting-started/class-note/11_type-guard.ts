interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making'}
}

var tony = introduce();
console.log(tony.skill);    // 공통 속성만 접근가능하기 때문에 skill은 에러남

// 이렇게 타입별/속성별 존재유무를 판단하는 것도 좋지만 가독성 및 반복되는 코드로 인해 효율이 떨어짐.
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
    
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
    
}


// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {    // 타입이 Developer이기 때문에 name과 skill이 자동완성으로 나옴
    tony.skill
} else {        // Person의 속성인 name과 age가 나옴
    tony.age
}