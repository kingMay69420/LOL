const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const result1Txt = document.getElementById("sum");
const result2TXt = document.getElementById("Difference");
const result3TXt = document.getElementById("Product");
let sum = 0;
let Difference = 0;
let Product = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        result1Txt.innerHTML = sum;

        Difference = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        result2Txt.innerHTML = Difference;

        Product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        result3Txt.innerHTML = Product;
        
    }

}
function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    result1Txt.innerHTML = "";
    result2TXt.innerHTML = "";
    result3TXt.innerHTML = "";
    sum = 0;
    Difference = 0;
    Product = 0;
}