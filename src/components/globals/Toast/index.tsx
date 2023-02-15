/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */

import { getRespValue } from '@utils/design/design';
import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import ErrorIconSVG from '@assets/icons/toast/error.svg';

type ToastProps = {
  id: number | string;
  status?: any;
  variant?: string;
  title?: string;
  description?: string;
  isClosable?: boolean;
  toast?: any;
  error?: boolean;
};

const Toast = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  toast,
  error,
  ...rest
}: ToastProps) => {
  return (
    <Alert
      maxWidth="100%"
      minHeight={getRespValue(90)}
      alignSelf="center"
      background={error ? 'black' : 'white'}
      flexDirection="row"
      status={status || 'info'}
      className="rounded-none w-5/6"
      variant={variant}
      {...rest}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            {error && (
              <ErrorIconSVG
                style={{
                  width: getRespValue(40),
                  height: getRespValue(40),
                  marginRight: getRespValue(10),
                }}
              />
            )}

            <Text
              fontWeight="medium"
              flexShrink={1}
              fontFamily="aeonik"
              fontSize={getRespValue(18)}
              color={
                variant === 'solid'
                  ? 'lightText'
                  : variant !== 'outline'
                  ? 'darkText'
                  : null
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="4" />}
              _icon={{
                color: variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
      </VStack>
    </Alert>
  );
};

export default Toast;
