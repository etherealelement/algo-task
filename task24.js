const groupAnagrams = (strs = ["eat","tea","tan","ate","nat","bat"]) => {
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];

        const sortedStr = str.split("").sort().join("");
        if(map[sortedStr]) {
            map[sortedStr].push(str);
        } else {
            map[sortedStr] = [str];
        }
    }
    return Object.values(map)
}


console.log(groupAnagrams())