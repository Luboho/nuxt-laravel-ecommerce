export function sumToPrice(price) {
    const floatCurrency = `${'$' + parseFloat(price / 100).toFixed(2)}`;
    return floatCurrency;
}
