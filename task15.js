class CoffeeMachine {
    _waterAmount = 0;

    set WaterAmount(value) {
        if (value <= 0 && typeof value !== "number") throw  new Error("Значение должно быть положительным");
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 10;
console.log(coffeeMachine.waterAmount);