function primeOrNot(value) {
    var temp = false;
    if (value === 1 || value === 0) return value;
    for (var i = 2; i < value; i++){
        if (value % i === 0) {
            temp = true;
            break;
        }
    }
    if (temp) {
        return false
    }
    return true;
}


console.log(primeOrNot(7));