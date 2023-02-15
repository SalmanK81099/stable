/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface MyButtonProps extends TouchableOpacityProps {
  buttonStyles?: any;
  light?: boolean;
  loading?: boolean;
}

const Button = (props: MyButtonProps) => {
  const {
    buttonStyles,
    children,
    loading,
    light,
    disabled,
    className,
    ...others
  } = props;

  return (
    <TouchableOpacity
      {...others}
      style={{ ...styles, ...buttonStyles }}
      className={`w-full h-[70px] rounded-none   ${
        light ? 'bg-[#FFF7C6]' : 'bg-[#EAB67D]'
      }  ${className} ${disabled ? 'bg-[#EFEFEF]' : ''}`}
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
            source={require('@assets/icons/arrow-right-black.png')}
            className={`w-9 h-9 ${disabled ? 'opacity-20' : ''}`}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

Button.defaultProps = {
  buttonStyles: {},
  light: false,
  loading: false,
};

const styles = StyleSheet.create({});
