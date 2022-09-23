// add(1)(2)(3) == 6

function add(n) {
  var addNext = function (x) {
    return add(n + x);
  };

  addNext.toString = function () {
    return n;
  };

  return addNext;
}

// test
console.log(add(1)(2) == 3);
console.log(add(1)(2)(3) == 6);
console.log(typeof add(1)(2) === 'function');

// 必须使用  == ，在运行 (+-*/==><) 这些操作符时，会进行隐式转换，调用 valueOf 或 toString
// 所有JS数据类型都拥有这两个方法（位于原型链上），null除外
// 在数值运算中，优先调用了valueOf，在字符串运算中，优先调用了toString

// class A {
//   valueOf() {
//       return 2
//   }
//   toString() {
//       return '哈哈哈'
//   }
// }
// let a = new A()

// console.log(String(a))  // '哈哈哈'   => (toString)
// console.log(Number(a))  // 2         => (valueOf)
// console.log(a + '22')   // '222'     => (valueOf)
// console.log(a == 2)     // true      => (valueOf)
// console.log(a === 2)    // false     => (严格等于不会触发隐式转换)
