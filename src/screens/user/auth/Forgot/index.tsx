/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */

import Step1_Email from '@src/components/user/forgot/Step1_Email';
import Step2_OTPEmail from '@src/components/user/forgot/Step2_OTPEmail';
import Step3_NewPasswords from '@src/components/user/forgot/Step3_NewPasswords';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { AnimatePresence } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AuthProps } from 'types';

const Forgot = ({ navigation }: AuthProps) => {
  const { step } = useMultistepForm([
    <Step1_Email />,
    <Step2_OTPEmail />,
    <Step3_NewPasswords />,
  ]);

  return <AnimatePresence exitBeforeEnter>{step}</AnimatePresence>;
};

export default Forgot;

const styles = StyleSheet.create({});
