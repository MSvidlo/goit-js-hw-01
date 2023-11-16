function makeTransaction(quantity, pricePerDroid) {
    const value = `You ordered ${quantity} droids worth ${pricePerDroid} credits!`; return value;
};
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
