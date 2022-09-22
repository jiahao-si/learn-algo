// add(1)(2)(3) == 6

function add(n) {
  var addNext = function (x) {
    return add(n + x);
  };

  addNext.valueOf = function () {
    return n;
  };

  return addNext;
}

// test
console.log(add(1)(2) == 3);
console.log(add(1)(2)(3) == 6);
console.log(typeof add(1)(2) === 'function');

// 必须使用  == ，因为在运行 == 时，会进行强制类型转换，调用 valueOf
