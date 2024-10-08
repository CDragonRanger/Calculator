$(document).ready(function () {
    var value = '';
    var parenthesesCount = 0;

    $(".nums").click(function() {
        var a = $(this).text();

        if (a === "+" || a === "-" || a === "×" || a === "÷" || a === "%") {
            value += a;
        } else if (a === "=") {
            try {
                value = eval(value.replace(/×/g, '*').replace(/÷/g, '/'));
            } catch (e) {
                value = "Error";
            }
        } else if (a === "«") {
            if (value.slice(-1) === ")") parenthesesCount++;
            if (value.slice(-1) === "(") parenthesesCount--;
            value = value.slice(0, -1);
        } else if (a === "AC") {
            value = '';
            parenthesesCount = 0;
        } else if (a === "( )") {
            if (parenthesesCount > 0) {
                value += ")";
                parenthesesCount--;
            } else {
                value += "(";
                parenthesesCount++;
            }
        } else {
            value += a;
        }

        $(".display").text(value || '0');
    });
});
