// 题目：升级版节流 https://tva1.sinaimg.cn/large/e6c9d24egy1h67emyvkyij212y07m74p.jpg
//（相比较节流，如果有被屏蔽的fn，会在时间到期后，自动执行一次，所以才有了 cacheFn）

const delayExec = (fn, time) => {
  let canRun = true;
  let timer = null;
  let cacheFn = null;

  const exec = () => {
    if (!canRun) {
      cacheFn = fn;
      return;
    }

    fn();
    clearTimeout(timer);
    canRun = false;

    timer = setTimeout(() => {
      cacheFn?.();
      cacheFn = null;
      canRun = true;
    }, time);
  };

  return exec;
};

const delayedFn = delayExec(() => console.log('emit'), 5000);

delayedFn();
delayedFn();
delayedFn();

//
