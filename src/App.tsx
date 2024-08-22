import "./App.css";
import React from "react";
import CustomNode from "./components/CustomNode";
import CustomEdge from "./components/CustomEdge";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { sourceData } from "./const";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

function App() {
  const nodeTypes = React.useMemo(() => ({ customNode: CustomNode }), []);
  const edgeTypes = React.useMemo(() => ({ customEdge: CustomEdge }), []);

  const nodes = React.useMemo(() => {
    const firstLevel = sourceData[0];
    const secondLevel1 = sourceData[0].children![0];
    const secondLevel2 = sourceData[0].children![1];
    return [
      {
        id: firstLevel.id,
        type: "customNode",
        position: { x: 0, y: 0 },
        data: {
          ...firstLevel,
          expanded: true,
        },
      },
      {
        id: secondLevel1.id,
        type: "customNode",
        position: { x: 0, y: 150 },
        data: {
          ...secondLevel1,
          expanded: false,
        },
      },
      {
        id: secondLevel2.id,
        type: "customNode",
        position: { x: 200, y: 150 },
        data: {
          ...secondLevel2,
          expanded: false,
        },
      },
    ];
  }, []);

  const edges = React.useMemo(() => {
    const initialEdges = [
      { id: "edge-1", source: "1", target: "1-1", type: 'customEdge' },
      { id: "edge-2", source: "1", target: "1-2", type: 'customEdge' },
    ];
    return initialEdges;
  }, []);

  return (
    <div className="app">
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} style={rfStyle} fitView edgeTypes={edgeTypes} />
    </div>
  );
}

export default App;
