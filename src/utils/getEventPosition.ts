interface Position {
  x: number;
  y: number;
}

export const getEventPosition = (
  event:
    | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement>,
): Position => {
  if ('touches' in event) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY,
    };
  }

  return { x: event.pageX, y: event.pageY };
};
