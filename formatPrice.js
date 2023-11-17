function formatPrice(price) {
    // Check if the price is a string containing commas, and remove commas if present.
    if (typeof price === 'string' && price.includes(',')) {
        price = price.replace(/,/g, '');
    }

    // Convert the price to a floating-point number.
    price = parseFloat(price);

    // Extract the decimal and integer parts of the price.
    const decimalPart = (price % 1).toFixed(2);
    const integerPart = Math.floor(price);

    // Format the integer part by adding commas for thousands separation.
    const formattedIntegerPart = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Combine the formatted integer part and the decimal part to create the final formatted price.
    const formattedPrice = formattedIntegerPart + '.' + decimalPart.substring(2);

    // Return the formatted price as a string.
    return formattedPrice;
}
