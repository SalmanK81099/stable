/* eslint-disable react/jsx-props-no-spreading */
import Colors from '@src/constants/Colors';
import { Modal as ModalDef } from 'native-base';
import React from 'react';
import { ModalProps } from 'react-native';
import Button from '../Button';

interface MyModalProps extends ModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  modalStyle?: object;
  contentStyle?: object;
  modalProps?: object;
  contentProps?: object;
  ok?: boolean;
  onOk?: () => void;
}

const Modal = (props: MyModalProps) => {
  const {
    visible,
    setVisible,
    modalStyle,
    contentStyle,
    modalProps,
    contentProps,
    children,
    ok,
    onOk,
    ...rest
  } = props;
  return (
    <ModalDef
      {...modalProps}
      isOpen={visible}
      onClose={() => setVisible(false)}
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        ...modalStyle,
      }}
    >
      <ModalDef.Content
        {...contentProps}
        style={{
          borderRadius: 0,
          backgroundColor: Colors.light.textYellow,
          ...contentStyle,
        }}
      >
        {children}
        {ok && (
          <Button
            onPress={() => {
              setVisible(false);
              if (onOk) onOk();
            }}
          >
            Ok
          </Button>
        )}
      </ModalDef.Content>
    </ModalDef>
  );
};

Modal.defaultProps = {
  modalStyle: {},
  contentStyle: {},
  modalProps: {},
  contentProps: {},
  ok: false,
  onOk: false,
};
export default Modal;
