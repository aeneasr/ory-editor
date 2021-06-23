import { IconButton, Tooltip } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';

import React from 'react';
import {
  useFillRow,
  useMoveNodeDown,
  useMoveNodeLeft,
  useMoveNodeUp,
  useRemoveCell,
  useUiTranslator,
  useMoveNodeRight,
} from '../../core/components/hooks';
import DraftSwitch from '../DraftSwitch';
import { DuplicateButton } from '../DuplicateButton';
import { I18nTools } from '../I18nTools';
import { SelectParentButton } from '../SelectParentButton';
import { BottomToolbarToolsProps } from './types';
export { BottomToolbarToolsProps };
export const BottomToolbarTools: React.FC<BottomToolbarToolsProps> = React.memo(
  ({ nodeId }) => {
    const { t } = useUiTranslator();
    const removeCell = useRemoveCell(nodeId);
    const moveUp = useMoveNodeUp(nodeId);
    const moveDown = useMoveNodeDown(nodeId);
    const stretch = useFillRow(nodeId);
    const moveLeft = useMoveNodeLeft(nodeId);
    const moveRight = useMoveNodeRight(nodeId);
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {moveUp ? <button onClick={moveUp}>move up</button> : null}
        {moveDown ? <button onClick={moveDown}>move down</button> : null}
        {stretch ? <button onClick={stretch}>stretch</button> : null}
        {moveLeft ? <button onClick={moveLeft}>moveLeft</button> : null}
        {moveRight ? <button onClick={moveRight}>moveRight</button> : null}

        <I18nTools nodeId={nodeId} />
        <DraftSwitch nodeId={nodeId} />
        <DuplicateButton nodeId={nodeId} />
        <SelectParentButton nodeId={nodeId} />

        <Tooltip title={t('Remove Plugin')}>
          <IconButton
            onClick={() => removeCell()}
            aria-label="delete"
            color="secondary"
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
);
