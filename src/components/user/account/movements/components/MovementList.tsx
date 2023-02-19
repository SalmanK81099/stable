/* eslint-disable react/jsx-props-no-spreading */
import Colors from '@src/constants/Colors';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const dummyData = [
  {
    date: '25 May 2021',
    transactions: [
      {
        id: 1,
        type: 'money_added',
        amount: 100,
        currency: 'EUR',
        description: 'Money added',
        date: '25 May 2021',
        to: 'John Doe',
      },
      {
        id: 5,
        type: 'money_withdrawed',
        amount: 100,
        currency: 'EUR',
        description: 'Money withdrawed',
        date: '24 May 2021',
        to: 'John Doe',
      },
      {
        id: 2,
        type: 'money_sent',
        amount: 100,
        currency: 'EUR',
        description: 'Money sent',
        date: '25 May 2021',
        to: 'John Doe',
      },
    ],
  },
  {
    date: '24 May 2021',

    transactions: [
      {
        id: 3,
        type: 'money_added',
        amount: 100,
        currency: 'EUR',
        description: 'Money added',
        date: '24 May 2021',
        to: 'John Doe',
      },
      {
        id: 5,
        type: 'money_withdrawed',
        amount: 100,
        currency: 'EUR',
        description: 'Money withdrawed',
        date: '24 May 2021',
        to: 'John Doe',
      },
      {
        id: 4,
        type: 'money_sent',
        amount: 100,
        currency: 'EUR',
        description: 'Money sent',
        date: '24 May 2021',
        to: 'John Doe',
      },
    ],
  },
  {
    date: '23 May 2021',
    transactions: [
      {
        id: 5,
        type: 'money_added',
        amount: 100,
        currency: 'EUR',
        description: 'Money added',
        date: '23 May 2021',
        to: 'John Doe',
      },
      {
        id: 6,
        type: 'money_sent',
        amount: 100,
        currency: 'EUR',
        description: 'Money sent',

        date: '23 May 2021',
        to: 'John Doe',
      },
    ],
  },
];

interface MovementsListProps {
  type: 'all' | 'money_added' | 'money_sent' | 'money_withdrawed';
  onPress: (movement: any) => void;
}

const MovementsList = ({ type, onPress }: MovementsListProps) => {
  const filteredData = useMemo(() => {
    return dummyData.map(item => {
      return {
        ...item,
        transactions: item.transactions.filter(transaction => {
          if (type === 'all') {
            return true;
          }
          if (type === 'money_sent' || type === 'money_withdrawed') {
            return (
              transaction.type === 'money_sent' ||
              transaction.type === 'money_withdrawed'
            );
          }
          return transaction.type === type;
        }),
      };
    });
  }, [type]);

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: Colors.light.background,
      }}
    >
      <MotiView
        key="movements-inner"
        {...(animationConfig as object)}
        from={{
          translateY: 100,
          opacity: 0,
        }}
        exit={{
          translateY: 100,
          opacity: 0,
        }}
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={type === 'all' ? dummyData : filteredData}
          renderItem={({ item }) => {
            return (
              <View>
                <View
                  className="justify-start items-center flex-row px-4"
                  style={{
                    height: getRespValue(62),
                    backgroundColor: Colors.light.theme.backgroundLightGray,
                  }}
                >
                  <Text
                    className="font-aeonik text-white"
                    style={{
                      fontSize: getRespValue(24),
                    }}
                  >
                    {item.date}
                  </Text>
                </View>

                <FlatList
                  data={item.transactions}
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  renderItem={({ item }: { item: any }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => onPress(item)}
                        className="px-4 py-4"
                      >
                        <View className="flex-row justify-between">
                          <Text
                            className="text-white font-aeonik-bold"
                            style={{
                              fontSize: getRespValue(18),
                            }}
                          >
                            {item.description}
                          </Text>
                          <Text
                            className="text-white font-aeonik"
                            style={{
                              color:
                                item.type === 'money_sent'
                                  ? Colors.light.theme.textLightPink
                                  : Colors.light.theme.textLightGreen,
                            }}
                          >
                            + $1000
                          </Text>
                        </View>
                        <View className="flex-row justify-between">
                          <Text
                            className="text-white font-aeonik"
                            style={{
                              color: Colors.light.theme.textLightGray,
                              fontSize: getRespValue(15),
                            }}
                          >
                            {item.type === 'money_sent' && 'To '}
                            {item.type === 'money_added' && 'From '}
                            {item.type === 'money_withdrawed' && 'Through'}
                            {item.to}
                          </Text>
                          <Text
                            className="text-white font-aeonik"
                            style={{
                              color: Colors.light.theme.textLightGray,
                              fontSize: getRespValue(15),
                            }}
                          >
                            $44.365 {item.currency}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </MotiView>
    </View>
  );
};

export default MovementsList;
