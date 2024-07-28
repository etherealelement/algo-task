// Учитывая массив nums размером n, верните элемент большинства.
//
//     Элемент большинства - это элемент, который появляется более ⌊n / 2⌋ раз. Вы можете предположить, что элемент большинства всегда существует в массиве.

const majorityElement = (nums = [3,2,3]) => {
    const map = new Map();

    nums.forEach((item) => {
        if (map.has(item)) {
            map.set(item, item++);
        } else {
            map.set(item, 1)
        }
    })

    return Array.from(map).find(item => item[1] > 1 && item[0])[0]
}
console.log(majorityElement())