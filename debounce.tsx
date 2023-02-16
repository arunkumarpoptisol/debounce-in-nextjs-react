export const debounce = (func: any) => {
  let timer: any;
  const newLocal = this;
  return function (...args: any) {
    const context: any = newLocal;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};
