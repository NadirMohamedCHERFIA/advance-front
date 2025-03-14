import React, { useCallback } from 'react';
 import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FcProcess } from "react-icons/fc";

import { AiOutlineDatabase } from "react-icons/ai";


const initialNodes = [
  { id: '1', position: { x: 100, y: 100 }, data: { label: 'Getting Data' } , style:{backgroundColor:"#1bb495",color:"white"}},
  { id: '2', position: { x: 200, y: 150 }, data: { label: 'Formatting' } , style:{backgroundColor:"#1bb495",color:"white"}},
  { id: '3', position: { x: 300, y: 200 }, data: { label: 'Creating connections'} , style:{backgroundColor:"#1bb495",color:"white"}},
  { id: '4', position: { x: 500, y: 350 }, data: { label: 'Listing Shop services'} , style:{backgroundColor:"#b41b93",color:"white"}},
  { id: '5', position: { x: 500, y: 450 }, data: { label: 'Listing used parts'} , style:{backgroundColor:"#b41b93",color:"white"}},
  { id: '6', position: { x: 500, y: 550 }, data: { label: 'Listing SO'} , style:{backgroundColor:"#b41b93",color:"white"}},
  { id: '7', position: { x: 700, y: 450 }, data: { label: 'Check if NEW/USED'} , style:{backgroundColor:"#1b8eb4",color:"white"}},
  { id: '8', position: { x: 900, y: 600 }, data: { label: 'Creating a summary'} , style:{backgroundColor:"#9cba17",color:"white"}},
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2',animated: true },
  { id: 'e2-3', source: '2', target: '3',animated: true },
  { id: 'e3-4', source: '3', target: '4',animated: true },
  { id: 'e3-5', source: '3', target: '5',animated: true },
  { id: 'e3-6', source: '3', target: '6',animated: true },
  { id: 'e5-7', source: '5', target: '7',animated: true },
  { id: 'e7-8', source: '7', target: '8',animated: true },
];

const Process = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return (
    <div className="" style={{marginTop:"110px"}}>
      <div className="fs-1 text-light text-center fw-bold w-100 mb-1 d-flex justify-content-center align-items-center gap-2 pl-5">
        <FcProcess/> 
        <h3 className='fs-1 fw-bold'>Process</h3>
      </div>
      <div style={{ width: '100vw', height: '70vh'}}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          style={{backgroundColor:""}}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} fitView />
        </ReactFlow>
      </div>
    </div>
  )
}

export default Process

