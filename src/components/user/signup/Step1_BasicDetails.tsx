/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import Checkbox from '@src/components/globals/Checkbox';
import Input from '@src/components/globals/Input';
// import MotiView from '@src/components/globals/MotiView';

import PhoneInput from '@src/components/globals/PhoneInput';
import Screen from '@src/components/globals/Screen';
import Switch from '@src/components/globals/Switch';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import useMyI18n from '@src/hooks/useMyI18n';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line camelcase
const Step1_BasicDetails = ({ next }: MultiStepFormProps) => {
  const [toggleIsOn, setToggle] = useState(false);
  const [checkIsOn, setCheck] = useState('off');
  const i18n = useMyI18n();

  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <MotiView
        key="createAccount"
        {...(animationConfig as object)}
        exit={{
          opacity: 0,
          translateY: -100,
        }}
        style={{
          height: getRespValue(300),
        }}
      >
        <View className="px-4 pt-8 pb-8">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik w-3/4"
          >
            {i18n.t('screens.user.auth.signup.step1.title')}
          </Text>
          <Text
            style={{
              fontSize: getRespValue(30),
            }}
            className="font-aeonik pt-4 pb-4"
          >
            {i18n.t('screens.user.auth.signup.step1.subtitle')}
          </Text>
        </View>
      </MotiView>

      <View
        className={`bg-[${Colors.light.theme.darkYellow}] h-full flex-1 w-full flex-col items-start justify-start`}
      >
        <MotiView
          key="createAccountDetails"
          {...(animationConfig as object)}
          from={{
            opacity: 0,
            translateY: 100,
          }}
          exit={{
            opacity: 0,
            translateY: 100,
          }}
          style={{
            backgroundColor: Colors.light.theme.darkYellow,
          }}
          className="bg-none h-full flex-1 w-full flex-col items-start justify-start"
        >
          <Input placeholder={i18n.t('components.inputs.placeholders.name')} />
          <Input placeholder={i18n.t('components.inputs.placeholders.email')} />
          <PhoneInput
            placeholder={i18n.t(
              'components.inputs.placeholders.enterPhoneNumber',
            )}
          />
          <Input
            placeholder={i18n.t(
              'components.inputs.placeholders.createPassword',
            )}
            password
          />
          <Switch
            isOn={toggleIsOn}
            onToggle={() => {
              setToggle(!toggleIsOn);
            }}
            label={i18n.t('components.switches.enableFaceId')}
          />
          <Checkbox
            className="mt-auto"
            label={i18n.t('components.inputs.checkboxes.agreeToTerms')}
            value={checkIsOn}
            onChange={() => {
              setCheck(preVal => (preVal === 'on' ? 'off' : 'on'));
            }}
          />
          <Button onPress={() => next && next()}>
            {i18n.t('components.buttons.continue')}
          </Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Step1_BasicDetails;

const styles = StyleSheet.create({});
