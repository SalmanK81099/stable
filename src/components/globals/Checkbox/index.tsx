/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text, View } from 'react-native';
import { Checkbox as CheckboxPaper, CheckboxProps } from 'react-native-paper';

interface MyCheckboxProps extends CheckboxProps {
  label?: any;
}
const Checkbox = (props: MyCheckboxProps) => {
  const [checked, setChecked] = React.useState(false);
  const { label, ...others } = props;
  return (
    <View className="flex-row justify-between items-center ">
      <CheckboxPaper
        {...others}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text className="font-aeonik text-xs text-black">{label}</Text>
    </View>
  );
};

export default Checkbox;
Checkbox.defaultProps = {
  label: '',
};
