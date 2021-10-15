//Polyfill for reverse()

const myArr = [19, 69, 129, 189, 123];
const revMyArr = [].concat(myArr).reverse();
console.log(revMyArr);
// > Array [123,189,129,69,19]  -Expected output

//Polyfill for split()

const myString = "Hello guys, How are you all?";
const splits = myString.split(" ", 6);
console.log(splits);

// ['Hello','guys,','how','are','you','all?']    -expected output
