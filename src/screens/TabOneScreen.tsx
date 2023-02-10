/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer } from 'react';
import { StyleSheet, Pressable, View, Image } from 'react-native';
import { MotiView } from 'moti';
import { Text } from '@components/Themed';
import Button from '@stable/Button';
import Input from '@stable/Input';
import Checkbox from '@stable/Checkbox';
import Switch from '@stable/Switch';

const Shape = () => {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: 'timing',
      }}
      className="w-64 h-64 bg-slate-400 rounded-3xl"
    />
  );
};

const HelloWorld = () => {
  const [visible, toggle] = useReducer(s => !s, true);

  return (
    <Pressable onPress={toggle} className="flex-1 bg-slate-300 ">
      <Text className="text-2xl font-bold text-center text-slate-900 mb-4 font-aeonik">
        Press me for a magic trick
      </Text>

      {/* {visible && <Shape />} */}

      {/* <Button left light source={require('@assets/icons/lock.png')}>
        Hello
      </Button>
      <Button left source={require('@assets/icons/key.png')}>
        Hello
      </Button> */}
    </Pressable>
  );
};

export default HelloWorld;

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
});
