/* eslint-disable react/jsx-props-no-spreading */
import CheveronLeftWhite from '@assets/icons/chevron-left-black.svg';
import CheveronLeftBlack from '@assets/icons/chevron-left-white.svg';

import NotificationIcon from '@assets/icons/notifications.svg';
import WhiteScanner from '@assets/icons/user/scan-white.svg';
import scanner from '@assets/icons/user/scan.png';
import { useNavigation } from '@react-navigation/native';
import Colors from '@src/constants/Colors';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import { useCallback } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp, FadeOutUp, Layout } from 'react-native-reanimated';

export interface AppBarProps {
  whiteScan?: boolean;
  profile?: boolean;
  title?: string;
  onPress?: () => void;
  profileColor?: string;
  light?: boolean;
  notifications?: boolean;
  goBack?: boolean;
  isFocused?: boolean;
  animateProfile?: boolean;
  profileMoti?: boolean;
  disableStartMoti?: boolean;
  disableEndMoti?: boolean;
  stepActive?: number;
  stepper?: boolean;
}

const AppBar = ({
  whiteScan,
  profile,
  title,
  onPress,
  profileColor,
  light,
  notifications,
  goBack,
  isFocused,
  animateProfile,
  profileMoti,
  disableStartMoti,
  disableEndMoti,
  stepActive,
  stepper,
}: AppBarProps) => {
  const navigation = useNavigation();

  const renderDots = useCallback(() => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}
        className="gap-3"
      >
        <MotiView
          {...(animationConfig as object)}
          from={{
            opacity: stepActive === 1 ? 0 : 1,
          }}
          exit={{
            opacity: stepActive === 1 ? 0 : 1,
          }}
          style={{
            width: getRespValue(10),
            height: getRespValue(10),
            borderRadius: getRespValue(10),
            backgroundColor:
              stepActive === 1
                ? '#fff'
                : Colors.light.theme.backgroundMediumGray,
          }}
        />
        <MotiView
          {...(animationConfig as object)}
          from={{
            opacity: stepActive === 2 ? 0 : 1,
          }}
          exit={{
            opacity: stepActive === 2 ? 0 : 1,
          }}
          style={{
            width: getRespValue(10),
            height: getRespValue(10),
            borderRadius: getRespValue(10),
            backgroundColor:
              stepActive === 2
                ? '#fff'
                : Colors.light.theme.backgroundMediumGray,
          }}
        />
        <MotiView
          {...(animationConfig as object)}
          from={{
            opacity: stepActive === 3 ? 0 : 1,
          }}
          exit={{
            opacity: stepActive === 3 ? 0 : 1,
          }}
          style={{
            width: getRespValue(10),
            height: getRespValue(10),
            borderRadius: getRespValue(10),
            backgroundColor:
              stepActive === 3
                ? '#fff'
                : Colors.light.theme.backgroundMediumGray,
          }}
        />
        <MotiView
          {...(animationConfig as object)}
          from={{
            opacity: stepActive === 4 ? 0 : 1,
          }}
          exit={{
            opacity: stepActive === 4 ? 0 : 1,
          }}
          style={{
            width: getRespValue(10),
            height: getRespValue(10),
            borderRadius: getRespValue(10),
            backgroundColor:
              stepActive === 4
                ? '#fff'
                : Colors.light.theme.backgroundMediumGray,
          }}
        />
        <MotiView
          {...(animationConfig as object)}
          from={{
            opacity: stepActive === 5 ? 0 : 1,
          }}
          exit={{
            opacity: stepActive === 5 ? 0 : 1,
          }}
          style={{
            width: getRespValue(10),
            height: getRespValue(10),
            borderRadius: getRespValue(10),
            backgroundColor:
              stepActive === 5
                ? '#fff'
                : Colors.light.theme.backgroundMediumGray,
          }}
        />
      </View>
    );
  }, [stepActive]);

  const renderContent = useCallback(() => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            if (goBack) {
              navigation.goBack();
              return;
            }
            if (onPress) {
              onPress();
            } else {
              navigation.navigate('Home' as never);
            }
          }}
          className="w-1/5"
        >
          {light ? (
            <CheveronLeftWhite
              style={{
                width: getRespValue(40),
                height: getRespValue(40),
              }}
            />
          ) : (
            <CheveronLeftBlack
              style={{
                width: getRespValue(40),
                height: getRespValue(40),
              }}
            />
          )}
        </TouchableOpacity>
        {stepper ? (
          renderDots()
        ) : (
          <Text
            style={{
              fontSize: getRespValue(27),
            }}
            className={`font-aeonik w-3/5 text-center ${
              light ? 'text-black' : 'text-white '
            }`}
          >
            {title}
          </Text>
        )}
        <TouchableOpacity
          onPress={() => console.log('notifications')}
          className="w-1/5"
        >
          {notifications && (
            <NotificationIcon
              style={{
                width: getRespValue(40),
                height: getRespValue(40),
              }}
            />
          )}
        </TouchableOpacity>
      </>
    );
  }, [
    goBack,
    light,
    navigation,
    notifications,
    onPress,
    renderDots,
    stepper,
    title,
  ]);

  if (profile) {
    return (
      <View
        style={{
          backgroundColor: profileColor,
        }}
      >
        {isFocused && (
          <Animated.View
            entering={animateProfile ? FadeInUp.delay(100) : undefined}
            exiting={animateProfile ? FadeOutUp : undefined}
            layout={animateProfile ? Layout : undefined}
            className="px-4 py-4  w-full  flex-row items-center justify-between"
            style={{
              backgroundColor: profileColor,
            }}
          >
            {renderContent()}
          </Animated.View>
        )}
      </View>
    );
  }

  if (profileMoti) {
    return (
      <View
        style={{
          backgroundColor: profileColor,
        }}
      >
        <MotiView
          {...(animationConfig as object)}
          from={
            disableStartMoti
              ? {}
              : {
                  opacity: 0,
                  translateY: -100,
                }
          }
          exit={
            disableEndMoti
              ? {}
              : {
                  opacity: 0,
                  translateY: -100,
                }
          }
          className="px-4 py-4  w-full  flex-row items-center justify-between"
          style={{
            backgroundColor: profileColor,
          }}
        >
          {renderContent()}
        </MotiView>
      </View>
    );
  }

  return (
    <View className="px-4 py-4 pb-5 flex-row justify-between items-center">
      <TouchableOpacity
        style={{
          width: getRespValue(65),
          height: getRespValue(65),
        }}
        className="bg-[#fff]  rounded-full flex justify-center items-center"
        onPress={() => {
          navigation.navigate('ProfileStack' as never);
        }}
      >
        <Text className="text-xl font-aeonik-medium font-bold text-gray-800">
          HR
        </Text>
      </TouchableOpacity>
      <Pressable
        onPress={() => {
          navigation.navigate('QR' as never);
        }}
      >
        {whiteScan ? (
          <WhiteScanner
            style={{
              width: getRespValue(65),
              height: getRespValue(65),
            }}
          />
        ) : (
          <Image
            style={{
              width: getRespValue(65),
              height: getRespValue(65),
            }}
            source={scanner}
          />
        )}
      </Pressable>
    </View>
  );
};

AppBar.defaultProps = {
  whiteScan: false,
  profile: false,
  title: 'Profile',
  onPress: null,
  profileColor: '#000',
  light: false,
  notifications: false,
  goBack: false,
  isFocused: true,
  animateProfile: false,
  profileMoti: false,
  disableStartMoti: false,
  disableEndMoti: false,
  stepActive: 1,
  stepper: false,
};

export default AppBar;
