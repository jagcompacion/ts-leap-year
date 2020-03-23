"use strict";
exports.__esModule = true;
function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return "Leap year";
    }
    return "Not leap year";
}
exports.leapYear = leapYear;
