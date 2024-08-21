import "./App.css";
import React from "react";
import CustomNode from "./components/CustomNode";
import { ReactFlow } from "@xyflow/react";
import '@xyflow/react/dist/style.css';

import { sourceData } from "./const";

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

function App() {
  const nodeTypes = React.useMemo(() => ({ customNode: CustomNode }), []);

  const nodes = React.useMemo(() => {
    const firstLevel = sourceData[0];
    const secondLevel1 = sourceData[0].children![0];
    const secondLevel2 = sourceData[0].children![1];
    return [
      {
        id: firstLevel.id,
        type: 'customNode',
        position: { x: 0, y: 0 },
        data: firstLevel, 
      },
      {
        id: secondLevel1.id,
        type: 'customNode',
        position: { x: 0, y: 100 },
        data: secondLevel1, 
      },
      {
        id: secondLevel2.id,
        type: 'customNode',
        position: { x: 200, y: 100 },
        data: secondLevel2, 
      }
    ]
  }, []);

  const edges = React.useMemo(() => {
    const initialEdges = [
      { id: 'edge-1', source: '1', target: '1-1'},
      { id: 'edge-2', source: '1', target: '1-2'},
    ];
    return initialEdges;
  }, []);

  return <div className="app">
    <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} style={rfStyle} fitView />
  </div>;
}

export default App;
