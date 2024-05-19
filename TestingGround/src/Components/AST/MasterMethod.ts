class MasterMethod {
    T: number;
    n: number;
    aT: number;
    b: number;
    constructor(T: number, n: number, aT: number, b: number) {
        this.T = T;
        this.n = n;
        this.aT = aT;
        this.b = b;
    }

    add()
    {
        
    }


    /*
    What this sum looks like depends on how the asymptotic growth of f(n) compares to the asymptotic growth of the number of leaves. There are three cases:

    Case 1: f(n) is O(nlogba − ε). Since the leaves grow faster than f, asymptotically all of the work is done at the leaves, so T(n) is Θ(nlogb a).

    Case 2: f(n) is Θ(nlogba). The leaves grow at the same rate as f, so the same order of work is done at every level of the tree.
    The tree has O(log n) levels, times the work done on one level, yielding T(n) is Θ(nlogb a log n).

    Case 3: f(n) is Ω(nlogba + ε). In this case f grows faster than the number of leaves, which means that asymptotically the total amount of work is dominated by the work done at the root node. For the upper bound, we also need an extra smoothness condition on f in this case, namely that af(n/b) ≤ cf(n) for some constant c < 1 and large n. In this case T(n) is Θ(f(n)).
    */
}