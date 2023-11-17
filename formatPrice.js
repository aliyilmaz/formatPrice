function formatPrice(price) {
    // Convert price to number
    price = parseFloat(price);

    // Separate the decimal part and whole part of the price
    const decimalPart = (price % 1).toFixed(2);
    const integerPart = Math.floor(price);

    // Break the whole part into its steps
    const formattedIntegerPart = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Create result by combining decimal and whole part
    const formattedPrice = formattedIntegerPart + '.' + decimalPart.substring(2);

    return formattedPrice;
}
