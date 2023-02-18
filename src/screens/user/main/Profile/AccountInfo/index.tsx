import Button from '@src/components/globals/Button';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import keyIcon from '@assets/icons/user/key.png';

const DetailRow = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingVertical: getRespValue(20),
        paddingHorizontal: getRespValue(20),
      }}
    />
  );
};

const AccountInfo = () => {
  return (
    <ScreenAuth
      appBarProps={{
        profile: true,
        light: true,
        profileColor: Colors.light.theme.backgroundLightGreen,
        goBack: true,
      }}
      topColor={Colors.light.theme.backgroundLightGreen}
    >
      <View
        style={{
          backgroundColor: Colors.light.theme.backgroundLightGreen,
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
        className={`bg-[${Colors.light.theme.backgroundDarkGreen}] flex-1 justify-between`}
        style={{
          backgroundColor: Colors.light.theme.backgroundDarkGreen,
        }}
      >
        <Text>Test</Text>

        <Button
          buttonStyles={{
            backgroundColor: Colors.light.theme.buttonGreen,
          }}
          buttonType="leftIcon"
          icon={keyIcon}
          // onPress={() => {
          //   navigation.navigate('Support');
          // }}
        >
          Change password
        </Button>
      </View>
    </ScreenAuth>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({});
