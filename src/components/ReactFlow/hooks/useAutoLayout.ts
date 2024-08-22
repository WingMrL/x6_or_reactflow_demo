import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { getLayoutedElements } from "../utils";
import { useAtom } from "jotai";
import { edgesAtom, nodesAtom } from "../../../atom";


export const useAutoLayout = () => {

  const { fitView } = useReactFlow();

  const [nodes, setNodes] = useAtom(nodesAtom);
  const [edges, setEdges] = useAtom(edgesAtom);

  const onLayout = useCallback(
    ({ realTimeNodes, realTimeEdges } = {}) => {

      const nodesInner = realTimeNodes || nodes;
      const edgesInner = realTimeEdges || edges;

      const layouted = getLayoutedElements(nodesInner, edgesInner);

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);

      // window.requestAnimationFrame(() => {
      //   fitView({
      //     duration: 500
      //   });
      // });
      setTimeout(() => {
        fitView({
          duration: 500,
        });
      }, 150);
    },
    [setEdges, setNodes, fitView, nodes, edges]
  );

  return onLayout;
}