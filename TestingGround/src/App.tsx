import './App.css';
import useCanvas from './Components/Canvas/useCanvas';
import { CommandOn, Robot, RobotControl, OpenFire, TurnOffCommand, TurnOnCommand, EventsPrint} from './Components/CommandInterpreter/RNC'
import { DFSG } from './Components/unitTest/DFS';
import { LinkedList } from './Components/LinkedList/LinkedList';
import { LNode } from './Components/LinkedList/LinkedList';
import { TreeNode } from './Components/AST/TreeNode';
import {  Context, Interpreter, MultiplicationExpression, AdditionExpression, NumberExpression } from './Components/CommandInterpreter/Interpreter';
import { IInterpreter } from './Components/CommandInterpreter/InterpFace';
const Thif = () => {

  //const astTr = new TreeTraverse(ast);
  const nodesT :TreeNode[] = [];

    let l1 = new LNode(1);
    let l3 = new LNode(3);
    let l2 = new LNode(6);
    let lOne = new LinkedList<number>((l) => l !== l2.data);
    
    lOne.append(4);
    lOne.head = l1;
    lOne.head.next = l2;
    lOne.head.next.next = l3;

    const drawc = (context: CanvasRenderingContext2D, count: number) => {
      //astTr.traverse(nodesT[0]);
      
      context.shadowColor = "light-blue";
      let y = lOne.forEachVal();
      // let x = astTr;
      let id = 0;
      for (let i in nodesT)
      {
        context.stroke();
        context.lineTo(id, y[id]);
        ++id;
      }
      
    }

    const canvasRef = useCanvas(drawc);

  return(
    <>
      <div>
        {/* Bullretino */}
        <canvas ref={canvasRef} width={500} height={500} />
      </div>
    </>
  )
}

const Tj = () => {
  // Create Toby
  let Toby: Robot;
  Toby = new Robot();
  // Create command objects
  let turnOff = new TurnOffCommand(Toby);
  let turnOn = new TurnOnCommand(Toby);
  let cmdOn = new CommandOn();
  let tO = new OpenFire();

  cmdOn.execute();

  // event Control
  let ev = new EventsPrint();
  
  // create remote control
  let rc = new RobotControl();

  //set and execute 
  rc.controlRobot();

  // set and execute commands
  ev.addTask(turnOn);
  rc.setCmd(turnOn);
  rc.execute();

  ev.addTask(turnOff);
  rc.setCmd(turnOff);
  rc.execute();

  ev.addTask(tO);
  rc.setCmd(tO);
  rc.execute();

  const h = new DFSG(5);
  h.addEdge(0, 1);
  h.addEdge(0, 2);
  h.addEdge(1, 2);
  h.addEdge(2, 0);
  h.addEdge(3, 0);
  h.addEdge(4, 4);
  h.addEdge(2, 5);
  h.addEdge(4, 9);
  h.addEdge(3, 3);

  h.DFS(0);
  
  ev.execute();
  let ec = ev.toString();

  let u = h.strnO();

  let expression = "2 * 5";

  let contxtInter = new Context();

  let inter = new Interpreter(contxtInter);

  let res = inter.interpret(expression);

  return (
    <>
      {
        res
      }
    </>
  )
}

function App() {
  return (
    <>
      <div className="card">
        <div>
          <Thif />
        </div>
        <>
          <Tj/>
        </>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App