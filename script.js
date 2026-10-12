document.querySelector("#calculateTip").onclick = function() {

    let subtotal = document.querySelector("#subtotal").value;
    let tipPercentage = document.querySelector("#tipPercentage").value;

    let tip = subtotal * tipPercentage / 100;
    let total = Number(subtotal) + tip;

    document.querySelector("#tipAmount").innerHTML = "$" + tip.toFixed(2);
    document.querySelector("#tipTotal").innerHTML = "$" + total.toFixed(2);

};

document.querySelector("#calculatePaycheck").onclick = function() {

    let hoursWorked = document.querySelector("#hoursWorked").value;
    let hourlyRate = document.querySelector("#hourlyRate").value;

    let paycheck = hoursWorked * hourlyRate;

    document.querySelector("#paycheckAmount").innerHTML = "$" + paycheck.toFixed(2);

};

document.querySelector("#calculateGrade").onclick = function() {

    let pointsEarned = document.querySelector("#pointsEarned").value;
    let totalPoints = document.querySelector("#totalPoints").value;

    let grade = pointsEarned * totalPoints;

     document.querySelector("#gradeResult").innerHTML = "%" + grade.toFixed(2);
};

document.querySelector("#calculateGasCost").onclick = function() {

    let tankSize = document.querySelector("#tankSize").value;
    let pricePerGallon = document.querySelector("#pricePerGallon").value;

    let gasCost = tankSize * pricePerGallon;

    document.querySelector("#gasCost").innerHTML = "$" + gasCost.toFixed(2);
};