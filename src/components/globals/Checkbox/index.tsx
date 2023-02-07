/* eslint-disable react/jsx-props-no-spreading */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Checkbox as CheckboxPaper, CheckboxProps } from 'react-native-paper';

const Checkbox = (props: CheckboxProps) => {
  return <CheckboxPaper {...props} />;
};

export default Checkbox;
const styles = StyleSheet.create({});
