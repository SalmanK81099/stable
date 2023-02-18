/* eslint-disable react/jsx-props-no-spreading */
import AppBar, { AppBarProps } from '@src/components/user/AppBar';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View as ViewDef,
  ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends ViewProps {
  scroll?: boolean;
  topColor?: string;
  bottomColor?: string;
  whiteScan?: boolean;
  appBarProps?: AppBarProps;
}

const ScreenAuth = (props: Props) => {
  const {
    scroll,
    className,
    children,
    topColor,
    bottomColor,
    style,
    appBarProps,
    whiteScan,
    ...rest
  } = props;

  if (scroll)
    return (
      <SafeAreaView edges={['top']}>
        <ScrollView>
          <ViewDef {...rest}>{children}</ViewDef>
        </ScrollView>
      </SafeAreaView>
    );

  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={{
          backgroundColor: topColor,
        }}
      />
      <SafeAreaView
        edges={['bottom']}
        style={{ flex: 1, backgroundColor: bottomColor }}
      >
        <ViewDef
          {...rest}
          style={{ flex: 1, ...(style as object) }}
          className={className}
        >
          <AppBar {...appBarProps} whiteScan={whiteScan} />
          {children}
        </ViewDef>
      </SafeAreaView>
    </>
  );
};

ScreenAuth.defaultProps = {
  scroll: false,
  topColor: '#000',
  bottomColor: '#000',
  whiteScan: false,
  appBarProps: {},
};

export default ScreenAuth;

const styles = StyleSheet.create({});
