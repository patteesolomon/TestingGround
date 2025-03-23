// Memento pattern concept
// https://sbcode.net/typescript/memento/#source-codeclass Memento {
    // A container of state

// this also has Refactoring Guru's code mixed in with it
class Memento {
    state: string
    constructor(state: string) {
        this.state = state
    }
}

class Originator {
    // The Object in the application whose state changes    
    #state: string = ""  
    constructor() {
        this.state = ''
    }    public get state(): string {
        return this.#state
    }    public set state(value: string) {
        this.#state = value
        console.log(`Originator: Set state to '${value}'`)
    }    public get memento(): Memento {
        console.log(
            'Originator: Providing Memento of state to caretaker.'
        )
        return new Memento(this.#state)
    }    
    public set memento(value: Memento) {
        this.#state = value.state
        console.log(
            `Originator: State after restoring from Memento: '${
                this.#state
            }'`
        )
    }
}

class CareTaker {
    // Guardian. Provides a narrow interface to the mementos 
    #originator: Originator
    #mementos: Memento[] 
    constructor(originator: Originator) {
        this.#originator = originator
        this.#mementos = []
    }    
    create() {
        // Store a new Memento of the Originators current state
        console.log(
            'CareTaker: Getting a copy of Originators current state'
        )
        const memento = this.#originator.memento
        this.#mementos.push(memento)
    }    
    restore(index: number) {
        // Replace the Originators current state with the state
        // stored in the saved Memento
        console.log('CareTaker: Restoring Originators state from Memento')
        const memento = this.#mementos[index]
        this.#originator.memento = memento
    }
    showHistory(): string[] {
        let str = [""];
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.#mementos) {
            console.log(memento.state);
            str.push(memento.state);
        }
        return str;
    }
    undo(): void {
        if (!this.#mementos.length) {
            return;
        }
        const mementoc = this.#mementos.pop();
        let indexCII = 0;
        // check index
        for (let index = 0; index < this.#mementos.length; index++) {
            if(this.#mementos[index] == mementoc){
                indexCII == index-1;
            }
        }
        console.log(`Caretaker: Restoring state to: ${mementoc?.state}`);
        this.restore(indexCII);
    }
}

export {CareTaker as Caretaker, Originator}