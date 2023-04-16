import { CustoplayerItem } from '@root/lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import { Fragment } from 'react';
import styled from 'styled-components';
import ItemRenderer from './ItemRenderer';
import {
  draggableSymbol,
  isProgressDraggingAtom,
  isVolumeDraggingAtom,
  itemsAtom,
  myScope,
  showControlsBarAtom,
  valuesAtom,
  videoDimensionsAtom,
} from '@root/lib/atoms';
import {
  isCurrentTime,
  isDuration,
  isFullscreenButton,
  isPlayButton,
  isProgressBar,
  isVolumeComponent,
} from '@root/lib/utils';
import {
  controlsBarMovementAnimation,
  controlsBarOpacityAnimation,
} from '@root/lib/variants';

function extractColor(curItem: CustoplayerItem) {
  if (
    isPlayButton(curItem) ||
    isVolumeComponent(curItem) ||
    isFullscreenButton(curItem)
  )
    return curItem.buttonColor;
  else if (isDuration(curItem) || isCurrentTime(curItem))
    return curItem.textColor;

  return undefined;
}

function ControlsBar() {
  const isControlsBarShowing = useAtomValue(showControlsBarAtom, myScope);
  const items = useAtomValue(itemsAtom, myScope);
  const isProgressDragging = useAtomValue(isProgressDraggingAtom, myScope);
  const isVolumeDragging = useAtomValue(isVolumeDraggingAtom, myScope);
  const videoDimensions = useAtomValue(videoDimensionsAtom, myScope);
  const videoValues = useAtomValue(valuesAtom, myScope);

  function renderItem(curItem: CustoplayerItem | undefined) {
    if (
      curItem === undefined ||
      (curItem.hideOnMobile && videoDimensions.width < 768)
    ) {
      return <></>;
    }
    return (
      <ItemContainer
        onClick={(e)=>e.stopPropagation()}
        isProgressBar={isProgressBar(curItem)}
        color={extractColor(curItem)}
      >
        <ItemRenderer item={curItem} />
      </ItemContainer>
    );
  }

  return (
    <AnimatePresence>
      {(true || isVolumeDragging || isControlsBarShowing) && (
        <ControlsContainer
          className={draggableSymbol.toString()}
          variants={
            videoValues.controlsBar?.animate === 'movement'
              ? controlsBarMovementAnimation
              : controlsBarOpacityAnimation
          }
          initial='init'
          animate='anim'
          exit='exit'
          data-cy='controlsBar'
        >
          <Controls
            height='45px'
            backgroundColor={videoValues.controlsBar?.barColor}
          >
            {items.map((curItem, idx) => {
              return (
                <Fragment key={`item-${idx}`}>{renderItem(curItem)}</Fragment>
              );
            })}
          </Controls>
        </ControlsContainer>
      )}
    </AnimatePresence>
  );
}

const ControlsContainer = styled(motion.div)`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Controls = styled.div<{
  height: string;
  backgroundColor: string | undefined;
}>`
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'rgba(28, 28, 28, 0.7)'};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
`;

export const ItemContainer = styled.div<{ isProgressBar: boolean }>`
  height: 100%;
  width: auto;
  color: ${(props) => (props.color ? props.color : 'white')};
  flex: ${(props) => (props.isProgressBar ? '1' : '0')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.35rem;

  :last-child {
    margin-right: 0;
  }
`;

export default ControlsBar;
