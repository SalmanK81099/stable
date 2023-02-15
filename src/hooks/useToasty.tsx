/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import Toast from '@src/components/globals/Toast';
import { useToast } from 'native-base';
import React, { useCallback, useRef, useState } from 'react';

const useMyToast = () => {
  const toast = useToast();
  const [toastState, setToastState] = useState({});

  const toastRef = useRef(toast);

  const showToast = useCallback((props: any) => {
    const { render, ...toastProps } = props;

    setToastState(toastProps);

    toastRef.current.show({
      render: () => render(toastRef.current, toastProps),
    });
  }, []);

  const hideToast = useCallback((id: any) => {
    toastRef.current.close(id);
  }, []);

  const success = useCallback((title: string, options = {}) => {
    toastRef.current.show({
      render: ({ id }) => {
        return (
          <Toast
            {...{
              id,
              title:
                "The email and password you enter didn't match. Please double-check and try again.",
              variant: 'solid',
              isClosable: true,
              toast,
            }}
          />
        );
      },
    });
  }, []);

  const error = useCallback((title: string, options = {}) => {
    toastRef.current.show({
      render: ({ id }) => {
        return (
          <Toast
            {...{
              id,
              error: true,
              title,
              variant: 'solid',
              isClosable: true,
              toast,
            }}
          />
        );
      },
    });
  }, []);

  const renderCustomToast = useCallback((toastLocal: any, props: any) => {
    const { id, ...rest } = props;

    return (
      <Toast
        {...rest}
        id={id}
        isClosable
        onClose={() => hideToast(id)}
        onCloseComplete={() => setToastState({})}
      />
    );
  }, []);

  return {
    success,
    error,
    customToastProps: toastState,
    renderCustomToast,
  };
};

export default useMyToast;
