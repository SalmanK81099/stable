import ScreenAuth from '@src/components/globals/ScreenAuth';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const QR = () => {
  return (
    <ScreenAuth
      appBarProps={{
        profile: true,
        title: 'My QR',
      }}
    >
      <Text>QR</Text>
    </ScreenAuth>
  );
};

export default QR;

const styles = StyleSheet.create({});
