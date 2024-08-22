import React from 'react';
import { SourceDataItem } from '../../../const';
import { genEdge, genNode } from '../utils';
import { getDefaultStore } from 'jotai';
import { edgesAtom, nodesAtom } from '../../../atom';


const store = getDefaultStore();

export const useNodesAndEdges = (sourceData: SourceDataItem[]) => {

  const nodes = React.useMemo(() => {
    const nodesInner = sourceData.map(v => {
      const children = v.children!.map(v2 => genNode(v2, {
        prefixId: v.id
      }))
      return [genNode(v, {
        expanded: true
      }), ...children];
    });
    store.set(nodesAtom, nodesInner.flat(1));
    return nodesInner;
  }, [sourceData]);

  const edges = React.useMemo(() => {
    const initialEdges = [
      genEdge({
        source: 'companyId',
        target: 'buId_1',
      }),
      genEdge({
        source: 'companyId',
        target: 'buId_2',
      }),
      genEdge({
        source: 'companyId',
        target: 'buId_3',
      }),
      genEdge({
        source: 'companyId',
        target: 'buId_4',
      }),
    ];
    store.set(edgesAtom, initialEdges);
    return initialEdges;
  }, []);

  return {
    nodes,
    edges,
  };
}