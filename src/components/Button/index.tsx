/* eslint-disable react/jsx-props-no-spreading */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button as ButtonPaper, ButtonProps } from 'react-native-paper';

interface MyButtonProps extends ButtonProps {
  buttonStyles?: any;
}

const Button = (props: MyButtonProps) => {
  const { buttonStyles, children, className, ...others } = props;
  return (
    <ButtonPaper
      {...others}
      style={{ ...styles, ...buttonStyles }}
      className={`bg-blue-400 ${className}`}
    >
      {children}
    </ButtonPaper>
  );
};

export default Button;

Button.defaultProps = {
  buttonStyles: {},
};

const styles = StyleSheet.create({});
