<?php

/**
 *
 * @package    formatPrice.php
 * @version    Release: 1.0.1
 * @license    GPL3
 * @author     Ali YILMAZ <aliyilmaz.work@gmail.com>
 * @category   money, currency, cash, credit, coin
 * @link       https://github.com/aliyilmaz/formatPrice
 *
 */

function formatPrice($price) {

    // Check the last two characters of the price and store them in $lastParams.
    $lastParams = '';
    if (strlen($price) >= 2) {
        $lastTwoCharacters = substr($price, -2);
        $lastParams = $lastTwoCharacters; 
    } else {
        $lastParams = $text;
    }
    
    // Convert the price to a floating-point number.
    $price = floatval($price);
    
    // Extract the decimal and integer parts of the price.
    $decimalPart = fmod($price, 1);
    $decimalPart = number_format($decimalPart, 2, '.', ''); // Round the decimal part to two decimal places.
    
    $integerPart = floor($price);
    
    // Format the integer part by adding commas for thousands separation.
    $formattedIntegerPart = number_format($integerPart);
    
    // Combine the formatted integer part and the decimal part to create the final formatted price.
    $formattedPrice = $formattedIntegerPart . '.' . substr($decimalPart, 2);
    
    // Return the formatted price as a string.
    return $formattedPrice;
}
