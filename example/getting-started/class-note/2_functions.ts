// 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b;
}

// JS에서는 정의한 파라미터의 갯수를 넘기면 무시해버리지만 타입스크립트는 에러 발생.
sum(10, 20, 30, 40);

// 함수의 옵셔널(Optional) 파라미터
// 물음표를 넣으면 사용할수도 안할수도 있다.
function log(a: string, b?: string) {

}

log('hello world');
log('hello ts', 'abc')