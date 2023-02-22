import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import useMyI18n from '@src/hooks/useMyI18n';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CurrenciesRow = ({
  currency,
  name,
}: {
  currency: string;
  name: string;
}) => {
  return (
    <View className="flex-row gap-3 items-center py-3">
      <Text
        className="font-aeonik-medium"
        style={{
          fontSize: getRespValue(22),
          color: Colors.light.theme.textDarkPink,
        }}
      >
        {currency}
      </Text>
      <Text
        className="font-aeonik"
        style={{
          fontSize: getRespValue(22),
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Currencies = () => {
  const i18n = useMyI18n();
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
          {i18n.t('screens.user.profile.currencies.step1.title')}
        </Text>
      </View>
      <View
        className={`bg-[${Colors.light.theme.backgroundDarkPink}] flex-1 justify-start px-4 pt-4`}
        style={{
          backgroundColor: Colors.light.theme.backgroundDarkPink,
        }}
      >
        <CurrenciesRow currency="USD" name="Stable Dollar" />
        <CurrenciesRow currency="COP" name="Colombian Peso" />
      </View>
    </ScreenAuth>
  );
};

export default Currencies;

const styles = StyleSheet.create({});
