import { ProfileIterator } from "./ProfileIterator";
import { Iterinter } from "./interinter";
import { Iterator } from "./Iterator";

export class NameLand implements Iterator<number>{
    current(): number {
        throw new Error("Method not implemented.");
    }
    next(): number {
        throw new Error("Method not implemented.");
    }
    key(): number {
        throw new Error("Method not implemented.");
    }
    valid(): boolean {
        throw new Error("Method not implemented.");
    }
    rewind(): void {
        throw new Error("Method not implemented.");
    }
    
}