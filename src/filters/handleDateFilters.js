function convertPersianDigitsToLatin(str) {
    return str.replace(/[\u06F0-\u06F9]/g, function (digit) {
        return String.fromCharCode(digit.charCodeAt(0) - 1728);
    });
}

// past year from now
function subtractDate(type, value, endDate) {
    const dateArr = convertPersianDigitsToLatin(endDate).split('/').map(Number)

    if (endDate) {
        return [
            new persianDate(dateArr).subtract(type, value),
            new persianDate(dateArr)
        ]
    }

    return [
        new persianDate().subtract(type, value),
        new persianDate()
    ]
}

// filter date listener
$('input[name="date-filter"]').on('change', function (e) {
    const optionTarget = $(e.currentTarget).attr('id')
    const dateField1 = $('.date-field1')
    const dateField2 = $('.date-field2')

    let result = []

    switch (optionTarget) {
        case 'past_year':
            result = subtractDate('years', 1)
            break;
        case 'past_month':
            result = subtractDate('months', 1)
            break;
        case 'past_week':
            result = subtractDate('weeks', 1)
            break;
        case 'past_day':
            result = subtractDate('days', 1)
            break;
        case 'past_year_end':
            result = subtractDate('years', 1, dateField2.val())
            break;
    }

    dateField1.val(result[0].format('YYYY/MM/DD'))
    dateField2.val(result[1].format('YYYY/MM/DD'))
})