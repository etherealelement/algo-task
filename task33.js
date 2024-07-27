const isPalindrome = (s = "A man, a plan, a canal: Pansama") => {
    const preparedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return preparedStr === [...preparedStr].reverse().join("")
}

console.log(isPalindrome())