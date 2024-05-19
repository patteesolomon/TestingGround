import { LeaveHandler } from "./LeaveHandler";
import { Leave } from "./Leave";
import ReasonType from "./ReasonType";
export class Manager extends LeaveHandler {

    public applyLeave(leave: Leave):String {

        //Only Manager has the authority to approve more than 21 days
        if (leave.getNumberOfDays() > 21) {
            //Employee tier should be 2 or above & reason type should be "Special" to get approved
            if (leave.getEmpTier() <= 2 && leave.getReason() == ReasonType.SPECIAL) {
                return "Your leave days has been APPROVED by Manager";
            }
        }
            return "Your leave request has been DENIED by Manager";
    }
}