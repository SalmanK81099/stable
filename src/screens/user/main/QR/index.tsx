/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import Step1_Qr from '@src/components/user/qr/Step1_Qr';
import Step2_ScanQr from '@src/components/user/qr/Step2_ScanQr';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import React from 'react';

import { StyleSheet } from 'react-native';

const QR = () => {
  const { step } = useMultistepForm([<Step1_Qr />, <Step2_ScanQr />]);

  return <>{step}</>;
};

export default QR;

const styles = StyleSheet.create({});
