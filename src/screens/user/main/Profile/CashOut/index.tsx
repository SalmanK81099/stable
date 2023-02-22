import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import useMyI18n from '@src/hooks/useMyI18n';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CashOut = () => {
  const i18n = useMyI18n();
  return (
    <ScreenAuth
      appBarProps={{
        profile: true,
        light: true,
        profileColor: Colors.light.theme.backgroundLightYellow,
        goBack: true,
      }}
      topColor={Colors.light.theme.backgroundLightYellow}
    >
      <View
        style={{
          backgroundColor: Colors.light.theme.backgroundLightYellow,
          height: getRespValue(220),
        }}
      >
        <Text
          style={{
            fontSize: getRespValue(44),
          }}
          className="font-aeonik pl-4 pt-4 px-4"
        >
          {i18n.t('screens.user.profile.cashOut.step1.title')}
        </Text>
      </View>
      <View
        className={`bg-[${Colors.light.background}] flex-1 justify-between`}
        style={{
          backgroundColor: Colors.light.background,
        }}
      >
        <Text>Test</Text>
      </View>
    </ScreenAuth>
  );
};

export default CashOut;

const styles = StyleSheet.create({});
