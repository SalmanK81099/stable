/* eslint-disable react/jsx-props-no-spreading */
import { Text, View } from 'react-native';
import React from 'react';
import { Switch as SwitchPaper, SwitchProps } from 'react-native-paper';

interface MySwitchProps extends SwitchProps {
  label?: any;
}
const Switch = (props: MySwitchProps) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const { label, ...others } = props;
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View className="flex-row justify-between items-center ">
      <SwitchPaper
        {...others}
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color="black"
      />
      <Text className="font-aeonik text-xl text-black ">{label}</Text>
    </View>
  );
};
export default Switch;

Switch.defaultProps = {
  label: '',
};
