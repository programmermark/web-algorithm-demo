/**
 *  有效的括号，题解
 * @param str
 * @returns
 */
function isValid(str) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      stack.push(str[i]);
    } else {
      const stackTop = stack[stack.length - 1];
      if (str[i] === map.get(stackTop)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

let testStr = "()";
console.log(isValid(testStr));
