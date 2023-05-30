function solution(s) {
    // 기본값은 true
    let answer = true
    // 소문자 대문자 구분을 하지 않기 위해 값을 전부 대문자로 변환
    s = s.toUpperCase()
    //기본을 0으로 지정
    let num = 0
    // P가 검출되면 +1, Y가 검출되면 -1
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "P") {
            num++
        } 
        if (s[i] === "Y") {
            num--
        }
    }
    // 기본 값 0으로 지정했던게 0이면 true, 아니면 false ( 위에서 기본값을 true로 지정 했기때문에 num === 0 부분은 없어도 상관없음)
    if ( num === 0) {
        answer = true
    }
    else {
        answer = false
    }
    return answer
}
const str1 = "ppooyy"
const str2 = "pyy"
const str3 = "ooo"

console.log(solution(str2))
