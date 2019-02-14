import { useState } from 'react';

type UseAnimationState = [{open: boolean, leave: boolean}, () => void];

export const useAnimationState = (open: boolean): UseAnimationState => {
  const [state, setState] = useState({ open, leave: false });
  const close = () => setState({ open: false, leave: false });

  if (open && !state.open) {
    setState({ open: true, leave: false });
  }

  if (!open && state.open && !state.leave) {
    setState({ open: true, leave: true });
  }

  return [state, close];
};
