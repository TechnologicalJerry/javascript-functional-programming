// Function ---------->
function add(x, y) {
    return x + y;
}

// Function ---------->
const add = function (x, y) {
    return x + y;
}

// Function ---------->
document.addEventListener('click', function (event) {
    return;
})

// Function ---------->
function greet(salutation, firstName) {
    return `${salutation, firstName}`;
}

// Function ---------->
const greet = function (salutation) {
    return function (firstName) {
        return `${salutation} ${firstName}`;
    }
}