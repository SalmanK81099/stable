/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import Input from '@src/components/globals/Input';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountryPicker, {
  CountryCode,
  DARK_THEME,
} from 'react-native-country-picker-modal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

const Step3_WhereFrom = ({ back, next }: MultiStepFormProps) => {
  const [cca2, setCca2] = useState('CO');
  const [visible, setVisible] = useState(false);
  return (
    <Screen
      appBar
      topColor={Colors.light.theme.backgroundDarkGray}
      appBarProps={{
        profileMoti: true,
        onPress: () => {
          if (back) back();
        },
        stepper: true,
        stepActive: 2,
        profileColor: Colors.light.theme.backgroundDarkGray,
        disableStartMoti: true,
        disableEndMoti: true,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.light.theme.backgroundDarkGray,
        }}
        className="flex-1 w-full flex-col relative pt-4 "
      >
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{
            backgroundColor: 'transparent',
            width: '100%',
          }}
        >
          <Input
            className="bg-none border-t-2 border-gray-600 w-full"
            style={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              width: '100%',
              borderColor: Colors.light.theme.textDarkGray,
            }}
            placeholder="Search"
            editable={false}
            right={<TextInput.Icon icon="magnify" size={getRespValue(40)} />}
          />
        </TouchableOpacity>

        <MotiView
          key="createAccount"
          {...(animationConfig as object)}
          from={{
            opacity: 0,
            translateX: -100,
          }}
          exit={{
            opacity: 0,
            translateX: -100,
          }}
          className="px-4 pt-8 pb-8 w-full"
        >
          <Text
            style={{
              fontSize: getRespValue(45),
              color: Colors.light.theme.textDarkYellow,
            }}
            className="font-aeonik w-4/5"
          >
            Where is your ID form?
          </Text>

          <Text
            style={{
              fontSize: getRespValue(18),
            }}
            className="font-aeonik pt-4 pb-4 w-4/5 text-white"
          >
            Select the country that issued your ID
          </Text>

          <CountryPicker
            theme={DARK_THEME}
            onSelect={value => {
              setCca2(value.cca2);
            }}
            countryCode={cca2 as CountryCode}
            visible={visible}
            onClose={() => setVisible(false)}
            withFilter
            withCallingCode
            withAlphaFilter
            withCountryNameButton
            containerButtonStyle={
              {
                // display: 'none',
              }
            }
          />
        </MotiView>
        {cca2 && (
          <MotiView
            key="createAccount1"
            {...(animationConfig as object)}
            from={{
              opacity: 0,
              translateY: 50,
            }}
            exit={{
              opacity: 0,
              translateY: 50,
            }}
            className="absolute w-full flex justify-center items-center"
            style={{
              bottom: getRespValue(30),
            }}
          >
            <Button className=" w-11/12" onPress={() => next && next()}>
              Submit
            </Button>
          </MotiView>
        )}
      </View>
    </Screen>
  );
};

export default Step3_WhereFrom;

const styles = StyleSheet.create({});
