import { useState } from 'react';

type UseAnimationState = [{ open: boolean; leave: boolean }, () => void];

export const useAnimationState = (nextOpenState: boolean): UseAnimationState => {
  const [state, setState] = useState({ open: nextOpenState, leave: false });
  const close = () => setState({ open: false, leave: false });

  let { open, leave } = state;

  if (nextOpenState && !open) {
    open = true;
    leave = false;
    setState({ open, leave });
  }

  if (!nextOpenState && open && !leave) {
    open = true;
    leave = true;
    setState({ open, leave });
  }

  return [{ open, leave }, close];
};
