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
    <View className="w-96 flex-row justify-items-start items-center p-4 bg-[#FDEEA4] gap-2">
      <SwitchPaper
        {...others}
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color="black"
      />
      <Text className="font-aeonik text-sm text-black items-center">
        {label}
      </Text>
    </View>
  );
};
export default Switch;

Switch.defaultProps = {
  label: '',
};
