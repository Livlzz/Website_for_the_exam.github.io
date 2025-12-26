const cities = [
    { name: "kyiv", price: 50 },
    { name: "lviv", price: 70 },
    { name: "odesa", price: 80 }
];

const types = [
    { name: "standard", coef: 1 },
    { name: "express", coef: 1.5 }
];

function calculate() {
    const cityValue = document.getElementById("city").value;
    const weight = document.getElementById("weight").value;
    const typeValue = document.getElementById("type").value;

    if (weight <= 0) {
        document.getElementById("result").innerText = "Введіть коректну вагу";
        return;
    }

    const city = cities.find(c => c.name === cityValue);
    const type = types.find(t => t.name === typeValue);

    const price = city.price * weight * type.coef;

    document.getElementById("result").innerText =
        "Вартість доставки: " + price + " грн";
}
