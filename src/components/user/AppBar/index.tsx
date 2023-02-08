import scanner from '@assets/icons/user/scan.png';
import { getRespValue } from '@utils/design/design';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const AppBar = () => {
  return (
    <View className="px-4 py-4 pb-5 flex-row justify-between items-center">
      <TouchableOpacity
        style={{
          width: getRespValue(65),
          height: getRespValue(65),
        }}
        className="bg-[#fff]  rounded-full flex justify-center items-center"
      >
        <Text className="text-xl font-aeonik-medium font-bold text-gray-800">
          HR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{
            width: getRespValue(65),
            height: getRespValue(65),
          }}
          source={scanner}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;
