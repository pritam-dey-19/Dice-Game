// Polyphill for split
let str = "Hello/-how/ar-e/you";
String.prototype.mySplit = function (args) {
  let newStr = this.replaceAll(args, "*");
  let arr = [];
  if (args === "") {
    for (let char of this) {
      arr.push(char);
    }
  } else if (newStr.includes("*")) {
    let p1 = 0,
      p2;
    for (let i = 0; i < newStr.length; i++) {
      if (newStr.charAt(i) === "*") {
        p2 = i;
        arr.push(newStr.slice(p1, p2));
        p1 = p2 + 1;
      }
    }
    arr.push(newStr.slice(p2 + 1));
  } else {
    arr.push(this);
  }
  return arr;
};

console.log("mySplit -- ", str.mySplit("/")); // self made
console.log("Inbuilt split -- ", str.split("/")); // Inbuilt

// polyphill for join
let arr = [3, 5, 6, 7, 777, 745645, 123, 456, 474545];

Array.prototype.newJoin = function (sepr) {
  let str = "";
  if (sepr === "") {
    for (let i of this) {
      str += i;
    }
  } else if (sepr === undefined) {
    for (let i of this) {
      str += i + ",";
    }
  } else {
    for (let i of this) {
      str += i + sepr;
    }
  }
  let a =
    str.slice(0, str.indexOf(this[this.length - 1])) + this[this.length - 1];

  if (sepr === "") {
    return str;
  } else {
    return a;
  }
};

console.log("newJoin --- ", arr.newJoin("-")); // self-made
console.log("Inbuilt Join --- ", arr.join("-")); // inbulit
