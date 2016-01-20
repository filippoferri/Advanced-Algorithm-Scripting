/*
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Here are some helpful links:

Global Object
*/

function drawer(price, cash, cid) {
    var change = cash - price;
    var chArr = [];
    var cidVal = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

    for (var i = cid.length - 1; i > -1; i--) {
        while (cid[i][1] > 0 && change > cidVal[i]) {
            if (cid[i][1] > change) {
                var num = 1;
                while (num * cidVal[i] <= change) {
                    num++;
                }
                chArr.push([cid[i][0], (num - 1) * cidVal[i]]);
                cid[i][1] = cid[i][1] - (num - 1) * cidVal[i];
                change = Math.round((change - (num - 1) * cidVal[i]) * 100) / 100;
                break;
            } else {
                chArr.push([cid[i][0], cid[i][1]]);
                change = Math.round((change - cid[i][1]) * 100) / 100;
                cid[i][1] = 0;
                break;
            }
        }
        if (change === 0) {
            break;
        }
    }

    var returnedTotal = totalCash(chArr);
    change = cash - price;
    if (returnedTotal < change) {
        return "Insufficient Funds";
    } else if (totalCash(cid) === 0) {
        return "Closed";
    } else {
        return chArr;
    }

}

function totalCash(cid) {
    return cid.reduce(function (pre, cur) {
        return pre.concat(cur);
    }).filter(function (val) {
        return !isNaN(val);
    }).reduce(function (pre, cur) {
        return pre + cur;
    });
}

drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
