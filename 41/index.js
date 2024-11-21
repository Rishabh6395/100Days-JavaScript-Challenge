// Simple Currency Converter

// Write a function to convert an amount from one currency to another using static exchange retes.



const rates = {
    USD: 1, // Base Currency
    EUR: 0.9, // 1 USD = .9 EUR
    GBP: 0.8, // 1 USD = .8 GBP
    INR: 82, // 1 USD = 82 INR
}

const convertCurrency = (amount, fc, tc) =>{
    let amountInUSD = 0;
    if(fc !== "USD"){
        amountInUSD = amount / rates[fc]
    } else{
        amountInUSD = amount
    }

    let convertAmount = 0
    if(tc !== "USD"){
        convertAmount = amountInUSD * rates[tc]
    }else{
        convertAmount = amountInUSD
    }
    return convertAmount
}

console.log(convertCurrency(100, "GBP", "EUR")) // Output will depend on the rates provided.