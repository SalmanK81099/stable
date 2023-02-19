/* eslint-disable react/jsx-props-no-spreading */
import AppBar, { AppBarProps } from '@src/components/user/AppBar';
import { getRespValue } from '@utils/design/design';
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
  disableBottomSafeArea?: boolean;
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
    disableBottomSafeArea,
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
          minHeight: getRespValue(70),
        }}
      />
      <SafeAreaView
        edges={disableBottomSafeArea ? ['right'] : ['bottom']}
        style={{
          flex: 1,
          backgroundColor: bottomColor,
        }}
        className="flex-1"
      >
        <ViewDef
          {...rest}
          style={{ flex: 1, ...(style as object) }}
          className={`flex-1 ${className}`}
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
  disableBottomSafeArea: false,
};

export default ScreenAuth;

const styles = StyleSheet.create({});
