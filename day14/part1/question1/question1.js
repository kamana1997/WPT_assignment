exports.test = function () {
    var firstTerm = 0, secondTerm = 1;
    console.log(firstTerm);
    console.log(secondTerm);
    var sum = firstTerm + secondTerm;
    while (sum < 100) {

        console.log(sum);
        firstTerm = secondTerm;
        secondTerm = sum;
        sum = firstTerm + secondTerm;
    }

}