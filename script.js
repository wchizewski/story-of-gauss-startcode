// Story of Gauss by Will

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");
let nIn = document.getElementById("n-in");

// add event listener
calcBtn.addEventListener("click", calcSum);
nIn.addEventListener("input", input)


// Event function
function input(){
    // get n value
    let nValue = +nIn.value;
    // check n value
    if (nValue < 1){
        nValue = 0
        nIn = 0
    }else if (nValue > 10000){
        nValue = 10000;
        nIn.value = 10000;
    }
}

function calcSum() {
    

    // Sum integers 1 to 100
    let total = 0;
    for (let n = 1; n <= 100; n++) {
        total = total + n;
    }

    // Output the Total
    sumOut.innerHTML = total
}