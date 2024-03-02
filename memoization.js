const fibonacci = (n, memo) =>{
    if (n <= 1) return n
    if(memo[n]){
        return memo[n]
    }
    console.log(n)
    let res = fibonacci(n-1, memo) + fibonacci(n-2, memo) 
    memo[n] = res
    
    return res
}

console.log(fibonacci(10, []))