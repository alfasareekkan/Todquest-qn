let n = 10;
let string = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n-i; j++) {
    if(j === n-i|| j == 1 || i===1) {
      string += "*";
    }
    else {
        string += " ";
    }
  }
  string += "\n";
}
console.log(string);