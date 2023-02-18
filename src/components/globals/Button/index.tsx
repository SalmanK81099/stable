/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import arrowRight from '@assets/icons/arrow-right-black.png';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
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
  icon?: any;
  buttonType?: string;
  loading?: boolean;
}

const Button = (props: MyButtonProps) => {
  const {
    buttonStyles,
    children,
    loading,
    light,
    icon,
    disabled,
    className,
    buttonType,
    ...others
  } = props;

  if (buttonType === 'simple') {
    return (
      <TouchableOpacity
        {...others}
        style={{ ...styles.simpleButton, ...buttonStyles }}
        className={`w-full  rounded-none  ${
          light ? 'bg-[#FFF7C6]' : 'bg-[#EAB67D]'
        }  ${className} ${disabled ? 'bg-[#EFEFEF]' : ''}`}
      >
        {loading ? (
          <View className="flex w-full h-full items-center justify-center">
            <ActivityIndicator size="small" color="#000" />
          </View>
        ) : (
          <View className=" justify-center items-center w-full h-full">
            <Text
              className={`text-black font-aeonik text-xl ${
                disabled ? 'opacity-20' : ''
              }`}
            >
              {children}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
  if (buttonType === 'leftIcon') {
    return (
      <TouchableOpacity
        {...others}
        style={{ ...styles.leftIconButton, ...buttonStyles }}
        className={`w-full  rounded-none  ${
          light ? 'bg-[#D0FFE6]' : 'bg-[#7DCCA1]'
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
              source={icon}
              style={styles.leftIconButtonIcon}
              className={`${disabled ? 'opacity-20' : ''}`}
            />
            <Text
              style={{
                fontSize: getRespValue(27),
              }}
              className={`text-black font-aeonik  pl-2 ${
                disabled ? 'opacity-20' : ''
              }`}
            >
              {children}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      {...others}
      style={{ ...styles.defaultButton, ...buttonStyles }}
      className={`w-full  rounded-none   ${
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
            source={arrowRight}
            style={styles.rightIconButtonIcon}
            className={` ${disabled ? 'opacity-20' : ''}`}
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
  icon: '',
  buttonType: '',
};

const styles = StyleSheet.create({
  simpleButton: {
    height: getRespValue(60),
    items: 'center',
    justifyContent: 'center',
  },
  leftIconButton: {
    height: getRespValue(100),
  },
  leftIconButtonIcon: {
    height: getRespValue(40),
    width: getRespValue(40),
  },
  rightIconButtonIcon: {
    height: getRespValue(45),
    width: getRespValue(45),
  },
  defaultButton: {
    height: getRespValue(80),
  },
});
