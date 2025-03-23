import './App.css'; 
import useCanvas from './Components/Canvas/useCanvas';
import { CommandOn, Robot, RobotControl, OpenFire, 
  TurnOffCommand, TurnOnCommand, EventsPrint} from './Components/CommandInterpreter/RNC'
import { DFSG } from './Components/unitTest/DFS';
import { LinkedList } from './Components/LinkedList/LinkedList';
import { LNode } from './Components/LinkedList/LinkedList'; 
import { Context, Interpreter } from './Components/CommandInterpreter/Interpreter'; 
import {CustomList, ListIterator} from "./Components/Iterator/Iterator";
import RemoveElement from './Components/unitTest/RemoveElement';
import { Caretaker, Originator } from './Components/Memento/Memento'; 
import { searchInsert } from './Components/unitTest/Search Insert Position';
import { Strategy, ContextS, ConcreteStrategyAdd, ConcreteStrategyMultiply, ConcreteStrategySubtract } from './Components/Strategy/Strategy';
import React, {useEffect, useState} from 'react';
const Thif = () => {

  //const astTr = new TreeTraverse(ast);
  const nodesT: never[] = [];
    let l1 = new LNode(1);
    let l3 = new LNode(3);
    let l2 = new LNode(6);
    let lOne = new LinkedList<number>((l) => l !== l2.data);
    
    lOne.append(4);
    lOne.head = l1;
    lOne.head.next = l2;
    lOne.head.next.next = l3;

    const drawc = (context: { shadowColor: string; stroke: () => void; lineTo: (arg0: number, arg1: any) => void; } , count: any) => {
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
    return (
      <>
        <div>
          {/* Bullretino */}
          <canvas ref={canvasRef} width={500} height={500} />
        </div>
      </> 
    )
  }

// command des pat calls 
function Tj() {
  // Create Toby
  let Toby ;
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
      {
        res
      } 
  )
}

function IterCall() {
  // credit to refactoring.guru

  const collection  = new CustomList();
  const iterator = new ListIterator(collection,false);
  collection.add(12);
  collection.add(3);
  collection.add(32);
  let sT = '';
  let rT = '';

  console.log('Straight traversal: ');

  while (iterator.valid()) {
    // console.log(iterator.next());
    sT += '\n'+ iterator.next();

  }
  console.log('reverse traversal');
  
  const reverseIterator = collection.getReverseIterator();
  while(reverseIterator.valid())
    {
      // console.log(reverseIterator.next());
      rT += '\n'+ reverseIterator.next();
    }

  return(
    <>
      <div>
        Straight Traversal : <br />
        {
          sT
        }
      </div>
      <div>
        Reverse Traversal : <br />
        {
          rT
        }
      </div>
    </>
  )
}

function remEl (){
  let arr = [3,6,7,2,6,2];
  let val = 2;
  return [RemoveElement.RemoveElement(arr,val)];
} 

const CareCall = () =>{
    let [state, setState] = useState<string>("")  
    let [output, setOutput] = useState<string>("")  

    let caretara = new Originator(); // leave alone for the most part
    let careSue = new Caretaker(caretara);
  
    // input stuff
    let saveInput = async() => {
      const inputElem = document.getElementById('jin');
      const val = inputElem.value
      setState(val);
      // output
      output = "naming task as ... " + state;
    }

    // do something 

    let doSomething = () =>
    { 
      caretara.state = state;
      careSue.create(); 
      console.log(`doing.. ${caretara.state}`);
    }

    // backup button
    let buttonBackupFunc = () =>{
      careSue.restore(0);
      output = " backed up recent TODO..."
      console.log(caretara.state);
      const inputElem = document.getElementById('jin') ;
      inputElem.value = caretara.state;
      setState(caretara.state);
    };  
    // display mem
    let buttonDisplayFunc = () => { 
      var memory = careSue.showHistory()
      var outputElem = document.getElementById('output')  ;
      let val = outputElem.innerHTML;
      let arr = [''];
      for (let index = 0; index < memory.length; index++) { 
        arr[index] = memory[index];
      }
      setOutput(val);
      console.log(arr);
      outputElem.innerText = output;
    }
    // go back
    const buttonGoback = () => {
      careSue.undo();
    }

return (
  <>
    <label className='input Text'>
      What are we doing?
      <form name = 'careform'>
        <br />
        <input name='saveText' id='jin' type="text" value={state} onChange={(e) => setState(e.target.value)}/>
        <br />
        <label>Name Todo Task</label>
        <button type="button" id='saveButton' onClick={saveInput}>NewTask</button>
        <br />
        <label>Queue Todo Task</label>
        <button type='button' onClick={doSomething}>DO Task!</button>
        <br />
      </form>
      <br />
        {/* <button onSubmit={buttonGoback}>go back one</button> */}
        <br />
        {/* <button onSubmit={buttonBackupFunc}>restore data to beginning</button> */}
        <br />
        {/* <button onSubmit={buttonDisplayFunc}>ShowHistory</button> */}
    </label>
    <br />
    <br />
    {/* Output :<p id="output"></p> */}
  </>
  )
}

const StratCall = () : void => {
  

  // late addons were easy
  class Divide implements Strategy{
    a : number;
    b : number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    execute(): number {
      return this.a / this.b;
    } 
  }

  class Bitw implements Strategy{
    a : number;
    b : number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    execute(): number {
      return this.a ^ this.b;
    } 
  }
  
  class Exp implements Strategy{
    a : number;
    b : number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    execute(): number {
      return this.a ** this.b;
    } 
  }
  
  let cont = new ContextS();  
  let exe = (choice: number, lel: number, lelT: number) => {
    switch (choice) {
      case 0: 
        return cont.setStrat(new Exp(lel, lelT)); 
      case 1:
        return cont.setStrat(new Bitw(lel, lelT)); 
      case 2:
        return cont.setStrat(new Divide(lel, lelT)); 
      default:
        return cont.setStrat(new ConcreteStrategyAdd(lel, lelT));
    } 
  }  
  exe(2, 4, 4);
  return (
    <>
      {cont.execute()}
    </>
  )
}
// search insert
const SIp = (a = [1]) =>
{
  return searchInsert(a, 3)
}

// none of these errors matter.
// just test it all.
function App() { 
  return (
    <>
      <div className="card">
        <StratCall/>
      </div>
    </>
  )
}

export default App