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

const Profile = ({ navigation }: any) => {
  return (
    <ScreenAuth
      appBarProps={{
        profile: true,
        profileColor: Colors.light.background,
      }}
      whiteScan
      style={{ backgroundColor: Colors.light.background }}
      topColor={Colors.light.background}
    >
      <View className="flex-1 justify-between flex-col">
        <View className="items-center justify-center h-1/3">
          <View className="flex-row w-full justify-left px-4">
            <Text
              className="text-white font-aeonik text-start items-center mr-2"
              style={{
                fontSize: getRespValue(80),
              }}
            >
              Hi Eddy
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
            Account info
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
            Cash out
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
            Currencies
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
            Support
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
            Legal
          </Button>
        </View>
      </View>
    </ScreenAuth>
  );
};

export default Profile;

const styles = StyleSheet.create({});
