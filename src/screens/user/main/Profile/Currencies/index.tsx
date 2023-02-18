import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Currencies = () => {
  return (
    <ScreenAuth
      appBarProps={{
        profile: true,
        light: true,
        profileColor: Colors.light.theme.backgroundLightPink,
        goBack: true,
      }}
      topColor={Colors.light.theme.backgroundLightPink}
    >
      <View
        style={{
          backgroundColor: Colors.light.theme.backgroundLightPink,
          height: getRespValue(220),
        }}
      >
        <Text
          style={{
            fontSize: getRespValue(44),
          }}
          className="font-aeonik pl-4 pt-4 w-2/4"
        >
          Account Info
        </Text>
      </View>
      <View
        className={`bg-[${Colors.light.theme.backgroundDarkPink}] flex-1 justify-between`}
        style={{
          backgroundColor: Colors.light.theme.backgroundDarkPink,
        }}
      >
        <Text>Test</Text>
      </View>
    </ScreenAuth>
  );
};

export default Currencies;

const styles = StyleSheet.create({});
