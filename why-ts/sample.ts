function add(a: number, b: number): number {
    return a + b;
}

// add(10, '20');  // String을 넣으면 빨간줄로 표시되며 에러발생.

// result값이 number로 정해져 있어, number관련 API 및 속성들이 자동완성으로 표시된다.
var result = add(10, 20);
result.toLocaleString();