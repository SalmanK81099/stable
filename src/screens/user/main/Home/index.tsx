// import PhoneInput from '@src/components/globals/PhoneInput';
import { useIsFocused } from '@react-navigation/native';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInUp, FadeOutUp, Layout } from 'react-native-reanimated';

const Home = () => {
  const isFocused = useIsFocused();
  return (
    <ScreenAuth
      className="bg-[#D0FFE6]"
      topColor="#D0FFE6"
      disableBottomSafeArea
    >
      {isFocused && (
        <Animated.View
          exiting={FadeOutUp}
          entering={FadeInUp}
          layout={Layout}
        />
      )}
    </ScreenAuth>
  );
};

export default Home;

const styles = StyleSheet.create({});
