/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import Input from '@src/components/globals/Input';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import useMyI18n from '@src/hooks/useMyI18n';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import { KeyboardAvoidingView } from 'native-base';
import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const Step2_CurrentPassword = ({ back, next }: MultiStepFormProps) => {
  const i18n = useMyI18n();

  return (
    <MotiView
      style={{
        flex: 1,
      }}
      {...(animationConfig as object)}
      key="confirm-password-screen"
      from={{
        opacity: 0.6,
      }}
      exit={{}}
    >
      <ScreenAuth
        appBarProps={{
          profileMoti: true,
          profileColor: Colors.light.background,
          title: i18n.t('screens.user.profile.accountInfo.step2.header'),
          onPress: () => back && back(),
          disableEndMoti: true,
        }}
        topColor={Colors.light.background}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={getRespValue(68)}
          style={{
            backgroundColor: Colors.light.background,
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <MotiView
            key="current-password-text"
            {...(animationConfig as object)}
            exit={{
              translateX: -100,
              opacity: 0,
            }}
            from={{
              translateX: -100,
              opacity: 0,
            }}
          >
            <Text
              style={{
                fontSize: getRespValue(44),
                color: Colors.light.theme.backgroundLightGreen,
              }}
              className="font-aeonik pl-4 pt-4 "
            >
              {i18n.t('screens.user.profile.accountInfo.step2.title')}
            </Text>

            <Input
              style={{
                backgroundColor: Colors.light.background,
                borderBottomColor: Colors.light.textGray,
                borderTopColor: Colors.light.textGray,
                borderTopWidth: 2,
              }}
              placeholder={i18n.t('components.inputs.placeholders.password')}
              className="mt-4"
              password
            />
          </MotiView>

          <MotiView
            key="current-password-button"
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
                backgroundColor: Colors.light.theme.backgroundDarkGreen,
              }}
              onPress={() => next && next()}
            >
              {i18n.t('components.buttons.authenticate')}
            </Button>
          </MotiView>
        </KeyboardAvoidingView>
      </ScreenAuth>
    </MotiView>
  );
};

export default Step2_CurrentPassword;

const styles = StyleSheet.create({});
