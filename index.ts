function moo(...args: ([className: string, when?: boolean] | string)[]) {
  return args
    .map((el) => {
      if (Array.isArray(el)) {
        if (el[1] === undefined) {
          return el[0];
        }
        return el[1] ? el[0] : null;
      }
      return el;
    })
    .filter((e) => e !== null)
    .join(" ");
}

export default moo;
