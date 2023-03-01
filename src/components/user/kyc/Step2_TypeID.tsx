/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import Button from '@src/components/globals/Button';
import Dropdown from '@src/components/globals/Dropdown';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const netkiSDK = require('@netki/netki-mobilesdk').default;

const Step2_TypeID = ({ back, next }: MultiStepFormProps) => {
  const [selectedItem, setSelectedItem] = useState(null);
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
        stepActive: 1,
        profileColor: Colors.light.theme.backgroundDarkGray,
        disableStartMoti: true,
        disableEndMoti: true,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.light.theme.backgroundDarkGray,
        }}
        className="flex-1 flex-col  items-center relative"
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
              color: Colors.light.theme.textDarkYellow,
            }}
            className="font-aeonik w-3/4"
          >
            What type of ID will you scan?
          </Text>

          <Text
            style={{
              fontSize: getRespValue(18),
            }}
            className="font-aeonik pt-4 pb-4 w-4/5 text-white"
          >
            Please select the type of document you will scan
          </Text>
        </MotiView>
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
        >
          <Dropdown
            label="Document type"
            dropdownType="lg"
            data={[
              {
                label: 'Passport',
                value: 'PASSPORT',
              },
              {
                label: 'Government ID',
                value: 'GOVERNMENT_ID',
              },
              {
                label: 'Driver License',
                value: 'DRIVERS_LICENSE',
              },
            ]}
            onSelect={(value: any) => {
              setSelectedItem(value.value);
            }}
            textColor="black"
          />
        </MotiView>
        {selectedItem && (
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
            className="absolute w-11/12"
            style={{
              bottom: getRespValue(30),
            }}
          >
            <Button
              onPress={() => {
                netkiSDK.configureToken(
                  '42db6773521fff88c1ba07d84b83dd6bbc94a5ee',
                  res => {
                    console.log('success', res);
                    console.log('selectedItem', selectedItem);
                    netkiSDK.setDocumentType(selectedItem);
                    // netkiSDK.enableLivenessDetection(true);
                    if (next) next();
                  },
                  res => console.log('error', res),
                );
              }}
            >
              Submit
            </Button>
          </MotiView>
        )}
      </View>
    </Screen>
  );
};

export default Step2_TypeID;

const styles = StyleSheet.create({});
