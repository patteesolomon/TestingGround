import { TeamLeader } from "./TeamLeader";
import { HR } from "./HR";
import { ProjectLeader } from "./ProjectLeader";
import { Leave } from "./Leave";
import ReasonType from "./ReasonType";
import { Manager } from "./Manager";
import { ReactNode } from "react";
import React from "react";
/*
    Chain of Responsibility Pattern
    ===============================
    The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.

    // Coupling
    In software engineering, the coupling is the degree of interdependence between software modules. Two modules that are tightly coupled are strongly dependent on each other. However, two modules that are loosely coupled are not dependent on each other. Uncoupled modules have no interdependence at all within them.
*/

// create a command interface

export default class LeaveReqApp extends React.Component{
    private teamLeader: TeamLeader = new TeamLeader();
    private projectLeader: ProjectLeader = new ProjectLeader();
    private hr: HR = new HR();
    private manager: Manager = new Manager();

    render(): ReactNode {
        this.teamLeader.setSuperVisor(this.projectLeader);
        this.projectLeader.setSuperVisor(this.hr);
        this.hr.setSuperVisor(this.manager);
        const leave1 = new Leave(5,4, ReasonType.REGULAR);

        const leave2 = new Leave(5,5, ReasonType.REGULAR);

        const leave3 = new Leave(12,3, ReasonType.REGULAR);
        const leave4 = new Leave(18,2, ReasonType.CRITICAL);

        const leave5 = new Leave(18,2, ReasonType.REGULAR);

        const leave6 = new Leave(30,2, ReasonType.SPECIAL);
        return(
            <>
                <p>
                    {this.teamLeader.applyLeave(leave1)}
                </p>
                <p>
                    {this.projectLeader.applyLeave(leave2)}
                </p>
                <p>
                    {this.hr.applyLeave(leave3)}
                </p>
                <p>
                    {this.teamLeader.applyLeave(leave4)}
                </p>
                <p>
                    {this.hr.applyLeave(leave5)}
                </p>
                <p>
                    {this.teamLeader.applyLeave(leave6)}
                </p>
            </>
        )
    }
}