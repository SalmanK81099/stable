import Button from '@src/components/globals/Button';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import useMyI18n from '@src/hooks/useMyI18n';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QR = ({ next }: MultiStepFormProps) => {
  const i18n = useMyI18n();
  return (
    <ScreenAuth
      appBarProps={{
        profile: true,
        title: 'My QR',
        light: true,
        profileColor: Colors.light.theme.backgroundLightYellow,
      }}
      topColor={Colors.light.theme.backgroundLightYellow}
    >
      <View
        style={{
          backgroundColor: Colors.light.theme.backgroundLightYellow,
          height: getRespValue(220),
          alignItems: 'center',
          zIndex: 9,
          // justifyContent: 'flex-end',
        }}
      >
        <View className="pt-9 mt-[110px]">
          <View
            // style={{
            //   backgroundColor: 'white',
            //   borderRadius: 50,
            //   width: 100,
            //   height: 100,
            //   alignItems: 'center',
            //   justifyContent: 'center',
            // }}
            className=" bg-white rounded-full w-28 h-28 flex items-center justify-center "
          >
            <Text
              style={{
                fontSize: getRespValue(44),
              }}
              className="font-aeonik  "
            >
              ET
            </Text>
          </View>
        </View>
      </View>
      {/* <View className="flex-initial w-full flex-col items-center justify-start bg-[#FDEEA4] py-7 space-y-10"> */}
      {/* <View className="flex flex-col space-y-9 justify-center items-center bg-[#FDEEA4]"> */}
      <View
        className={` flex-1 justify-around items-center`}
        style={{
          backgroundColor: Colors.light.theme.backgroundDarkYellow,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: getRespValue(44),
            }}
            className="font-aeonik "
          >
            Erika Torres
          </Text>
        </View>
        <View>
          <QRCode
            value="Just some string value"
            size={200}
            logoBackgroundColor="transparent"
          />
        </View>
      </View>
      <View className="pt-9 bg-[#FDEEA4]">
        <Button onPress={() => next && next()}>
          {i18n.t('screens.user.auth.welcome.button')}
        </Button>
      </View>
    </ScreenAuth>
  );
};

export default QR;

const styles = StyleSheet.create({});
