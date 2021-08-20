import {useState, useCallback} from 'react';

export default function useUpdater() {
  const [, s] = useState(0);
  const updater = useCallback(() => s(v => v + 1), []);
  return updater;
}
