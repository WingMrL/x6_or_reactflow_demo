import styles from "./index.module.scss";

import { Handle, Position } from "@xyflow/react";
import { SourceDataItem, ECardColor, ECardTextColor } from "../../const";
import { useCallback } from "react";
import { genEdge, genNode } from "../ReactFlow/utils";
import { useAutoLayout } from "../ReactFlow/hooks/useAutoLayout";
import { getDefaultStore } from "jotai";
import { edgesAtom, nodesAtom } from "../../atom";

const store = getDefaultStore();
interface CustomNodeData extends SourceDataItem {
  expanded: boolean;
}

const CustomNode = ({ data, id }: { data: CustomNodeData; id: string }) => {
  const childrenLen = data.children?.length || 0;
  const hasChildren = childrenLen > 0;

  const iconText = data.expanded ? "-" : "··";

  const onLayout = useAutoLayout();

  const handleExpandIconClick = useCallback(() => {
    const oldNodes = store.get(nodesAtom);
    const oldEdges = store.get(edgesAtom);
    let newNodes;
    if (data.expanded) {
      newNodes = oldNodes;
    } else {
      newNodes = [...oldNodes, ...data.children!.map((v) => genNode(v, { prefixId: data.id }))];
    }
    let newEdges;
    if (data.expanded) {
      newEdges = oldEdges;
    } else {
      newEdges = [
        ...oldEdges,
        ...data.children!.map((v) =>
          genEdge({
            source: data.id,
            target: v.id,
            prefixId: id,
          })
        ),
      ];
    }
    data.expanded = !data.expanded;
    onLayout({
      realTimeNodes: newNodes,
      realTimeEdges: newEdges,
    });
  }, [data, onLayout]);

  return (
    <div className={styles["handle-container"]}>
      <Handle type="target" position={Position.Top}></Handle>
      <div className={styles["handle-body"]}>
        <div className={styles["title"]} style={{ background: ECardColor[data.level], color: ECardTextColor[data.level] }}>
          {data.label}
        </div>
        <div className={styles["text"]}> 负责人: {data.owner}</div>
      </div>
      {hasChildren && (
        <div className={styles["expand-wrapper"]} onClick={handleExpandIconClick}>
          <div className={styles["line"]}></div>
          <div className={styles["icon"]}>{iconText}</div>
        </div>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
