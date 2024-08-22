import { BaseEdge, getSmoothStepPath } from '@xyflow/react';

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY: targetY + 10,
    centerY: 116,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
    </>
  );
}
