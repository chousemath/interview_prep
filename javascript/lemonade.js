var canreturnChange = function (payments) {
    var bills = {
        five: 0,
        ten: 0
    };
    // consider numbers as keys in a dict
    for (var _i = 0, payments_1 = payments; _i < payments_1.length; _i++) {
        var payment = payments_1[_i];
        if (payment < 5)
            return false;
        if (payment === 5)
            bills.five++;
        else if (payment === 10) {
            if (bills.five < 1)
                return false;
            bills.five--;
            bills.ten++;
        }
        else {
            if (bills.ten >= 1 && bills.five >= 1) {
                bills.five--;
                bills.ten--;
            }
            else if (bills.five >= 3) {
                bills.five -= 3;
            }
            else
                return false;
        }
    }
    return true;
};
