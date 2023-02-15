import { useNavigation } from '@react-navigation/native';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LinkTextProps {
  children: React.ReactNode;
  to: string;
}

const LinkText = ({ children, to }: LinkTextProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(to as never, {} as never);
      }}
    >
      <View className="flex justify-start items-start pl-4">
        <Text
          style={{
            fontSize: getRespValue(20),
            borderBottomColor: 'black',
            borderBottomWidth: 0.8,
          }}
          className="pt-4 font-aeonik"
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LinkText;

const styles = StyleSheet.create({});
