import { SNode } from './SNode';
import React, { useState } from 'react';
// todos: 
/*
    find a way to control traverse the tree
    have it become automated 
    with V-CELL based logic
    find a way to create output onto the browser
    and view: 
    all nodes on a graph
    all data contained if selected
    id numbers 
*/
const SNodeChaos = (name: string, id: number, data: []) => {

    const [inputValue, setInputValue] = useState('');
    const [nodeArr, setNodeArr] = useState([]); // this thing is a temp for your forgotten Nodes
    const [current, setCurrent] = useState({});
        
        // defined Node
    let def = new SNode(name, id, data);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddData = () => {
        // Add the inputValue to the data array
        // You can modify the logic here based on your requirements
        const newData = [...data, inputValue];
        def.addNodeData(newData);
        setInputValue('');
    };
    
    const outPut = () => {
        
    }
    return (
        // Placeholder expression
        <>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddData}>Add Data</button>
        </>
    );
}

export default SNodeChaos