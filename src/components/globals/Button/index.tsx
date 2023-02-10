/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import Colors from '@src/constants/Colors';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, ButtonProps } from 'react-native-paper';

interface MyButtonProps extends ButtonProps {
  buttonStyles?: any;
  light?: boolean;
  left?: boolean;
  source?: any;
}

const Button = (props: MyButtonProps) => {
  const {
    buttonStyles,
    children,
    loading,
    light,
    left,
    source,
    disabled,
    className,
    ...others
  } = props;

  return (
    <View>
      {left ? (
        <Pressable
          {...others}
          style={{ ...styles, ...buttonStyles }}
          className={`w-full h-[90px] rounded-none   ${
            light
              ? `bg-${Colors.light.theme.lightGreen}`
              : `bg-${Colors.light.theme.darkGreen}`
          }  ${className} ${disabled ? `bg-${Colors.light.theme.white}` : ''}`}
        >
          {loading ? (
            <View className="flex w-full h-full items-center justify-center">
              <ActivityIndicator size="small" color="#000" />
            </View>
          ) : (
            <View className="flex-row justify-items-start items-center w-full h-full px-3 gap-2">
              <Image
                // eslint-disable-next-line global-require
                source={source}
                className={`w-9 h-9 ${disabled ? 'opacity-20' : ''}`}
              />
              <Text
                className={`text-black font-aeonik text-xl ${
                  disabled ? 'opacity-20' : ''
                }`}
              >
                {children}
              </Text>
            </View>
          )}
        </Pressable>
      ) : (
        <Pressable
          {...others}
          style={{ ...styles, ...buttonStyles }}
          className={`w-full h-[70px] rounded-none   ${
            light
              ? `bg-${Colors.light.theme.lightOrange}`
              : `bg-${Colors.light.theme.darkOrange}`
          }  ${className} ${disabled ? `bg-${Colors.light.theme.white}` : ''}`}
        >
          {loading ? (
            <View className="flex w-full h-full items-center justify-center">
              <ActivityIndicator size="small" color="#000" />
            </View>
          ) : (
            <View className="flex-row justify-between items-center w-full h-full px-3">
              <Text
                className={`text-black font-aeonik text-xl ${
                  disabled ? 'opacity-20' : ''
                }`}
              >
                {children}
              </Text>
              <Image
                // eslint-disable-next-line global-require
                source={source}
                className={`w-9 h-9 ${disabled ? 'opacity-20' : ''}`}
              />
            </View>
          )}
        </Pressable>
      )}
    </View>
  );
};

export default Button;

Button.defaultProps = {
  buttonStyles: {},
  light: false,
  left: false,
  source: '',
};

const styles = StyleSheet.create({});
