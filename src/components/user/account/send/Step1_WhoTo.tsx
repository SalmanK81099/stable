/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchContactsBottomSheet from '../../components/SearchContactsBottomSheet';

const Step1_WhoTo = () => {
  return (
    <ScreenAuth
      appBarProps={{
        profileMoti: true,
        goBack: true,
        profileColor: Colors.light.theme.backgroundLightPink,
        light: true,
        title: 'Send money',
      }}
      topColor={Colors.light.theme.backgroundLightPink}
      disableBottomSafeArea
    >
      <View
        style={{
          backgroundColor: Colors.light.theme.backgroundLightPink,
          height: getRespValue(200),
        }}
      >
        <MotiView
          key="overview-profile-text"
          {...(animationConfig as object)}
          from={{
            translateX: -100,
            opacity: 0,
          }}
          exit={{
            translateX: -100,
            opacity: 0,
          }}
        >
          <Text
            style={{
              fontSize: getRespValue(44),
            }}
            className="font-aeonik pl-4 pt-4 w-full"
          >
            Who are you sending the money to?
          </Text>
        </MotiView>
      </View>

      <View
        style={{
          backgroundColor: Colors.light.theme.backgroundDarkPink,
        }}
        className="flex-1"
      >
        <SearchContactsBottomSheet />
        {/* <PhoneInput
          placeholder="Enter phone number"
          style={{
            backgroundColor: Colors.light.theme.backgroundDarkPink,
          }}
        /> */}
      </View>
    </ScreenAuth>
  );
};

export default Step1_WhoTo;

const styles = StyleSheet.create({});
