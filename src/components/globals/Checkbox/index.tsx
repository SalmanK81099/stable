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
    <View className="flex-row justify-items-start items-center p-4 bg-[#FDEEA4] ">
      <CheckboxPaper
        {...others}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text className="  font-aeonik text-[7px] text-black">{label}</Text>
    </View>
  );
};

export default Checkbox;
Checkbox.defaultProps = {
  label: '',
};
