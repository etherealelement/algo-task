// Дана строка s. Найдите длину самой длинной подстроки без повторяющихся символов. Пример 1:

const longestSubstring = (s = "abcabcbb") => {
    if (s.length <= 0) return false;
    let longest = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            let currentString = s.slice(i, j + 1);

            if (currentString.length > longest.length && new Set(currentString).size === currentString.length) {
                longest = currentString
            }
        }
    }
    return longest.length
}

console.log(longestSubstring())
