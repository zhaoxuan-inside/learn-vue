type Value = String | Number;
let value: Value = "123";
// : value is String 判断当 value 为 String 类型时才会进入方法
function isString(value: Value): value is String {
  return typeof value === "string";
}

const bool = isString(value);
console.log(bool);
