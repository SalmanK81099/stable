// import PhoneInput from '@src/components/globals/PhoneInput';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import Button from '@stable/Button';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import accountInfoIcon from '@assets/icons/user/account-info.png';
import cashOutIcon from '@assets/icons/user/cash-out.png';
import currenciesIcon from '@assets/icons/user/currencies.png';
import legalIcon from '@assets/icons/user/legal.png';
import supportIcon from '@assets/icons/user/support.png';
import { useIsFocused } from '@react-navigation/native';
import useMyI18n from '@src/hooks/useMyI18n';
import Animated, {
  FadeInDown,
  FadeOutUp,
  Layout,
} from 'react-native-reanimated';

const Profile = ({ navigation }: any) => {
  const isFocused = useIsFocused();
  const i18n = useMyI18n();
  return (
    <ScreenAuth
      appBarProps={{
        profile: true,
        profileColor: Colors.light.background,
        isFocused,
        animateProfile: true,
      }}
      whiteScan
      style={{ backgroundColor: Colors.light.background }}
      topColor={Colors.light.background}
    >
      {isFocused && (
        <Animated.View
          entering={FadeInDown.delay(200).duration(300)}
          exiting={FadeOutUp}
          layout={Layout}
          className="flex-1 justify-between flex-col"
        >
          <View className="items-center justify-center h-1/3">
            <View className="flex-row w-full justify-left px-4">
              <Text
                className="text-white font-aeonik text-start items-center mr-2"
                style={{
                  fontSize: getRespValue(80),
                }}
              >
                {i18n.t('screens.user.profile.title')} Eddy
              </Text>
            </View>
          </View>

          <View>
            <Button
              buttonStyles={{
                backgroundColor: Colors.light.theme.buttonBlue,
              }}
              buttonType="leftIcon"
              icon={accountInfoIcon}
              onPress={() => {
                navigation.navigate('AccountInfo');
              }}
            >
              {i18n.t('screens.user.profile.accountInfo.title')}
            </Button>
            <Button
              buttonStyles={{
                backgroundColor: Colors.light.theme.buttonYellow,
              }}
              buttonType="leftIcon"
              icon={cashOutIcon}
              onPress={() => {
                navigation.navigate('CashOut');
              }}
            >
              {i18n.t('screens.user.profile.cashOut.title')}
            </Button>
            <Button
              buttonStyles={{
                backgroundColor: Colors.light.theme.buttonPink,
              }}
              buttonType="leftIcon"
              icon={currenciesIcon}
              onPress={() => {
                navigation.navigate('Currencies');
              }}
            >
              {i18n.t('screens.user.profile.currencies.title')}
            </Button>
            <Button
              buttonStyles={{
                backgroundColor: Colors.light.theme.buttonBlue,
              }}
              buttonType="leftIcon"
              icon={supportIcon}
              onPress={() => {
                navigation.navigate('Support');
              }}
            >
              {i18n.t('screens.user.profile.support.title')}
            </Button>
            <Button
              buttonStyles={{
                backgroundColor: Colors.light.theme.buttonYellow,
              }}
              buttonType="leftIcon"
              icon={legalIcon}
              onPress={() => {
                navigation.navigate('Legal');
              }}
            >
              {i18n.t('screens.user.profile.legal.title')}
            </Button>
          </View>
        </Animated.View>
      )}
    </ScreenAuth>
  );
};

export default Profile;

const styles = StyleSheet.create({});
