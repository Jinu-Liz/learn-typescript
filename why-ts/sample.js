// @ts-check    // typescript처럼 타입 체크

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns 
 */
function sum(a, b) {
    return a + b;
}


sum(10, '20');
// 30 !== sum(10, '20'); // 1020