import React, {useCallback} from 'react';
import {runOnJS, useAnimatedReaction} from 'react-native-reanimated';
import {
  runSpring,
  useValue,
  useComputedValue,
  Circle,
  Group,
  Shadow,
  Rect,
} from '@shopify/react-native-skia';
import type {SelectionDotProps} from './reactNativeGraph';

export const CIRCLE_RADIUS = 5;
export const CIRCLE_RADIUS_MULTIPLIER = 6;

export function SelectionSquare({
  isActive,
  color,
  circleX,
  circleY,
}: SelectionDotProps): React.ReactElement {
  const circleRadius = useValue(0);
  const squareX = useComputedValue(
    () => circleX.current - circleRadius.current / 2,
    [circleX, circleRadius],
  );
  const squareY = useComputedValue(
    () => circleY.current - circleRadius.current / 2,
    [circleY, circleRadius],
  );

  const setIsActive = useCallback(
    (active: boolean) => {
      runSpring(circleRadius, active ? CIRCLE_RADIUS : 0, {
        mass: 1,
        stiffness: 1000,
        damping: 50,
        velocity: 0,
      });
    },
    [circleRadius],
  );

  useAnimatedReaction(
    () => isActive.value,
    active => {
      runOnJS(setIsActive)(active);
    },
    [isActive, setIsActive],
  );

  return (
    <Group>
      <Rect
        x={squareX}
        y={squareY}
        width={circleRadius}
        height={circleRadius}
        color={'#000000'}>
        <Shadow dx={0} dy={0} color="rgba(0,0,0,0.5)" blur={4} />
      </Rect>
    </Group>
  );
}
