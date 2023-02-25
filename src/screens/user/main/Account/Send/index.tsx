/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import Step1_WhoTo from '@src/components/user/account/send/Step1_WhoTo';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { AnimatePresence } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';

const Send = () => {
  const { step } = useMultistepForm([<Step1_WhoTo />]);
  return <AnimatePresence exitBeforeEnter>{step}</AnimatePresence>;
};

export default Send;

const styles = StyleSheet.create({});
