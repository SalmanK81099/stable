/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */

import Step1_LetsMeet from '@src/components/user/kyc/Step1_LetsMeet';
import Step2_TypeID from '@src/components/user/kyc/Step2_TypeID';
import Step3_WhereFrom from '@src/components/user/kyc/Step3_WhereFrom';
import Step4_IDFront1 from '@src/components/user/kyc/Step4_IDFront1';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { AnimatePresence } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AuthProps } from 'types';

const KYC = ({ navigation }: AuthProps) => {
  const { step } = useMultistepForm([
    <Step1_LetsMeet />,
    <Step2_TypeID />,
    <Step3_WhereFrom />,
    <Step4_IDFront1 />,
  ]);

  return <AnimatePresence exitBeforeEnter>{step}</AnimatePresence>;
};

export default KYC;

const styles = StyleSheet.create({});
