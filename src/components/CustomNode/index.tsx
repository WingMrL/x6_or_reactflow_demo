import React from "react";
import styles from "./index.module.scss";

import { Handle, Position } from "@xyflow/react";

const CustomNode = ({ data }) => {
  console.log("data: ", data);
  const hasChildren = data.children?.length > 0;
  const iconText = data.expanded ? '-' : '··';
  return (
    <div className={styles["handle-container"]}>
      <Handle type="target" position={Position.Top}></Handle>
      <div className={styles["handle-body"]}>
        <div className={styles["title"]} style={{ background: data.color }}>
          {data.label}
        </div>
        <div className={styles["text"]}> 负责人: {data.id}</div>
      </div>
      {
        hasChildren &&
        <div className={styles['expand-wrapper']}>
          <div className={styles['line']}></div>
          <div className={styles['icon']}>{iconText}</div>
        </div>
      }
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
