/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */
interface Mediator {
    notify(sender: object, event: string): void;
    callIn(sender: object, id: number): void;
}

// put command des pat in here 
// import other outter classes at the render layer
// import canvas here
// use canvas here

/**
 * Concrete Mediators implement cooperative behavior by coordinating several
 * components.
 */
class ConcreteMediator implements Mediator {
    private component1: Component1;

    private component2: Component2;

    private comp3: Comp3;

    constructor(c1: Component1, c2: Component2, c3: Comp3) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
        this.comp3 = c3;
        this.comp3.setMediator(this);
    }
    callIn(sender: object, id: number): void {
       if (sender == null) {
            console.log('this thing is null add data here');
       }
       else{
            this.notify(sender, id.toString());
       }
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component2.doC();
        }

        if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            this.component1.doB();
            this.component2.doC();
        }
    }

    render(){
        return(
            <div></div>
        )
    } 
        
}

/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 */
class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

/**
 * Concrete Components implement various functionality. They don't depend on
 * other components. They also don't depend on any concrete mediator classes.
 */
class Component1 extends BaseComponent {
    public doA(): void {
        
        console.log('Component 1 does A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('Component 1 does B.');
        this.mediator.notify(this, 'B');
    }
    
    render(){
        return(
            <div></div>
        )
    } 
        
}

class Comp3 extends BaseComponent {
    public doC(): void {
        console.log('Component 2 does C.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('Component 2 does D.');
        this.mediator.notify(this, 'D');
    }
    render(){
        return(
            <div></div>
        )
    } 
    
}

class Component2 extends BaseComponent {
    public doC(): void {
        console.log('Component 2 does C.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('Component 2 does D.');
        this.mediator.notify(this, 'D');
    }

    render(){
        return(
            <div></div>
        )
    } 
        
}

/**
 * The client code.
 */
const c1 = new Component1();
const c2 = new Component2();
const c3 = new Comp3();
const mediator = new ConcreteMediator(c1, c2, c3);

console.log('Client triggers operation A.');
c1.doA();
console.log(mediator.callIn(c1, 8));
console.log(mediator.callIn(c3, 8));
console.log('Client triggers operation D.');
c2.doD();

export {Comp3, Component1, Component2, BaseComponent, ConcreteMediator}