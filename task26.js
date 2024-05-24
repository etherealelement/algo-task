const compareVersion = (version1, version2) => {
    const v1 = version1.split(".");
    const v2 = version2.split(".");

    for (let i = 0; i < v1.length; i++) {
        if (parseInt(v1[i]) > parseInt(v2[i])) {
            return 1
        } else if (parseInt(v1[i]) < parseInt(v2[i])) {
            return -1;
        }
    }
    return 0
}

console.log(compareVersion("1.01", "1.001"))