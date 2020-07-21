// Дана функция

// var foo = function(x) {
//     return x > 0 ? x* foo(--x) : 1
// }
// Необходимо переписать функцию так, чтобы она не использовала рекурсию.

// var foo = function (x) {
//   return x > 0 ? x * foo(--x) : 1
// }
let foo = function (x) {
  let result = 1
  if (x > 0) {
    for (let i = 0; i < x; i++) {
      result *= x - i
    }
    return result
  }
}
console.log(foo(6));
