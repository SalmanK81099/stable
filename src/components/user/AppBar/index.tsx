/* eslint-disable react/jsx-props-no-spreading */
import CheveronLeftWhite from '@assets/icons/chevron-left-black.svg';
import CheveronLeftBlack from '@assets/icons/chevron-left-white.svg';

import NotificationIcon from '@assets/icons/notifications.svg';
import WhiteScanner from '@assets/icons/user/scan-white.svg';
import scanner from '@assets/icons/user/scan.png';
import { useNavigation } from '@react-navigation/native';
import { getRespValue } from '@utils/design/design';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

export interface AppBarProps {
  whiteScan?: boolean;
  profile?: boolean;
  title?: string;
  onPress?: () => void;
  profileColor?: string;
  light?: boolean;
  notifications?: boolean;
  goBack?: boolean;
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
}: AppBarProps) => {
  const navigation = useNavigation();

  if (profile) {
    return (
      <View
        className="px-4 py-4  w-full flex-row items-center justify-between"
        style={{
          backgroundColor: profileColor,
        }}
      >
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
        <Text
          style={{
            fontSize: getRespValue(27),
          }}
          className={`font-aeonik ${light ? 'text-black' : 'text-white'}`}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={() => console.log('notifications')}>
          {notifications && (
            <NotificationIcon
              style={{
                width: getRespValue(40),
                height: getRespValue(40),
              }}
            />
          )}
        </TouchableOpacity>
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
          navigation.navigate('Profile' as never);
        }}
      >
        <Text className="text-xl font-aeonik-medium font-bold text-gray-800">
          HR
        </Text>
      </TouchableOpacity>
      <Pressable>
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
};

export default AppBar;
