import { useCallback, useMemo } from 'react';
import type { HoverInsertActions } from '../../../core/types';
import { isRow } from '../../../core/types';
import { useDropActions } from './dragDropActions';
import { useNodeAsHoverTarget, useNodeProps } from './node';
import { useResizeCell } from './nodeActions';
import { findSiblingRow } from './utils/findSiblingRow';

export const useFillRow = (nodeId: string) => {
  const actions = useDropActions(nodeId);
  const { cell, parentNodeId, direction } = useNodeProps(
    nodeId,
    (node, ancestors) => {
      const parent = isRow(ancestors?.[0]) ? ancestors?.[0] : null;
      const numberOfSiblings = parent?.cells.length ?? 0;
      const myIndexInParent = parent.cells.findIndex((c) => c.id === nodeId);
      const direction: keyof HoverInsertActions =
        myIndexInParent < Math.ceil(numberOfSiblings / 2) ? 'above' : 'below';
      return {
        cell: node,
        parentNodeId: parent?.id,
        direction,
      };
    }
  );

  const hoverTarget = useNodeAsHoverTarget(parentNodeId);

  return useMemo(() => {
    if (!hoverTarget) {
      return null;
    }
    return () => {
      actions[direction](cell, hoverTarget, 0);
    };
  }, [actions, hoverTarget, cell]);
};

export const useMoveNodeUp = (nodeId: string) => {
  const actions = useDropActions(nodeId);
  const { cell, previousRowId, isSameLevel } = useNodeProps(
    nodeId,
    (node, ancestors) => {
      const previousRow = findSiblingRow(nodeId, ancestors, 'previous');
      const isSameLevel =
        ancestors[1] && !isRow(ancestors[1])
          ? ancestors[1].rows?.some((r) => r.id === previousRow?.id)
          : false;

      return {
        cell: node,
        previousRowId: previousRow?.id,
        isSameLevel,
      };
    }
  );

  const hoverTarget = useNodeAsHoverTarget(previousRowId);

  return useMemo(() => {
    if (!hoverTarget) {
      return null;
    }
    return () => {
      if (isSameLevel) {
        // skip 1
        actions.above(cell, hoverTarget, 0);
      } else {
        actions.below(cell, hoverTarget, 0);
      }
    };
  }, [actions, hoverTarget, cell, isSameLevel]);
};

export const useMoveNodeDown = (nodeId: string) => {
  const actions = useDropActions(nodeId);
  const { cell, nextRowId, isSameLevel } = useNodeProps(
    nodeId,
    (node, ancestors) => {
      const nextRow = findSiblingRow(nodeId, ancestors, 'next');
      const isSameLevel =
        ancestors[1] && !isRow(ancestors[1])
          ? ancestors[1].rows?.some((r) => r.id === nextRow?.id)
          : false;

      return {
        cell: node,
        nextRowId: nextRow?.id,
        isSameLevel,
      };
    }
  );

  const hoverTarget = useNodeAsHoverTarget(nextRowId);

  return useMemo(() => {
    if (!hoverTarget) {
      return null;
    }
    return () => {
      console.log({ isSameLevel, hoverTarget });
      if (isSameLevel) {
        // skip 1
        actions.below(cell, hoverTarget, 0);
      } else {
        actions.above(cell, hoverTarget, 0);
      }
    };
  }, [actions, hoverTarget, cell, isSameLevel]);
};

export const useMoveNodeLeft = (nodeId: string) => {
  const actions = useDropActions(nodeId);
  const { cell, previousSiblingId } = useNodeProps(
    nodeId,
    (node, ancestors) => {
      const parent = isRow(ancestors?.[0]) ? ancestors?.[0] : null;
      const myIndexInParent = parent?.cells.findIndex((c) => c.id === nodeId);
      const previousSibling = parent?.cells[myIndexInParent - 1];

      return {
        cell: node,
        previousSiblingId: previousSibling?.id,
      };
    }
  );

  const hoverTarget = useNodeAsHoverTarget(previousSiblingId);

  return useMemo(() => {
    if (!hoverTarget) {
      return null;
    }
    return () => {
      actions.leftOf(cell, hoverTarget, 0);
    };
  }, [actions, hoverTarget, cell]);
};

export const useMoveNodeRight = (nodeId: string) => {
  const actions = useDropActions(nodeId);
  const { cell, nextSibling } = useNodeProps(nodeId, (node, ancestors) => {
    const parent = isRow(ancestors?.[0]) ? ancestors?.[0] : null;
    const myIndexInParent = parent?.cells.findIndex((c) => c.id === nodeId);
    const nextSibling = parent?.cells[myIndexInParent + 1];

    return {
      cell: node,
      nextSibling: nextSibling?.id,
    };
  });

  const hoverTarget = useNodeAsHoverTarget(nextSibling);

  return useMemo(() => {
    if (!hoverTarget) {
      return null;
    }
    return () => {
      actions.rightOf(cell, hoverTarget, 0);
    };
  }, [actions, hoverTarget, cell]);
};
