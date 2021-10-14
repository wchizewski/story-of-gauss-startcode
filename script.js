// Story of Gauss by Will

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");
let nIn = document.getElementById("n-in");
nOut = document.getElementById("n-out");

// add event listener
calcBtn.addEventListener("click", calcSum);
nIn.addEventListener("input", input)


// Event function
function input(){
    // get n value
    let nValue = +nIn.value;
    // check n value
    // min
    if (nValue < 0){
        nValue = 0
        nIn.value = 1
    // max
    } else if (nValue > 10000){
        nValue = 10000;
        nIn.value = 10000;
    }
}
    
function calcSum() {
    // get n value
    let nValue = +nIn.value;
    // change ? to n
    nOut.innerHTML = nIn.value

    // // Sum integers 1 to 100
    // let total = 0;
    // for (let n = 1; n <= nIn.value; n++) {
    //     total = total + n;
    // }

    let total = nValue * ( nValue + 1 ) / 2

    // Output the Total
    sumOut.innerHTML = total
}