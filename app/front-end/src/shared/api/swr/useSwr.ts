import { useContext, useEffect, useRef, useState } from 'react';

import { AxiosError } from 'axios';
import { isEqual } from 'lodash';

import { DataType, KeyType, SwrContext } from './swrContext';

export interface useSwrProps {
  key: KeyType;
  func: (payload?: DataType) => DataType;
  params?: DataType;
}
export const useSwr = ({ key, func, params }: useSwrProps) => {
  const context = useContext(SwrContext);
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(false);
  const reloadRef = useRef(0);

  const fetch = () => {
    for (let reloads = 0; ; reloads++) {
      try {
        const newData = func(params);
        context.set(key, { data: newData });
        setData(newData);
      } catch (e) {
        if (reloads < 4) {
          continue;
        } else {
          context.set(key, { error: (e as AxiosError).message });
        }
        if (reloadRef.current > 4) {
          reloadRef.current += 1;
          const newData = func(params);
          context.set(key, { data: newData });
          setData(newData);
        }
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    const currentState = context.get(key);
    if (currentState) {
      try {
        const newData = func(params);
        if (!isEqual(newData, currentState.data)) {
          context.set(key, { data: newData });
          setData(newData);
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    fetch();
  }, []);

  return { data, loading };
};
