import React from 'react';
import { BaseEdge, getStraightPath } from '@xyflow/react';

interface CustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

const CustomEdge: React.FC<CustomEdgeProps> = ({ id, sourceX, sourceY, targetX, targetY }) => {
  // Adjust the source and target positions for the edge path
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY: sourceY + 10, // Adjust for source handle offset
    targetX,
    targetY: targetY - 10, // Adjust for target handle offset
  });

  return <BaseEdge id={id} path={edgePath} />;
};

export default CustomEdge;
