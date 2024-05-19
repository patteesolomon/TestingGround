
// command interface
interface Command {
    execute: () => void;
    toString: () => string;
}

//reciver interface
interface Device {
    turnOff: () => void;
    turnOn: () => void;
    turnB: boolean;
}
export type {Command, Device}