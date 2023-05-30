// 어떤 정수들이 있습니다.
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
    var answer = 0;

    for (var i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer +=absolutes[i]
        }
        else {
            answer -=absolutes[i]
        }
    }

    return answer;
}

var absolutes = [4,7,12]
var signs = [true,false,true]

console.log(solution(absolutes, signs))
// [1,2,3]	[false,false,true]
