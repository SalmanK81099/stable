/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
// import MotiView from '@src/components/globals/MotiView';

import CameraSVG from '@assets/icons/kyc/camer-icon-small.svg';
import IDCardSVG from '@assets/icons/kyc/id-icon-small.svg';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import useMyI18n from '@src/hooks/useMyI18n';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line camelcase
const Step1_LetsMeet = ({ next }: MultiStepFormProps) => {
  const [toggleIsOn, setToggle] = useState(false);
  const [checkIsOn, setCheck] = useState('off');
  const i18n = useMyI18n();

  return (
    <Screen
      className={`bg-[${Colors.light.theme.backgroundDarkGray}]`}
      style={{
        backgroundColor: Colors.light.theme.backgroundDarkGray,
      }}
      topColor={Colors.light.theme.backgroundDarkGray}
    >
      <MotiView
        key="createAccount"
        {...(animationConfig as object)}
        exit={{
          opacity: 0,
          translateY: -100,
        }}
        style={{
          height: getRespValue(330),
        }}
      >
        <View className="px-4 pt-8 pb-8">
          <Text
            style={{
              fontSize: getRespValue(45),
              color: Colors.light.theme.textDarkYellow,
            }}
            className="font-aeonik w-3/4"
          >
            Let&rsquo;s meet!
          </Text>
          <Text
            style={{
              fontSize: getRespValue(30),
              color: Colors.light.theme.textLightYellow,
            }}
            className="font-aeonik pt-4 pb-4"
          >
            We are happy to have you onboard.
          </Text>
          <Text
            style={{
              fontSize: getRespValue(18),
            }}
            className="font-aeonik pt-4 pb-4 w-4/5 text-white"
          >
            First we&rsquo;ll scan your ID and then take a picture. You will
            need:
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
          className="bg-none h-full flex-1 w-full flex-row relative justify-center"
        >
          <View
            className="w-2/4 h-full justify-center items-center"
            style={{
              backgroundColor: Colors.light.theme.backgroundLightYellow,
            }}
          >
            <IDCardSVG
              style={{
                width: getRespValue(100),
                height: getRespValue(100),
              }}
            />
            <Text
              className="font-aeonik mt-2"
              style={{
                fontSize: getRespValue(20),
              }}
            >
              Your ID
            </Text>
          </View>
          <View
            className="w-2/4 h-full justify-center items-center"
            style={{
              backgroundColor: Colors.light.theme.backgroundLightGreen,
            }}
          >
            <CameraSVG
              style={{
                width: getRespValue(100),
                height: getRespValue(100),
              }}
            />

            <Text
              className="font-aeonik mt-2"
              style={{
                fontSize: getRespValue(20),
              }}
            >
              A Selfie
            </Text>
          </View>

          <Button
            onPress={() => next && next()}
            className="absolute w-11/12"
            buttonStyles={{
              bottom: getRespValue(30),
            }}
          >
            Let&rsquo;s get started
          </Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Step1_LetsMeet;

const styles = StyleSheet.create({});
