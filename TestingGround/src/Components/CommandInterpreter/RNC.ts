import { Device, Command } from "./CommandII";

class TurnOffCommand implements Command{
    private device: Device;
    constructor(Dev : Device)
    {
        this.device = Dev;
    }
    toString()
    {
        return "Robot OFF"
    }
    execute()
    {
        this.device.turnOff();
        //console.log("Robot OFF");
    }
}

class TurnOnCommand implements Command {
    private device: Device;
    constructor(Dev: Device) {
        this.device = Dev;
    }

    toString() {
        return "Robot ON"
    }

    execute() {
        this.device.turnOn();
        //console.log("Robot ON");
    }
}

// device type Robot reciver class
class Robot implements Device {
    public turnB: boolean = false;
    public shc: number = 0;
    turnOn() {
        this.turnB = true;
    }

    turnOff() {
        this.turnB = false;
    }

    shoot() {
        ++this.shc;
    }

    reLoad() {
        this.shc = 0;
    }
}

// Invoker Class
class RobotControl {
    private cmd: Command | undefined;

    public controlRobot()
    {
        this.cmd?.execute();
    }

    public setCmd(d: Command) {
        this.cmd = d;
    }

    public execute() {
        this.cmd?.execute();
    }
}

// concrete cmd class
class CommandOn implements Command {
    private device: Device | undefined;
    toString() {
        return "Commanding"
    }
    public TurnOnCommand(device: Device) {
        this.device = device;
        this.device.turnB = true;
        //onsole.log("Robot On")
    }

    public TurnOffCommand(dev: Device)
    {
        this.device = dev;
        this.device.turnB = false;
        //console.log("Robot OFF");
    }

    public execute() {
        //console.log("Robot Control");
        this.device?.turnOn;
    }
}

class OpenFire implements Command {
    private device: Device | undefined;
    private shc: number | null | undefined | 0;

    public Fire(deviceI: Device) {
        this.device = deviceI;
        //console.log("Robot Fires");
    }

    toString() {
        return "Shoots";
    }

    public execute() {
        this.shc ? + 1 : null;
        this.device?.turnOn();
        //console.log("Robot Fires and is On");
    }
}

class EventsPrint implements Command{
    private arr: string[];
    private s: string;

    constructor()
    {
        this.arr = [];
        this.s = '';
    }

    public addTask(s: Command)
    {
        this.arr?.push(s.toString());
    }
    public toString()
    {
        return this.s;
    }
    // string send browser
    public execute() {
        this.runLoop();
        console.log("Robot Events");
    }

    public runLoop()
    {
        if (this.arr) {
            this.arr.forEach(element => {
                // code logic here
                this.s += ' ' + element;
            });
        }
    }

    public getArr()
    {
        return this.arr;
    }
}


export { CommandOn, Robot, RobotControl, OpenFire, TurnOffCommand, TurnOnCommand, EventsPrint }