// import PhoneInput from '@src/components/globals/PhoneInput';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import Button from '@stable/Button';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import keyIcon from '@assets/icons/user/key.png';
import lockIcon from '@assets/icons/user/lock.png';

import CardSVG from '@assets/images/card.svg';
import Toggle from '@src/components/globals/Switch';
import useMyI18n from '@src/hooks/useMyI18n';

const Card = ({ navigation }: any) => {
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
      style={{ backgroundColor: Colors.light.theme.backgroundLightGreen }}
      topColor={Colors.light.theme.backgroundLightGreen}
      disableBottomSafeArea
    >
      <View className="flex-1 justify-between flex-col">
        <View className="items-center justify-center h-1/2">
          <View className="flex-row justify-center items-center">
            <CardSVG width={getRespValue(350)} height={getRespValue(240)} />
          </View>
        </View>

        <View>
          <Toggle
            onColor="#fff"
            offColor="#fff"
            label={i18n.t('components.switch.freezeCard')}
            toggleStyles={{
              backgroundColor: '#fff',
            }}
          />
          <Button
            buttonStyles={{
              backgroundColor: Colors.light.theme.buttonLightGreen,
            }}
            buttonType="leftIcon"
            icon={lockIcon}
            onPress={() => {
              navigation.navigate('Movements');
            }}
          >
            {i18n.t('components.buttons.blockCard')}
          </Button>

          <Button
            buttonStyles={{
              backgroundColor: Colors.light.theme.buttonGreen,
            }}
            buttonType="leftIcon"
            icon={keyIcon}
            onPress={() => {
              navigation.navigate('Add');
            }}
          >
            {i18n.t('components.buttons.changeCardPin')}
          </Button>
        </View>
      </View>
    </ScreenAuth>
  );
};

export default Card;

const styles = StyleSheet.create({});
