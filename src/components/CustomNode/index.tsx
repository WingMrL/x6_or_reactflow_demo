import React from 'react';
import styles from './index.module.scss';

import { Handle, Position } from '@xyflow/react';


const CustomNode = ({ data, isConnectable }) => {
  console.log('isConnectable: ', isConnectable);
  console.log('data: ', data);
  return (
    <div className={styles['handle-container']}>
    <Handle type="target" position={Position.Top}></Handle>
    <div className={styles['handle-body']}>
      <div className={styles['title']} style={{ background: data.color }}>{data.label}</div>
      <div className={styles['text']}> 负责人: {data.id}</div>
    </div>
    <Handle type="source" position={Position.Bottom}>
      <div className={styles['bottom-handle']}>
        <div className={styles['line']}></div>
        <div className={styles['handle-button']}></div>
      </div>
    </Handle>
    </div>
  );
}

export default CustomNode;