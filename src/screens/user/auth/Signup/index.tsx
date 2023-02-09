import Button from '@src/components/globals/Button';
import Checkbox from '@src/components/globals/Checkbox';
import Input from '@src/components/globals/Input';
import MotiView from '@src/components/globals/MotiView';
import PhoneInput from '@src/components/globals/PhoneInput';
import Screen from '@src/components/globals/Screen';
import Switch from '@src/components/globals/Switch';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProps } from 'types';

const Signup = ({ navigation }: AuthProps) => {
  const [toggleIsOn, setToggle] = useState(false);
  const [checkIsOn, setCheck] = useState('off');

  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <MotiView
        key={1}
        from={{
          opacity: 0,
          translateX: -100,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
      >
        <View className="px-4 pt-8 pb-8">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik w-3/4"
          >
            Let&apos;s create your account
          </Text>
          <Text
            style={{
              fontSize: getRespValue(30),
            }}
            className="font-aeonik pt-4 pb-4"
          >
            Please complete the information below
          </Text>
        </View>
      </MotiView>

      <View
        className={`bg-[${Colors.light.theme.darkYellow}] h-full flex-1 w-full flex-col items-start justify-start`}
      >
        <MotiView
          key={2}
          from={{
            opacity: 0,
            translateY: 100,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          style={{
            backgroundColor: Colors.light.theme.darkYellow,
          }}
          className="bg-none h-full flex-1 w-full flex-col items-start justify-start"
        >
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <PhoneInput placeholder="Enter phone Number" />
          <Input placeholder="Create Password" password />
          <Switch
            isOn={toggleIsOn}
            onToggle={() => {
              setToggle(!toggleIsOn);
            }}
            label="Enable face ID"
          />
          <Checkbox
            className="mt-auto"
            label="I agree to the Terms of Service and Privacy Policy"
            value={checkIsOn}
            onChange={() => {
              setCheck(preVal => (preVal === 'on' ? 'off' : 'on'));
            }}
          />
          <Button>Continue</Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Signup;

const styles = StyleSheet.create({});
