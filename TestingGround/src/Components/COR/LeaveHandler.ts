import { Leave } from "./Leave";
abstract class LeaveHandler {
    public setSuperVisor(superVisor:LeaveHandler):void {
        superVisor = superVisor;
    }

    public abstract applyLeave(leave :Leave):String;
}
export {LeaveHandler}