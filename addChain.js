// 题目一：add(1)(2)(3) == 6

function add(n) {
  var addNext = function (x) {
    // 形成闭包，对参数进行累加后，再返回当前函数
    return add(n + x);
  };

  // console.log 会自动调用参数的 toString 方法
  addNext.toString = function () {
    return n;
  };

  return addNext;
}

// test
console.log(add(1)(2) == 3);
console.log(add(1)(2)(3) == 6);
console.log(typeof add(1)(2) === 'function');

// ------------------------------------------------------------
//   解析
// ------------------------------------------------------------

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

// ------------------------------------------------------------
//   题目分割线
// ------------------------------------------------------------

// 题目二： 柯里化实现多参累加
// add(1)(3,4)(3,5)	// 16
// add(2)(2)(3,5)		// 12

function add2() {
  // Attention: arguments 类数组在箭头函数里是拿不到的！！！
  const args = [...arguments];
  const fn = function () {
    // 将新的参数，添加进 args，并再次调用 add2
    return add2.apply(null, args.concat(...arguments));
  };

  fn.toString = () => {
    return args.reduce((prev, curr) => prev + curr, 0);
  };

  return fn;
}

console.log(add2(1)(3, 4)(3, 5)); // 16
