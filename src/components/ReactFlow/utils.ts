import Dagre from '@dagrejs/dagre';


import { SourceDataItem, } from '../../const';
import { CUSTOM_EDGE_KEY, CUSTOM_NODE_KEY, SPLIT } from './const';

interface GenNodeOptions {
  prefixId?: string;
  expanded?: boolean;
}

export const genNode = (sourceDataItem: SourceDataItem, options?: GenNodeOptions) => {

  return {
    id: options?.prefixId ? `${options.prefixId}${SPLIT}${sourceDataItem.id}` : sourceDataItem.id,
    type: CUSTOM_NODE_KEY,
    position: { x: 0, y: 0 },
    data: {
      ...sourceDataItem,
      expanded: options?.expanded ?? false,
    },
  }
}

interface GenEdgeProps {
  source: string;
  target: string;
  prefixId?: string;
}

export const genEdge = ({ source, target, prefixId }: GenEdgeProps) => {
  const targetId = `${source}${SPLIT}${target}`;
  const sourceId = prefixId || source;
  return { id: targetId, source: sourceId, target: targetId, type: CUSTOM_EDGE_KEY };
}

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
g.setGraph({
  rankdir: 'TB',
  nodesep: 150,
  ranksep: 150,
});

export const getLayoutedElements = (nodes, edges) => {

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    g.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 0,
      height: node.measured?.height ?? 0,
    }),
  );

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const position = g.node(node.id);
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      const x = position.x - (node.measured?.width ?? 0) / 2;
      const y = position.y - (node.measured?.height ?? 0) / 2;

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};