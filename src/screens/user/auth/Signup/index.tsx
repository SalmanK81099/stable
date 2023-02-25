/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import Step1_BasicDetails from '@src/components/user/signup/Step1_BasicDetails';
import Step2_OTP from '@src/components/user/signup/Step2_OTP';
import Step3_OTPEmail from '@src/components/user/signup/Step3_OTPEmail';
import Step4_Done from '@src/components/user/signup/Step4_Done';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { AnimatePresence } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AuthProps } from 'types';

const Signup = ({ navigation }: AuthProps) => {
  const { step, goTo } = useMultistepForm([
    <Step1_BasicDetails />,
    <Step2_OTP />,
    <Step3_OTPEmail />,
    <Step4_Done />,
  ]);

  // useEffect(() => {
  //   goTo(3);
  // }, []);

  return <AnimatePresence exitBeforeEnter>{step}</AnimatePresence>;
};

export default Signup;

const styles = StyleSheet.create({});
