/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Tabs from '@src/components/globals/Tabs';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import useMyI18n from '@src/hooks/useMyI18n';
import { MotiView } from 'moti';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MovementsList from './components/MovementList';

interface Props extends MultiStepFormProps {
  data?: any;
  setData?: (data: any) => void;
}
const Step1_List = ({ next, data, setData }: Props) => {
  const handleSelectedMovement = (movement: any) => {
    if (setData) setData(movement);
    if (next) next();
  };

  const i18n = useMyI18n();

  return (
    <MotiView
      style={{
        flex: 1,
      }}
      exit={{}}
      // exiting={FadeOutUp}
      //   exit={{
      //     opacity: 0.5,
      //   }}
    >
      <ScreenAuth
        topColor={Colors.light.theme.backgroundLightGreen}
        appBarProps={{
          profileMoti: true,
          profileColor: Colors.light.theme.backgroundLightGreen,
          light: true,
          title: i18n.t('screens.user.account.movements.title'),
          goBack: true,
        }}
        disableBottomSafeArea
      >
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.light.theme.backgroundLightGreen,
          }}
        >
          <Tabs
            routes={[
              {
                key: 'all',
                title: i18n.t('screens.user.account.movements.step1.tabs.all'),
              },
              {
                key: 'money_added',
                title: i18n.t(
                  'screens.user.account.movements.step1.tabs.moneyAdded',
                ),
              },
              {
                key: 'money_sent',
                title: i18n.t(
                  'screens.user.account.movements.step1.tabs.moneySent',
                ),
              },
            ]}
            scenes={{
              all: () => (
                <MovementsList type="all" onPress={handleSelectedMovement} />
              ),
              money_added: () => (
                <MovementsList
                  type="money_added"
                  onPress={handleSelectedMovement}
                />
              ),
              money_sent: () => (
                <MovementsList
                  type="money_sent"
                  onPress={handleSelectedMovement}
                />
              ),
            }}
          />
        </View>
      </ScreenAuth>
    </MotiView>
  );
};

Step1_List.defaultProps = {
  data: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setData: () => {},
};
export default Step1_List;

const styles = StyleSheet.create({});
