function decodeValue(value, base) {
    return parseInt(value, base);
}

function lagrangeInterpolation(xValues, yValues) {
    function basisPolynomial(x, i) {
        let result = 1;
        for (let j = 0; j < xValues.length; j++) {
            if (i !== j) {
                result *= (x - xValues[j]) / (xValues[i] - xValues[j]);
            }
        }
        return result;
    }

    function polynomial(x) {
        let result = 0;
        for (let i = 0; i < xValues.length; i++) {
            result += yValues[i] * basisPolynomial(x, i);
        }
        return result;
    }

    return polynomial(0); 
}

function findConstantTermFromUserInput() {
    const n = parseInt(prompt("Enter the number of roots (n):"))
    const k = parseInt(prompt("Enter the minimum number of roots (k):"));

    const xValues = [];
    const yValues = [];

    for (let i = 1; i <= n; i++) {
        const base = prompt(`Enter the base for root ${i}:`);
        const value = prompt(`Enter the value for root ${i} (in base ${base}):`);
        const x = i;
        const yValue = decodeValue(value, parseInt(base));
        xValues.push(x);
        yValues.push(yValue);
    }
    
    
    return lagrangeInterpolation(xValues, yValues);
}

const constantTerm = findConstantTermFromUserInput();
console.log("The constant term (c) of the polynomial is:", constantTerm);
