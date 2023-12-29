// 타입 추론 기본
var a = 'abc';

// b가 정의되지 않으면 10이라는 값을 할당. number 타입으로 추론. 10을 기본적으로 정의하지 않은 경우 any.
function getB(b = 10) {
    var c = 'hi';   // string
    return b + c;
}


// 타입 추론 기본2
interface Dropdown2<T> {
    value: T;
    title: string;
}

var shoppingItem : Dropdown2<string> = {
    value: 'abc',
    title: 'hello'
}

// 타입 추론 기본3
interface Dropdown3<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown3<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'bbc',
    description: 'ab',
    value: 'a',     // 타입을 상속받아 string이 추론된다.
    tag: 'a'
}


// Best Common Type
var arr = [1, 2, true, 'a']      // string | number | boolean 으로 추론. union으로 추론해 나간다.