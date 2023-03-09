/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddedSVG from '@assets/icons/user/account/added.svg';
import ReceivedSVG from '@assets/icons/user/account/received.svg';
import SentSVG from '@assets/icons/user/account/sent.svg';

import Button from '@src/components/globals/Button';
import useMyI18n from '@src/hooks/useMyI18n';
import { animationConfig } from '@utils/animation/animation';
import { MotiView } from 'moti';

const DetailsRow = ({ title, value }: { title: string; value: string }) => {
  return (
    <View className="flex-row justify-between py-2">
      <Text
        className="font-aeonik"
        style={{
          fontSize: getRespValue(18),
        }}
      >
        {title}
      </Text>
      <Text
        className="font-aeonik"
        style={{
          fontSize: getRespValue(18),
        }}
      >
        {value}
      </Text>
    </View>
  );
};

const getColor = (type: string) => {
  switch (type) {
    case 'money_added':
      return {
        light: Colors.light.theme.backgroundLightGreen,
        dark: Colors.light.theme.backgroundDarkGreen,
        button: Colors.light.theme.buttonGreen,
      };
    case 'money_withdrawed':
      return {
        light: Colors.light.theme.backgroundLightPink,
        dark: Colors.light.theme.backgroundDarkPink,
        button: Colors.light.theme.buttonDarkPink,
      };
    case 'money_sent':
      return {
        light: Colors.light.theme.backgroundLightPink,
        dark: Colors.light.theme.backgroundDarkPink,
        button: Colors.light.theme.buttonDarkPink,
      };
    default:
      return {
        light: Colors.light.theme.backgroundLightGreen,
        dark: Colors.light.theme.backgroundDarkGreen,
      };
  }
};
interface Props extends MultiStepFormProps {
  data?: any;
  setData?: (data: any) => void;
}

const Step2_Details = ({ back, data }: Props) => {
  const i18n = useMyI18n();
  return (
    <ScreenAuth
      appBarProps={{
        profileMoti: true,
        light: true,
        profileColor: getColor(data.type).light,
        title: i18n.t('components.headers.details'),
        onPress: () => back && back(),
      }}
      topColor={getColor(data.type).light}
      disableBottomSafeArea
    >
      <View
        style={{
          backgroundColor: getColor(data.type).light,
          flex: 1,
        }}
      >
        <MotiView
          key="movements-details-step-2"
          style={{
            flex: 1,
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...(animationConfig as object)}
          from={{
            opacity: 0.5,
            translateY: 100,
          }}
          exit={{
            opacity: 0.4,
            translateY: 100,
          }}
        >
          <View
            style={{
              backgroundColor: getColor(data.type).light,
              height: getRespValue(270),
            }}
            className="flex justify-around items-center py-4"
          >
            {data.type === 'money_added' && (
              <AddedSVG
                style={{
                  width: getRespValue(75),
                  height: getRespValue(75),
                }}
              />
            )}
            {data.type === 'money_received' && (
              <ReceivedSVG
                style={{
                  width: getRespValue(75),
                  height: getRespValue(75),
                }}
              />
            )}
            {(data.type === 'money_sent' ||
              data.type === 'money_withdrawed') && (
              <SentSVG
                style={{
                  width: getRespValue(75),
                  height: getRespValue(75),
                }}
              />
            )}
            <Text
              className="font-aeonik"
              style={{
                fontSize: getRespValue(20),
              }}
            >
              You{' '}
              {data.type === 'money_added'
                ? i18n.t('screens.user.account.movements.step2.added')
                : data.type === 'money_received'
                ? i18n.t('screens.user.account.movements.step2.received')
                : data.type === 'money_sent'
                ? i18n.t('screens.user.account.movements.step2.sent')
                : i18n.t('screens.user.account.movements.step2.withdrawed')}
            </Text>
            <Text
              className="font-aeonik-bold"
              style={{
                fontSize: getRespValue(44),
              }}
            >
              $0.00 USD
            </Text>
            <Text
              className="font-aeonik"
              style={{
                fontSize: getRespValue(22),
                color: Colors.light.theme.textDarkGray,
              }}
            >
              $00.000 COP
            </Text>
          </View>
          <View
            className={`bg-[${
              getColor(data.type).dark
            }] flex-1 justify-between  pt-8`}
            style={{
              backgroundColor: getColor(data.type).dark,
            }}
          >
            <View className="px-4">
              <DetailsRow
                title={i18n.t('screens.user.account.movements.step2.sentTo')}
                value="John Doe"
              />
              <DetailsRow
                title={i18n.t(
                  'screens.user.account.movements.step2.accountNumber',
                )}
                value="+57 37485960"
              />
              <DetailsRow
                title={i18n.t(
                  'screens.user.account.movements.step2.timeAndDate',
                )}
                value="Aug 3 2022 18:00"
              />
              <DetailsRow
                title={i18n.t(
                  'screens.user.account.movements.step2.exchangeRate',
                )}
                value="1 USD = 1 COL"
              />
            </View>
            <Button
              buttonStyles={{
                backgroundColor: getColor(data.type).button,
              }}
            >
              {i18n.t('components.buttons.downloadVoucher')}
            </Button>
          </View>
        </MotiView>
      </View>
    </ScreenAuth>
  );
};

Step2_Details.defaultProps = {
  data: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setData: () => {},
};

export default Step2_Details;

const styles = StyleSheet.create({});