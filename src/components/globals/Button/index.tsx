/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import arrowRight from '@assets/icons/arrow-right-black.png';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, ButtonProps } from 'react-native-paper';

interface MyButtonProps extends ButtonProps {
  buttonStyles?: any;
  light?: boolean;
  imgSource?: any;
  buttonType?: string;
}

const Button = (props: MyButtonProps) => {
  const {
    buttonStyles,
    children,
    loading,
    light,
    imgSource,
    disabled,
    className,
    buttonType,
    ...others
  } = props;

  if (buttonType === 'simple') {
    return (
      <Pressable
        {...others}
        style={{ ...styles.simpleButton, ...buttonStyles }}
        className={`w-full  rounded-none   ${
          light ? 'bg-[#FFF7C6]' : 'bg-[#EAB67D]'
        }  ${className} ${disabled ? 'bg-[#EFEFEF]' : ''}`}
      >
        {loading ? (
          <View className="flex w-full h-full items-center justify-center">
            <ActivityIndicator size="small" color="#000" />
          </View>
        ) : (
          <View className=" justify-between items-center w-full h-full">
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
    );
  }
  if (buttonType === 'leftIcon') {
    return (
      <Pressable
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
              source={imgSource}
              style={styles.leftIconButtonIcon}
              className={`${disabled ? 'opacity-20' : ''}`}
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
    );
  }

  return (
    <Pressable
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
    </Pressable>
  );
};

export default Button;

Button.defaultProps = {
  buttonStyles: {},
  light: false,

  imgSource: '',
  buttonType: '',
};

const styles = StyleSheet.create({
  simpleButton: {
    height: getRespValue(55),
  },
  leftIconButton: {
    height: getRespValue(95),
  },
  leftIconButtonIcon: {
    height: getRespValue(45),
    width: getRespValue(45),
  },
  rightIconButtonIcon: {
    height: getRespValue(45),
    width: getRespValue(45),
  },
  defaultButton: {
    height: getRespValue(75),
  },
});
