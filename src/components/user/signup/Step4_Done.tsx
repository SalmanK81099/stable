/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import backgroundImage from '@assets/images/background1.png';
import Button from '@src/components/globals/Button';
import MotiView from '@src/components/globals/MotiView';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Step4_Done = () => {
  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <ImageBackground
        source={backgroundImage}
        style={{
          flex: 1,
        }}
        className="flex-1 items-end justify-end"
      >
        <View className="w-full h-3/4 flex-col justify-between">
          <MotiView
            key="test12"
            {...(animationConfig as object)}
            exit={{
              opacity: 0,
              translateY: 100,
            }}
          >
            <Text
              style={{
                fontSize: getRespValue(45),
              }}
              className="font-aeonik px-4 w-3/4"
            >
              You&apos;re account was created successfully
            </Text>
          </MotiView>
          <MotiView
            key="test123"
            {...(animationConfig as object)}
            from={{
              opacity: 0,
              translateY: 100,
            }}
            exit={{
              opacity: 0,
              translateY: -100,
            }}
          >
            <Button>Great, let&apos;s continue</Button>
          </MotiView>
        </View>
      </ImageBackground>
    </Screen>
  );
};

export default Step4_Done;

const styles = StyleSheet.create({});
