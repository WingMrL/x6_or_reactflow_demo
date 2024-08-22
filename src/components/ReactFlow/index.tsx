import React from "react";
import CustomNode from "../CustomNode";
import CustomEdge from "../CustomEdge";
import { ReactFlow, ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { SourceDataItem } from "../../const";
import { CUSTOM_EDGE_KEY, CUSTOM_NODE_KEY } from "./const";
import { useNodesAndEdges } from "./hooks/useNodesAndEdges";
import { useAutoLayout } from "./hooks/useAutoLayout";
import { useAtomValue } from "jotai";
import { edgesAtom, nodesAtom } from "../../atom";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

interface Props {
  sourceData: SourceDataItem[];
}

function ReactFlowCom({ sourceData }: Props) {
  const nodeTypes = React.useMemo(() => ({ [CUSTOM_NODE_KEY]: CustomNode }), []);
  const edgeTypes = React.useMemo(() => ({ [CUSTOM_EDGE_KEY]: CustomEdge }), []);

  useNodesAndEdges(sourceData);

  const nodes = useAtomValue(nodesAtom);
  const edges = useAtomValue(edgesAtom);

  const onLayout = useAutoLayout();

  React.useLayoutEffect(() => {
    onLayout();
  }, []);

  return <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} style={rfStyle} fitView edgeTypes={edgeTypes} />;
}

export default function ReactFlowComP({ sourceData }: Props) {
  return (
    <ReactFlowProvider>
      <ReactFlowCom sourceData={sourceData} />
    </ReactFlowProvider>
  );
}
