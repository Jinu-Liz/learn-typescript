/**
 * 별도로 값을 지정하지 않으면 숫자형 이넘으로 판단한다.
 * Nike가 index 0번이기 때문에 0, Adidas가 1번이기 때문에 1이 나옴.
 */
enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0;

/**
 * 값을 직접 지정할 경우, 해당 타입으로 판단.
 */
enum Shoes1 {
    Nike = '나이키',
    Adidas = '아디다스'
}
var myShoes2 = Shoes1.Nike;
console.log(myShoes2); // 나이키


// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
        
    }

    if (answer === Answer.No) {
        console.log('오답입니다.');
        
    }
}

askQuestion(Answer.Yes);
askQuestion(Answer.No);
askQuestion('Yes'); // enum 타입이 아니기 때문에 에러.