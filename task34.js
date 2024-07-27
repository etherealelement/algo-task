// Дана строка s. Вернуть самую длинную палиндромную подстроку в s.

const longestPalindrome = (s = "cbbd") => {
    if (s.length === 0) return false
    let longestStr = "";

    for (let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length; j++) {
            let currentStr = s.slice(i, j + 1);
            if (isPalindrome(currentStr) && currentStr.length > longestStr.length) {
                longestStr = currentStr
            }
        }
    }

    function isPalindrome (char) {
        return char === [...char].reverse().join("")
    }
    return longestStr
}
console.log(longestPalindrome())