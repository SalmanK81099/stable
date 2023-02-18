import Button from '@src/components/globals/Button';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import aboutIcon from '@assets/icons/user/about.png';
import coverageIcon from '@assets/icons/user/coverage.png';
import faqIcon from '@assets/icons/user/faq.png';

const Support = () => {
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
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: getRespValue(44),
          }}
          className="font-aeonik pl-4 pt-4 pb-8 w-2/4"
        >
          Support
        </Text>

        <Button
          buttonStyles={{
            backgroundColor: Colors.light.theme.backgroundDarkGreen,
          }}
          buttonType="leftIcon"
          icon={coverageIcon}
          // onPress={() => {
          //   navigation.navigate('Support');
          // }}
        >
          Talk to coverage
        </Button>

        <Button
          buttonStyles={{
            backgroundColor: Colors.light.theme.backgroundLightGreen,
          }}
          buttonType="leftIcon"
          icon={faqIcon}
          // onPress={() => {
          //   navigation.navigate('Support');
          // }}
        >
          FAQ
        </Button>

        <Button
          buttonStyles={{
            backgroundColor: Colors.light.theme.backgroundDarkGreen,
          }}
          buttonType="leftIcon"
          icon={aboutIcon}
          // onPress={() => {
          //   navigation.navigate('Support');
          // }}
        >
          About Stable
        </Button>
      </View>
    </ScreenAuth>
  );
};

export default Support;

const styles = StyleSheet.create({});
