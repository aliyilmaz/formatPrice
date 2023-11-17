<?php

function formatPrice($price) {
    // Convert price to number
    $price = floatval($price);

    // Separate the decimal part and whole part of the price
    $decimalPart = fmod($price, 1);
    $decimalPart = number_format($decimalPart, 2, '.', ''); // Round the decimal part to two places

    $integerPart = floor($price);

    // Divide the whole part into groups of thousands
    $formattedIntegerPart = number_format($integerPart);

    // Create result by combining decimal and whole part
    $formattedPrice = $formattedIntegerPart . '.' . substr($decimalPart, 2);

    return $formattedPrice;
}
