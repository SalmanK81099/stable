/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import cheveronLeft from '@assets/icons/chevron-left-black.png';
import OTP from '@src/components/globals/OTP';
import Screen from '@src/components/globals/Screen';
import BottomSheetButtonOTP from '@src/components/user/BottomSheetButtonOTP';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import useMyI18n from '@src/hooks/useMyI18n';
import useMyToast from '@src/hooks/useToasty';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// eslint-disable-next-line camelcase
const Step2_OTP = ({ back, next }: MultiStepFormProps) => {
  const [secondsLeft, setSecondsLeft] = useState(30);
  const i18n = useMyI18n();
  const toast = useMyToast();

  useEffect(() => {
    if (secondsLeft === 0) return;

    const timerId = setInterval(() => {
      setSecondsLeft(preVal => {
        if (preVal === 0) {
          clearInterval(timerId);
        }
        return preVal - 1;
      });
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(timerId);
    };
  }, [secondsLeft]);

  useEffect(() => {
    toast.error(i18n.t('screens.user.auth.signup.step2.errors.invalidCode'));
  }, []);

  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <MotiView
        key="test1"
        {...(animationConfig as object)}
        style={{
          height: getRespValue(300),
        }}
      >
        <TouchableOpacity
          className="px-2 py-4 w-full  flex-row items-center justify-center relative"
          onPress={() => back && back()}
        >
          <Image
            source={cheveronLeft}
            style={{
              width: getRespValue(40),
              height: getRespValue(40),
              position: 'absolute',
              left: 0,
            }}
            className="my-auto"
          />
          <Text
            style={{
              fontSize: getRespValue(27),
            }}
            className="font-aeonik ml-"
          >
            {i18n.t('components.headers.verification')}
          </Text>
        </TouchableOpacity>
        <View className="px-4 pt-8 pb-8">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik "
          >
            {i18n.t('screens.user.auth.signup.step2.title')}
          </Text>
          <Text
            style={{
              fontSize: getRespValue(20),
            }}
            className="font-aeonik pt-4 pb-4"
          >
            {i18n.t('screens.user.auth.signup.step2.subtitle')}
          </Text>
        </View>
      </MotiView>

      <View
        className={`bg-[${Colors.light.theme.darkYellow}] h-full flex-1 w-full flex-col items-start justify-start`}
      >
        <MotiView
          key="test12"
          {...(animationConfig as object)}
          exit={{
            opacity: 0,
            translateY: 100,
          }}
          style={{
            backgroundColor: Colors.light.theme.darkYellow,
          }}
          className="bg-none h-full flex-1 w-full flex-col items-start justify-between"
        >
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}
            className="pt-6"
          >
            <OTP onCodeFilled={() => next && next()} />

            <Text
              style={{
                fontSize: getRespValue(20),
              }}
              className="font-aeonik px-4 pt-4 pb-4 w-full text-left"
            >
              {i18n.t('screens.user.auth.signup.step2.expiring')}
              {secondsLeft > 10 ? secondsLeft : `0${secondsLeft}`}
            </Text>
          </View>
          <BottomSheetButtonOTP
            title={i18n.t('components.buttons.didNotReceiveCode')}
          />
        </MotiView>
      </View>
    </Screen>
  );
};

export default Step2_OTP;

const styles = StyleSheet.create({});
