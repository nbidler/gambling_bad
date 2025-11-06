function factorial(target_number) {
    if (target_number < 1) {
        return 0;
    }
    else if (target_number < 2) {
        return 1;
    }
    var total = 1;
    for (var loop = 2; loop <= target_number; loop++) {
        total *= loop;
    }
    console.log("factorial complete\n", total, "\n");
    return total;
}
function combination(total_options, selected) {
    if (selected > total_options) {
        return 0;
    }
    var total = 1;
    // n! / (k! * (n-k)!)
    // total = factorial(total_options);
    // total /= (factorial(selected) * factorial(total_options - selected))
    //  instead of finding
    // factorial(total_options) / factorial(total_options - selected)
    //  replace with just the final terms that don't cancel out
    // loop calcs just final [selected] terms of [total_options]
    for (var loop = total_options - selected + 1; loop <= total_options; loop++) {
        total *= loop;
        console.log(loop, total);
    }
    for (var loop = 1; loop <= selected; loop++) {
        total /= loop;
        console.log(loop, total);
    }
    // sometimes gets too big for float
    //    try multiplicative formula
    //  from i to k, product (pi) the following: (n+1-i) / i
    //      where n is total_options and i is selected
    // for (let i = 1; i < total_options; i++) {
    //     total = total * (total_options + 1 - selected) / selected;
    //     console.log(i, total);
    // }
    console.log("permutation complete\n");
    return (total);
}
$(document).ready(function () {
    var lotto_type;
    var lotto_cost;
    var possibilities;
    var lotto_total;
    var lotto_expected;
    $("#inputSubmit").click(function () {
        lotto_type = $("#lottoTypes").val();
        lotto_cost = $("#inputCost").val();
        if (lotto_type = "Powerball") {
            //select 5 numbers from 69, and also an extra 1 number from 26
            possibilities = combination(69, 5) * 26;
        }
        else if (lotto_type = "Mega Millions") {
            //select 5 numbers from 70, and also an extra 1 number from 24
            possibilities = combination(70, 5) * 24;
        }
        lotto_total = possibilities * lotto_cost;
        lotto_expected = lotto_cost / possibilities;
        console.log(lotto_cost, lotto_total, lotto_expected);
        lotto_expected = lotto_expected.toFixed(12);
        $(".outputName").text(lotto_type);
        $("#outputWorthwhile").text("".concat(possibilities, " * $").concat(lotto_cost, ", in total $").concat(lotto_total));
        $("#outputPossible").text(possibilities);
        $("#outputTotal").text(lotto_total);
        $("#outputHalf").text((lotto_total) / 2);
        $("#outputExpected").text(lotto_expected);
        //show results
        $(".output").show();
    });
    $("#test").click(function () {
        $("#test").toggle();
    });
});
