function factorial(target_number){
    if (target_number <1){return 0;}
    else if (target_number == 1){return 0;}
    var total = 1;
    for (var loop = 1; loop <= target_number; loop++){
        total *= loop;
    }
    console.log("factorial complete\n");
    return total;
}

function permutation(total_options, selected){
    if (selected > total_options) {return 0}
    // n! / (n-k)!
    console.log("permutation complete\n");
    return (factorial(total_options) / factorial(total_options - selected) );
}


$( document ).ready(function() {

    var lotto_type;
    var lotto_cost;
    var possibilities;
    var lotto_total;

    $( "#inputSubmit" ).click(function() {
        lotto_type = $("#lottoTypes").val();
        lotto_cost = $("#inputCost").val();
        if(lotto_type = "Powerball") {
            //select 5 numbers from 69, and also an extra 1 number from 26
            possibilities = permutation(69, 5) * 26;
        }
        else if (lotto_type = "Mega Millions") {
            //select 5 numbers from 70, and also an extra 1 number from 24
            possibilities = permutation(70, 5) * 24;
        }
        lotto_total = possibilities * lotto_cost;
        $(".outputName").text(lotto_type);
        $("#outputWorthwhile").text(lotto_total);
        $("#outputPossible").text(possibilities);
        $("#outputTotal").text(lotto_total);
        $("#outputHalf").text( (lotto_total) /2);
        $("#outputExpected").text(lotto_cost / possibilities);
        //show results
        $(".output").toggle();
    });

    $( "#test" ).click(function() {
        $("#test").toggle();
    });
});

