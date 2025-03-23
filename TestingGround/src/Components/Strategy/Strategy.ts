interface Strategy{
    a: number;
    b: number;
    execute() : number;
}

class ConcreteStrategyAdd implements Strategy{
    a : number;
    b : number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    execute(): number {
        return this.a + this.b;
    }
}

class ConcreteStrategySubtract implements Strategy{
    a : number;
    b : number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    execute(): number {
        return this.a - this.b;
    }
}

class ConcreteStrategyMultiply implements Strategy{
    a : number;
    b : number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    execute(): number {
        return this.a * this.b;
    }
} 

class ContextS{ 
    a : number = 0;
    b : number = 0;
    strate : Strategy | undefined;

    setStrat(strat: Strategy){
        this.a = strat.a;
        this.b = strat.b; 
        this.strate = strat;
    }

    execute() {
        return (this.strate!=null)? this.strate.execute() : this.setStrat(new ConcreteStrategyAdd(0, 0));
    }
}


export type {Strategy}
export {ConcreteStrategyAdd, ConcreteStrategyMultiply, ConcreteStrategySubtract, ContextS}