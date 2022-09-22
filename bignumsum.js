const plus = (a, b) => {
  let arrA = String(a).split('');
  let arrB = String(b).split('');

  // 进位标志
  let flag = 0;
  // 最终结果
  const result = [];

  if (arrA.length < arrB.length) {
    // 保证 arrA 存的是较长的数字
    const temp = arrB;
    arrB = arrA;
    arrA = temp;
  }

  // 当 Arr B 还有值没加完，或进位为1
  while (arrB.length || flag !== 0) {
    // 从右往左加
    const valueA = Number(arrA.pop()) || 0;
    const valueB = Number(arrB.pop()) || 0;
    const sum = valueA + valueB + flag;

    if (sum > 9) {
      flag = 1;
      result.unshift(sum % 10);
    } else {
      flag = 0;
      result.unshift(sum);
    }
  }

  if (arrA.length) {
    return [...arrA, ...result].join('');
  }

  return result.join('');
};

// test
console.log('123 + 22', plus(123, 22));
console.log('123 + 28', plus(123, 28));
console.log('1 + 999', plus(1, 999));
console.log('999 + 100', plus(999, 100));
console.log(
  '1 + 99999999999999999999999999999999',
  plus('1', '99999999999999999999999999999999')
);
