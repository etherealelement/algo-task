//Дан массив целых чисел nums. Верните true, если в массиве есть хотя бы одно повторяющееся значение, и верните false, если все элементы различны.

const containesDublicate = (nums = [1,2,3]) => {
    const map = new Map();

    nums.forEach((num) => {
        if(map.has(num)) {
            map.set(num, num + 1)
        } else {
            map.set(num, 1)
        }
    })

    return Array.from(map).some((item) => item[1] > 1)
}

console.log(containesDublicate())