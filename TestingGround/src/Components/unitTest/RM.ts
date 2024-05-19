const memo: Record<number, number> = {};

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }

    if (memo[n]) {
        return memo[n];
    }

    const result = fibonacci(n - 1)
        + fibonacci(n - 2);
    memo[n] = result;

    return result;
}

console.log(fibonacci(10)); // Output: 55