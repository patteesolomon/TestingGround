import { Context } from "./Interpreter"

interface IInterpreter {

}

interface Expression {
    interpret: (context: Context) => number;
}

export type {IInterpreter, Expression}