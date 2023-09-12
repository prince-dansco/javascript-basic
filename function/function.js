//  Write a function called `calculateTax` that takes an income as input and calculates the tax
//  based on the following rules:
//     - Income up to $10,000: 10% tax
//     - Income between $10,001 and $50,000: 20% tax
//     - Income above $50,000: 30% tax


function calculateTax(income) {
    if (income <= 10000){
        //10% tax for income up to $10,000
        return income * 0.10;
    }else if (income <=50000){
        //20% tax for income between $10,001 and $50,000
        return income * 0.10 + (income -10000) * 0.20;
    }else{
        //30% tax for income above $50,000
        return 10000 * 0.10 + 40000 * 0.20 + (income - 50000) * 0.30;
    }
}

const income = 4000;
const taxAmount = calculateTax(income);

console.log(`For an income of ${income}, the tax amount is ${taxAmount}`);