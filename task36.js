// Дан массив целых чисел nums и целое число target. Вернуть индексы двух чисел таких, что их сумма равна target.
//
//     Вы можете предположить, что у каждого ввода ровно одно решение, и вы не можете использовать один элемент дважды.
//
//     Вы можете вернуть ответ в любом порядке.

const twoSum = (nums = [2,7,11,15], target = 9) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return null
}

console.log(twoSum())