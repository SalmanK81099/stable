/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-props-no-spreading */
import Step1_List from '@src/components/user/account/movements/Step1_List';
import Step2_Details from '@src/components/user/account/movements/Step2_Details';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { AnimatePresence } from 'moti';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const Movements = () => {
  const [data, setData] = useState({});
  const { step } = useMultistepForm([<Step1_List />, <Step2_Details />], {
    data,
    setData,
  });

  return <AnimatePresence exitBeforeEnter>{step}</AnimatePresence>;
};

export default Movements;

const styles = StyleSheet.create({});
