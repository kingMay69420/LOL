let numbers = [];

function insertNumber() {
    let input = document.getElementById("numberInput").value;
    let num = parseInt(input);

    if (!isNaN(num)) {
        numbers.push(num);
        updateDisplay();
    }
    document.getElementById("numberInput").value = "";
}

function deleteAll() {
    numbers = [];
    updateDisplay();
}

function updateDisplay() {
    let numberList = document.getElementById("numberList");
    numberList.innerHTML = numbers.join("<br>");

    let sum = numbers.reduce((a, b) => a + b, 0);
    let highest = numbers.length > 0 ? Math.max(...numbers) : 0;
    let lowest = numbers.length > 0 ? Math.min(...numbers) : 0;

    document.getElementById("sum").innerText = sum;
    document.getElementById("highest").innerText = highest;
    document.getElementById("lowest").innerText = lowest;
}
