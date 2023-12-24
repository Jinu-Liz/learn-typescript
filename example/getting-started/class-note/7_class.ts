class Person3 {
    // 접근제어자 선언 가능
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>
}

// Vue 최신 문법
new Vue({
    el: '',
    setup() {

    }
})

// 함수형으로 사용하기 때문에 클래스는 잘 사용하지 않는 추세.