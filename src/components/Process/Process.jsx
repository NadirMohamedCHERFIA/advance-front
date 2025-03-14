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
 
const initialNodes = [
  { id: '1', position: { x: 100, y: 100 }, data: { label: 'Getting Data' } },
  { id: '2', position: { x: 200, y: 200 }, data: { label: 'Formatting' } },
  { id: '3', position: { x: 300, y: 300 }, data: { label: 'Creating connections' } },
  { id: '4', position: { x: 500, y: 350 }, data: { label: 'Checking Warranties' } },
  { id: '5', position: { x: 500, y: 450 }, data: { label: 'Checking if user/New' } },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2',animated: true },
  { id: 'e2-3', source: '2', target: '3',animated: true },
  { id: 'e3-4', source: '3', target: '4',animated: true },
  { id: 'e3-5', source: '3', target: '5',animated: true }
];

const Process = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return (
    <div className="" style={{marginTop:"120px"}}>
      <div className="fs-3 text-light text-center fw-bold w-100">
        ADVance process
      </div>
      <div style={{ width: '100vw', height: '100vh'}}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
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


// import React, { useCallback } from 'react';

 
// import '@xyflow/react/dist/style.css';
 
// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
// export default function App() {

 
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//       >
//         <Controls />
//         <MiniMap />
//         <Background variant="dots" gap={12} size={1} />
//       </ReactFlow>
//     </div>
//   );
// }