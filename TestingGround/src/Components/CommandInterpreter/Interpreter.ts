import { Expression, IInterpreter } from "./InterpFace";

/***
 * 
 *                  Context
 *                      ^
 *                      |
 *                     CLient
 *                      |
 *                      \/      Addition Exp
 * Terminal Exp ---->  Exp < ---- left exp
 * Number Exp         "Exp" < ---  right exp
 *                      |
 *                      \/
 *                 Abstract Exp
 */



class NumberExpression implements Expression {
    private number: number;

    constructor(num: number) {
        this.number = num;
    }

    interpret(cont: Context) {
        return this.number
    }
}

class AdditionExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    interpret(context: Context) {
        return this.left.interpret(context) +
            this.right.interpret(context);
    }
}

class MultiplicationExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }
    interpret(context: Context) {
        return this.left.interpret(context) * this.right.interpret(context);
    }
}

class Interpreter {
    private context: Context | undefined;

    constructor(contexte: Context) {
        this.context = contexte;
    }

    interpret(expression: string) {
        let expressionTree = this.buildExpressionTree(expression);

        return this.context ? expressionTree.interpret(this.context) : undefined;
    }

    buildExpressionTree(expression: string): Expression {
        //*
        //* this thing already parses these things for simplicity's sake
        //* /
        return new MultiplicationExpression(
            new NumberExpression(2),
            new NumberExpression(5)
        )
    }
}

class Context {
    // any global info needed for interpretation
}

export { Context, Interpreter, MultiplicationExpression, AdditionExpression, NumberExpression };