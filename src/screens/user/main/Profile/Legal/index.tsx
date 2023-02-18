import Button from '@src/components/globals/Button';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import documentsIcon from '@assets/icons/user/documents.png';

const Legal = () => {
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
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: getRespValue(44),
          }}
          className="font-aeonik pl-4 pt-4 pb-8 w-2/4"
        >
          Legal
        </Text>

        <Button
          buttonStyles={{
            backgroundColor: Colors.light.theme.buttonDarkYellow,
          }}
          buttonType="leftIcon"
          icon={documentsIcon}
          // onPress={() => {
          //   navigation.navigate('Support');
          // }}
        >
          Terms and conditions
        </Button>

        <Button
          buttonStyles={{
            backgroundColor: Colors.light.theme.buttonOrange,
          }}
          buttonType="leftIcon"
          icon={documentsIcon}
          // onPress={() => {
          //   navigation.navigate('Support');
          // }}
        >
          Privacy policy
        </Button>
      </View>
    </ScreenAuth>
  );
};

export default Legal;

const styles = StyleSheet.create({});
