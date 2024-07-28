// **Ввод:** prices = [7,1,5,3,6,4]
//     **Вывод:** 5
// **Пояснение:** Купите во второй день (цена = 1) и продайте в пятый день (цена = 6), прибыль = 6-1 = 5.
// Обратите внимание, что покупка во второй день и продажа в первый день не разрешается, потому что вы должны купить до продажи.

const getMaxProfit =  (prices = [7,1,5,3,6,4]) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
    return maxProfit
}
console.log(getMaxProfit())