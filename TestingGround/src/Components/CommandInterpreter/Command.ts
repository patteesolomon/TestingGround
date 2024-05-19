// written by Co-Pilot

// Receiver
class Light {
    turnOn() {
        console.log("Light is on");
    }

    turnOff() {
        console.log("Light is off");
    }
}

// Command interface
interface Command {
    execute(): void;
}

// Concrete command
class TurnOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

// Concrete command
class TurnOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

// Invoker
class RemoteControl {
    private command: Command | undefined;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton() {
        if (this.command) {
            this.command.execute();
        }
    }
}

// Usage
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // Output: Light is on

remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // Output: Light is off