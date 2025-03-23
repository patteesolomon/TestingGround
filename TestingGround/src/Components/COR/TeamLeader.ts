import { LeaveHandler } from "./LeaveHandler";
import { Leave } from "./Leave";
export class TeamLeader extends LeaveHandler {
    public applyLeave(leave:Leave) :String{

        //"reasonType" is not going to be consider under TeamLeader & ProjectLeader
        //Team Leader can approve up to 7 days, otherwise it will pass to the Project Leader
        if(leave.getNumberOfDays() <= 7){
            //Employee tier should be 4 or above to get approved
            if(leave.getEmpTier() <= 4){
                return "Your leave days has been APPROVED by TeamLeader";
            }else{
                return "You employee Tier level is too low for request " + 
                leave.getNumberOfDays() + " days";
            }
        }else{
            return "Too high of a request? Add more.. APPROVED BY KNUX";
        }
    }
}
