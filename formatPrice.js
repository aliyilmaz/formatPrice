/**
 *
 * @package    formatPrice.js
 * @version    Release: 1.0.1
 * @license    GPL3
 * @author     Ali YILMAZ <aliyilmaz.work@gmail.com>
 * @category   money, currency, cash, credit, coin
 * @link       https://github.com/aliyilmaz/formatPrice
 *
 */

function formatPrice(price) {

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
