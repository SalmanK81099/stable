/* eslint-disable react/jsx-props-no-spreading */
import { StyleSheet } from 'react-native';
import {
  TextInput as TextInputPaper,
  TextInputProps,
} from 'react-native-paper';

const Input = (props: TextInputProps) => {
  const { className, value, ...others } = props;
  return (
    <TextInputPaper
      {...others}
      underlineStyle={{ backgroundColor: 'transparent' }}
      className={`w-full h-[70px] text-xl bg-orange-300 ${
        value ? 'font-aeonik' : 'font-aeonik-light font-extralight'
      } ${className}`}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});
