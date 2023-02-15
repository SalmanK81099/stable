/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import Input from '@src/components/globals/Input';
import Modal from '@src/components/globals/Modal';
// import MotiView from '@src/components/globals/MotiView';

import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import { useToast } from 'native-base';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line camelcase
const Step1_Email = ({ next }: MultiStepFormProps) => {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <MotiView
        key="createAccount"
        {...(animationConfig as object)}
        exit={{
          opacity: 0,
          translateY: -100,
        }}
        style={{
          height: getRespValue(300),
        }}
      >
        <Modal
          ok
          visible={showModal}
          setVisible={setShowModal}
          onOk={() => {
            if (next) next();
          }}
        >
          <Text
            className="text-center p-4 font-aeonik"
            style={{
              fontSize: getRespValue(18),
            }}
          >
            We sent you a link to reset your password to:{' '}
            <Text
              className="text-center p-4 font-aeonik-bold"
              style={{
                fontSize: getRespValue(18),
              }}
            >
              erikatorres@gmail.com
            </Text>
          </Text>
        </Modal>
        <View className="px-4 pt-8 pb-8">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik w-3/4"
          >
            Enter your email and we&apos;ll send you a link to reset your
            password
          </Text>
        </View>
      </MotiView>

      <View
        className={`bg-[${Colors.light.theme.darkYellow}] h-full flex-1 w-full flex-col items-start justify-start`}
      >
        <MotiView
          key="createAccountDetails"
          {...(animationConfig as object)}
          from={{
            opacity: 0,
            translateY: 100,
          }}
          exit={{
            opacity: 0,
            translateY: 100,
          }}
          style={{
            backgroundColor: Colors.light.theme.darkYellow,
          }}
          className="bg-none h-full flex-1 w-full flex-col items-start justify-start"
        >
          <View className="flex-1 w-full">
            <Input placeholder="Email" />
          </View>
          <Button
            onPress={() => {
              setShowModal(true);
            }}
          >
            Reset Password
          </Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Step1_Email;

const styles = StyleSheet.create({});
