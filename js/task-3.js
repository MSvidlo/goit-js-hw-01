function getElementWidth(content, padding, border) {
    // Перетворюємо значення вказані у форматі 'Npx'
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    // Розрахунок загальної ширини з урахуванням box-sizing: border-box
    const width = contentWidth + paddingWidth * 2 + borderWidth * 2;
    return width;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
