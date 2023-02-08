/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import { StyleSheet, Image } from 'react-native';
import React from 'react';
import {
  TextInput as TextInputPaper,
  TextInputProps,
} from 'react-native-paper';
// import warningIcon from '@assets/icons/warning.png';

interface MyTextInputProps extends TextInputProps {
  error?: boolean;
  password?: boolean;
}

const Input = (props: MyTextInputProps) => {
  const { className, value, password, right, error, ...others } = props;
  const [checked, setChecked] = React.useState(true);
  const handleRightValues = () => {
    // if (error) {
    //   return <Image source={warningIcon} className="w-9 h-9" />;
    // }
    if (password) {
      return (
        <TextInputPaper.Icon
          icon="eye"
          onPress={() => {
            setChecked(!checked);
          }}
        />
      );
    }

    return right;
  };
  return (
    <TextInputPaper
      {...others}
      underlineStyle={{ backgroundColor: 'transparent' }}
      className={`w-full h-[70px] text-xl bg-orange-300 ${
        value ? 'font-aeonik' : 'font-aeonik-light font-extralight'
      } ${error ? 'bg-red-400' : ''} ${className}`}
      secureTextEntry={password ? !!checked : false}
      right={handleRightValues as any}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});

Input.defaultProps = {
  error: false,
  password: false,
};
