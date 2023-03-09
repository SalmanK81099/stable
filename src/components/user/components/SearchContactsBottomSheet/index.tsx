/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import ChevronRight from '@assets/icons/chevron-right-white.svg';
import Input from '@components/globals/Input';
import BottomSheet from '@src/components/globals/BottomSheet';
import Button from '@src/components/globals/Button';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import * as Contacts from 'expo-contacts';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

const ContactRow = ({ item }: { item: Contacts.Contact }) => {
  return (
    <TouchableOpacity
      className="w-full h-9 flex-row px-4 items-center justify-between"
      style={{
        height: getRespValue(74),
      }}
    >
      <View
        className="bg-white rounded-full flex justify-center items-center w-1/5"
        style={{
          height: getRespValue(48),
          width: getRespValue(48),
        }}
      >
        <Text className="text-black  font-aeonik">{`${item.firstName?.slice(
          0,
          1,
        )}${item.lastName?.slice(0, 1)}`}</Text>
      </View>
      <View className="flex-col justify-center items-left w-3/5">
        <Text
          className="text-white font-aeonik"
          style={{
            fontSize: getRespValue(20),
          }}
        >
          {item.firstName && item.lastName
            ? `${item.firstName} ${item.lastName}`
            : item.name}
        </Text>
        <Text
          className="text-white font-aeonik"
          style={{
            fontSize: getRespValue(18),
          }}
        >
          {item.phoneNumbers && item.phoneNumbers?.length > 1
            ? `${item.phoneNumbers[0].number} and ${
                (item.phoneNumbers?.length || 1) - 1
              } more`
            : item.phoneNumbers?.length === 1
            ? item.phoneNumbers[0].number
            : 'No number'}
        </Text>
      </View>
      <View className="w-1/5 flex-row justify-end">
        <ChevronRight
          style={{
            width: getRespValue(33),
            height: getRespValue(33),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const BottomSheetButtonOTP = (props: any) => {
  const { title } = props;
  const [searchQuery, setSearchQuery] = useState('');

  const [filteredContactsData, setFilteredContactsData] = useState<
    Contacts.Contact[]
  >([]);
  const [contactPermission, setContactPermission] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageOffsetForSearch, setPageOffsetForSearch] = useState(0);

  const setContactPermissionAsync = useCallback(async () => {
    const { status, expires } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      setContactPermission(true);
      return { status };
    }
    setContactPermission(false);
    return { status };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchContacts = useCallback(
    debounce(async (query: string) => {
      if (query.trim().length > 0) {
        const { data } = await Contacts.getContactsAsync({
          pageSize: 20,
          name: query,
          pageOffset: pageOffsetForSearch,

          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.Name,
            Contacts.Fields.PhoneNumbers,
          ],
        });
        const filtered = data.filter(
          (contact: Contacts.Contact) =>
            contact?.firstName?.toLowerCase().includes(query.toLowerCase()) ||
            contact?.lastName?.toLowerCase().includes(query.toLowerCase()),
        );

        if (data.length > 0) {
          setFilteredContactsData(filtered);
        }
      }
    }, 500),
    [filteredContactsData, setFilteredContactsData],
  );

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        setContactPermission(true);
        const { data } = await Contacts.getContactsAsync({
          pageSize: 20,
          pageOffset,
          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.Name,
            Contacts.Fields.PhoneNumbers,
          ],
        });

        if (data.length > 0) {
          setFilteredContactsData([...filteredContactsData, ...data]);
        }
      } else {
        setContactPermission(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageOffset]);
  const handleLoadMore = () => {
    if (!(searchQuery.length > 0)) {
      setPageOffset(pageOffset + 20);
    } else {
      setPageOffsetForSearch(pageOffsetForSearch + 20);
    }
  };
  const handleSearchQueryChange = useCallback(
    (query: string) => {
      setSearchQuery(query);
      searchContacts(query);
    },
    [searchContacts],
  );
  // renders
  return (
    <BottomSheet
      openerProps={{}}
      onPress={() => {
        console.log('pressed');
        setContactPermissionAsync();
      }}
      OpenerComponent={propsInner => (
        <Pressable {...propsInner}>
          <Input
            {...propsInner}
            placeholder="Search in my contacts"
            editable={false}
            selectTextOnFocus={false}
            style={{
              backgroundColor: Colors.light.theme.backgroundDarkPink,
            }}
            right={<TextInput.Icon icon="magnify" {...propsInner} />}
          />
        </Pressable>
      )}
    >
      {contactPermission ? (
        <>
          <Input
            placeholder="Search in my contacts"
            style={{
              backgroundColor: Colors.light.theme.backgroundDarkGray,
              borderTopWidth: 2,
              borderColor: Colors.light.theme.backgroundLightGray,
            }}
            textColor="white"
            onChangeText={handleSearchQueryChange}
            right={<TextInput.Icon icon="magnify" />}
          />
          <Text className="px-4 py-4 text-white font-aeonik">Contacts</Text>
          <View className="flex-1 justify-between">
            <FlatList
              data={filteredContactsData}
              renderItem={ContactRow}
              keyExtractor={item => item.id}
              onEndReached={handleLoadMore}
              ListFooterComponent={() => (
                <ActivityIndicator size="large" color="#0000ff" />
              )}
              onEndReachedThreshold={0.5}
            />
          </View>
        </>
      ) : (
        <View>
          <Text className="text-white text-center font-aeonik my-4 px-4 text-lg">
            Please allow permissions to access contacts
          </Text>
          <Button
            onPress={() => {
              Linking.openSettings();
            }}
          >
            Allow Permissions
          </Button>
        </View>
      )}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 0,
  },
});

export default BottomSheetButtonOTP;
