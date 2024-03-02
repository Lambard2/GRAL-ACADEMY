let str = "1 2 3 + -".split(" ")
let stack = []
const evaluate = (input) =>{
    if (!isNaN(input)) {
        stack.push(input)
        return
      }

    let second = stack.pop()
    let first = stack.pop()

    switch(input){
        case '+': stack.push(+first + +second)
        return
      case '-': stack.push(first - second)
        return
      case '*': stack.push(first * second)
        return
      case '/': stack.push(first / second)
        return
      case '^': stack.push(first ** second)
        return
    }
}
for(let i of str){
    evaluate(i)
}
console.log(stack.pop())