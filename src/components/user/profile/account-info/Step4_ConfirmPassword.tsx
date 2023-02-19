/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import Input from '@src/components/globals/Input';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import { KeyboardAvoidingView } from 'native-base';
import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const Step4_ConfirmPassword = ({ back, next }: MultiStepFormProps) => {
  return (
    <MotiView
      style={{
        flex: 1,
      }}
      {...(animationConfig as object)}
      key="confirm-password-screen"
      from={{}}
      exit={{
        opacity: 0,
      }}
    >
      <ScreenAuth
        appBarProps={{
          profile: true,
          profileColor: Colors.light.background,
          title: 'Change password',
          onPress: () => back && back(),
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
            key="new-password-text"
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
              Confirm your password
            </Text>

            <Input
              style={{
                backgroundColor: Colors.light.background,
                borderBottomColor: Colors.light.textGray,
                borderTopColor: Colors.light.textGray,
                borderTopWidth: 2,
              }}
              placeholder="Password"
              className="mt-4"
              password
            />
          </MotiView>

          <MotiView
            key="new-password-button"
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
              Submit
            </Button>
          </MotiView>
        </KeyboardAvoidingView>
      </ScreenAuth>
    </MotiView>
  );
};

export default Step4_ConfirmPassword;

const styles = StyleSheet.create({});
