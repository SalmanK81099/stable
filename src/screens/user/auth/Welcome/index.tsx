import LogoSmallSVG from '@assets/logo-small.svg';
import Button from '@src/components/globals/Button';
import MotiView from '@src/components/globals/MotiView';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import useMyI18n from '@src/hooks/useMyI18n';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProps } from 'types';

const Welcome = ({ navigation }: AuthProps) => {
  const i18n = useMyI18n();

  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <MotiView
        from={{
          opacity: 0,
          translateY: -100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        style={{
          height: getRespValue(300),
        }}
      >
        <View className="px-4 pt-8 pb-8 ">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik w-3/4"
          >
            {i18n.t('screens.user.auth.welcome.title')} Stable
          </Text>
          <Text
            style={{
              fontSize: getRespValue(30),
            }}
            className="font-aeonik pt-4 pb-4"
          >
            {i18n.t('screens.user.auth.welcome.subtitle')}
          </Text>
        </View>
      </MotiView>

      <View className="flex-1 w-full flex-col items-end justify-end">
        <MotiView
          from={{
            opacity: 0,
            translateY: 100,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          style={{
            backgroundColor: Colors.light.theme.darkYellow,
          }}
          className="bg-none h-full flex-1 w-full flex-col items-center justify-end"
        >
          <LogoSmallSVG
            style={{
              width: getRespValue(110),
              height: getRespValue(30),
              marginBottom: getRespValue(30),
            }}
          />
          <Button onPress={() => navigation.navigate('Signup')}>
            {i18n.t('screens.user.auth.welcome.button')}
          </Button>
          <Button light onPress={() => navigation.navigate('Signin')}>
            {i18n.t('components.buttons.login')}
          </Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
