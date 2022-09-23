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

// 什么是函数柯里化
// curry的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

// 实现思路： 判断当前传入函数的参数个数 (args.length) 是否大于等于原函数所需参数个数 (fn.length) ，如果是，则执行当前函数；如果是小于，则返回一个函数
const curry = (fn, ...args) =>
  // 函数的参数个数可以直接通过函数数的.length属性来访问
  args.length >= fn.length // 这个判断很关键！！！
    ? // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
      fn(...args)
    : /**
       * 传入的参数小于原始函数fn的参数个数时
       * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
       */
      (..._args) => curry(fn, ...args, ..._args);

function add1(x, y, z) {
  return x + y + z;
}
const add3 = curry(add1);
console.log(add3(1, 2, 3));
console.log(add3(1)(2)(3));
console.log(add3(1, 2)(3));
console.log(add3(1)(2, 3));
