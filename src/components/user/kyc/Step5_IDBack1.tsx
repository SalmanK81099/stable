/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import idFront from '@assets/images/kyc/background-id-back.jpg';
import Button from '@src/components/globals/Button';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const netkiSDK = require('@netki/netki-mobilesdk').default;

const Step5_IDBack1 = ({ back, next }: MultiStepFormProps) => {
  const [cca2, setCca2] = useState('CO');
  const [visible, setVisible] = useState(false);
  return (
    <Screen
      appBar
      topColor={Colors.light.theme.backgroundLightYellow}
      appBarProps={{
        profileMoti: true,
        onPress: () => {
          if (back) back();
        },
        stepper: true,
        stepActive: 4,
        profileColor: Colors.light.theme.backgroundLightYellow,
        disableStartMoti: true,
        disableEndMoti: true,
        light: true,
      }}
    >
      <View
        className="flex-1"
        style={{
          backgroundColor: Colors.light.theme.backgroundLightYellow,
        }}
      >
        <MotiView
          key="createAccount1"
          {...(animationConfig as object)}
          from={{
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="flex-1"
          style={{
            backgroundColor: Colors.light.theme.backgroundLightYellow,
          }}
        >
          <ImageBackground
            source={idFront}
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: Colors.light.theme.backgroundLightYellow,
            }}
          >
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
                  color: 'black',
                }}
                className="font-aeonik "
              >
                Lay ID on a surface. Fit ID to frame.
              </Text>
            </MotiView>

            <View
              className="absolute flex-row justify-around w-4/5"
              style={{
                bottom: getRespValue(30),
              }}
            >
              <Button
                className="w-[45%]"
                buttonType="simple"
                buttonStyles={{
                  height: getRespValue(70),
                  backgroundColor: Colors.light.theme.backgroundDarkYellow,
                }}
              >
                Back
              </Button>
              <Button
                className="w-[45%]"
                buttonType="simple"
                buttonStyles={{
                  height: getRespValue(70),
                }}
                onPress={async () => {
                  netkiSDK.setPrimaryButtonBackgroundColor(
                    Colors.light.theme.backgroundDarkYellow,
                  );
                  netkiSDK.setButtonsCornerRadius(0);
                  netkiSDK.setPrimaryButtonTextColor(
                    Colors.light.theme.textDarkGray,
                  );
                  await netkiSDK.captureDocument('DRIVERS_LICENSE', 'FRONT');
                  // netkiSDK.identificationFlow();

                  if (next) next();
                }}
              >
                Continue
              </Button>
            </View>
          </ImageBackground>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Step5_IDBack1;

const styles = StyleSheet.create({});
