// import PhoneInput from '@src/components/globals/PhoneInput';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import Button from '@stable/Button';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import addIcon from '@assets/icons/user/add.png';
import movementsIcon from '@assets/icons/user/movements.png';
import sendIcon from '@assets/icons/user/send.png';
import useMyI18n from '@src/hooks/useMyI18n';

const Account = ({ navigation }: any) => {
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Contacts.requestPermissionsAsync();
  //     if (status === 'granted') {
  //       const { data } = await Contacts.getContactsAsync();

  //       if (data.length > 0) {
  //         const contact = data[0];
  //         console.log(data);
  //       }
  //     }
  //   })();
  // }, []);

  const i18n = useMyI18n();
  return (
    <ScreenAuth
      whiteScan
      style={{ backgroundColor: Colors.light.background }}
      topColor={Colors.light.background}
      disableBottomSafeArea
    >
      <View className="flex-1 justify-between flex-col">
        <View className="items-center justify-center h-1/2">
          <View className="flex-row justify-center items-center">
            <Text
              className="text-white  font-aeonik mt-3"
              style={{
                fontSize: getRespValue(40),
              }}
            >
              $
            </Text>
            <Text
              className="text-white font-aeonik-bold text-center items-center mr-2"
              style={{
                fontSize: getRespValue(80),
              }}
            >
              00,00
            </Text>
            <Text className="  text-white text-2xl font-aeonik">USD</Text>
          </View>
        </View>

        <View>
          <Button
            buttonStyles={{
              backgroundColor: Colors.light.theme.buttonBlue,
            }}
            buttonType="leftIcon"
            icon={movementsIcon}
            onPress={() => {
              navigation.navigate('Movements');
            }}
          >
            {i18n.t('screens.user.account.movements.title')}
          </Button>

          <Button
            buttonStyles={{
              backgroundColor: Colors.light.theme.buttonPink,
            }}
            buttonType="leftIcon"
            icon={sendIcon}
            onPress={() => {
              navigation.navigate('Send');
            }}
          >
            {i18n.t('screens.user.account.send.title')}
          </Button>

          <Button
            buttonStyles={{
              backgroundColor: Colors.light.theme.buttonYellow,
            }}
            buttonType="leftIcon"
            icon={addIcon}
            onPress={() => {
              navigation.navigate('Add');
            }}
          >
            {i18n.t('screens.user.account.add.title')}
          </Button>
        </View>
      </View>
    </ScreenAuth>
  );
};

export default Account;

const styles = StyleSheet.create({});
