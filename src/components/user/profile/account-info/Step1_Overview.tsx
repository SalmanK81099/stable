/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import keyIcon from '@assets/icons/user/key.png';

import PhoneSVG from '@assets/icons/user/profile/call-account-info.svg';
import EmailSVG from '@assets/icons/user/profile/message-account-info.svg';
import UserSVG from '@assets/icons/user/profile/user-account-info.svg';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import useMyI18n from '@src/hooks/useMyI18n';
import { animationConfig } from '@utils/animation/animation';
import { MotiView } from 'moti';

const DetailRow = ({
  SVG,
  text,
}: {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}) => {
  return (
    <View className="flex flex-row justify-start gap-4 items-center py-4">
      <SVG />
      <Text style={{ fontSize: getRespValue(20) }} className="font-aeonik">
        {text}
      </Text>
    </View>
  );
};

const Step1_Overview = ({ next }: MultiStepFormProps) => {
  const i18n = useMyI18n();

  return (
    <MotiView
      style={{
        flex: 1,
      }}
      {...(animationConfig as object)}
      key="confirm-password-screen"
      exit={{
        opacity: 0.6,
      }}
      from={{
        opacity: 0.6,
      }}
    >
      <ScreenAuth
        appBarProps={{
          profileMoti: true,
          light: true,
          profileColor: Colors.light.theme.backgroundLightGreen,
          goBack: true,
        }}
        topColor={Colors.light.theme.backgroundLightGreen}
      >
        <View
          style={{
            backgroundColor: Colors.light.theme.backgroundLightGreen,
            height: getRespValue(220),
          }}
        >
          <MotiView
            key="overview-profile-text"
            {...(animationConfig as object)}
            from={{
              translateX: -100,
              opacity: 0,
            }}
            exit={{
              translateX: -100,
              opacity: 0,
            }}
          >
            <Text
              style={{
                fontSize: getRespValue(44),
              }}
              className="font-aeonik pl-4 pt-4 w-2/4"
            >
              {i18n.t('screens.user.profile.accountInfo.step1.title')}
            </Text>
          </MotiView>
        </View>
        <View
          className={`bg-[${Colors.light.theme.backgroundDarkGreen}] flex-1 justify-between`}
          style={{
            backgroundColor: Colors.light.theme.backgroundDarkGreen,
          }}
        >
          <View className="flex-col px-4 ">
            <DetailRow
              SVG={UserSVG}
              text={i18n.t('screens.user.profile.accountInfo.step1.username')}
            />
            <DetailRow
              SVG={EmailSVG}
              text={i18n.t('screens.user.profile.accountInfo.step1.email')}
            />

            <DetailRow
              SVG={PhoneSVG}
              text={i18n.t('screens.user.profile.accountInfo.step1.phone')}
            />
          </View>
          <MotiView
            key="overview-profile-button"
            {...(animationConfig as object)}
            exit={{
              opacity: 0,
              translateY: 100,
            }}
            from={{
              opacity: 1,
              translateY: 100,
            }}
          >
            <Button
              buttonStyles={{
                backgroundColor: Colors.light.theme.buttonGreen,
              }}
              buttonType="leftIcon"
              icon={keyIcon}
              onPress={() => next && next()}
              // onPress={() => {
              //   navigation.navigate('Support');
              // }}
            >
              {i18n.t('components.buttons.changePassword')}
            </Button>
          </MotiView>
        </View>
      </ScreenAuth>
    </MotiView>
  );
};

export default Step1_Overview;

const styles = StyleSheet.create({});
