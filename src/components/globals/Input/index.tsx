/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import icon from '@assets/icons/signup/warning.png';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import {
  TextInput as TextInputPaper,
  TextInputProps,
} from 'react-native-paper';

export interface MyTextInputProps extends TextInputProps {
  password?: boolean;
  errorText?: string;
}

const Input = React.forwardRef<TextInput, MyTextInputProps>((props, ref) => {
  const { className, style, value, password, right, errorText, ...others } =
    props;
  const [checked, setChecked] = React.useState(true);

  const handleRightValues = useCallback(() => {
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
  }, [checked, password, right]);

  return (
    <TextInputPaper
      {...others}
      ref={ref}
      style={{
        backgroundColor: errorText
          ? Colors.light.theme.redError
          : Colors.light.theme.darkYellow,
        height: getRespValue(70),
        ...(style as object),
      }}
      underlineStyle={{ backgroundColor: 'transparent' }}
      className={`w-full  text-xl border-b-2 border-white  ${
        value ? 'font-aeonik' : 'font-aeonik-light font-extralight'
      }  ${className}`}
      secureTextEntry={password ? !!checked : false}
      render={({ ...prop }) => (
        <View className="flex-col justify-between ">
          <View className="flex-row justify-between items-center ">
            <TextInput className="w-[90%] " {...prop} />
            {errorText && (
              <View className="fixed items-end flex-initial  px-3">
                {icon && <Image source={icon} style={styles.rightErrorIcon} />}
              </View>
            )}
          </View>
          {errorText && (
            <Text className="font-aeonik-light font-extralight flex px-3 pb-3 text-right">
              {errorText}
            </Text>
          )}
        </View>
      )}
      right={handleRightValues() as React.ReactFragment}
      // right={<Image source={warningIcon} className="w-9 h-9" />}
    />
  );
});

export default Input;

const styles = StyleSheet.create({
  rightErrorIcon: {
    height: getRespValue(27),
    width: getRespValue(27),
  },
});

Input.defaultProps = {
  password: false,
  errorText: '',
};
