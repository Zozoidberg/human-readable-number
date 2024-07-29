const units = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }

const tens = {
    0: '',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
}

const hundreds = {
    1: 'one hundred',
    2: 'two hundred',
    3: 'three hundred',
    4: 'four hundred',
    5: 'five hundred',
    6: 'six hundred',
    7: 'seven hundred',
    8: 'eight hundred',
    9: 'nine hundred',
}

function toReadable (number) {
    const numberToString = String(number)
    if (number === 0) 
        return 'zero'
    if (numberToString.length === 1)
        return units[number]
    else if (numberToString.length === 2)
        if (number <= 20)
            return tens[number]
        else 
            return (tens[Number(numberToString[0]) * 10] + ' ' + units[Number(numberToString[1])]).trim()
    if (numberToString[1] != '1' && numberToString[1] != '0')
        return (hundreds[Number(numberToString[0])] + ' ' + tens[numberToString[1] * 10] + ' ' + units[numberToString[2]]).trim()
    else if (numberToString[1] === '0')
        return (hundreds[Number(numberToString[0])] + ' ' + units[numberToString[2]]).trim()
    return (hundreds[Number(numberToString[0])] + ' ' + tens[number % 100]).trim()
}

module.exports = toReadable;

console.log(toReadable(0))
