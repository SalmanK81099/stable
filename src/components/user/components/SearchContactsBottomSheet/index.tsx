/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import ChevronRight from '@assets/icons/chevron-right-white.svg';
import Input from '@components/globals/Input';
import BottomSheet from '@src/components/globals/BottomSheet';
import Button from '@src/components/globals/Button';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import * as Contacts from 'expo-contacts';
import * as Linking from 'expo-linking';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

const PAGE_SIZE = 10;

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
  const [contactsData, setContactsData] = useState<Contacts.Contact[]>([]);
  const [filteredContactsData, setFilteredContactsData] = useState<
    Contacts.Contact[]
  >([]);
  const [contactPermission, setContactPermission] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);

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
    debounce((query: string) => {
      if (query.trim().length > 0) {
        const regex = new RegExp(
          `^${query
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            .replace(/ /g, '\\s*')}`,
          'i',
        );
        const filtered = contactsData.filter(
          (contact: Contacts.Contact) =>
            contact.name.toLowerCase().includes(query.toLowerCase()) ||
            (contact.phoneNumbers &&
              contact.phoneNumbers.some(({ number }) =>
                regex.test(number || ''),
              )),
        );
        setFilteredContactsData(filtered);
      } else {
        setFilteredContactsData(contactsData);
      }
    }, 500),
    [contactsData],
  );

  const handleSearchQueryChange = useCallback(
    (query: string) => {
      setSearchQuery(query);
      searchContacts(query);
    },
    [searchContacts],
  );

  useEffect(() => {
    (async () => {
      const { status } = await setContactPermissionAsync();
      if (status === 'granted') {
        setContactPermission(true);
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.Name,
            Contacts.Fields.PhoneNumbers,
          ],
        });

        if (data.length > 0) {
          setContactsData(data);
          console.log(data);
          setFilteredContactsData(data);
        }
      } else {
        setContactPermission(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageOffset]);

  // renders
  return (
    <BottomSheet
      openerProps={{}}
      onPress={() => {
        console.log('pressed');
      }}
      OpenerComponent={propsInner => (
        <TouchableOpacity {...propsInner}>
          <Input
            placeholder="Search in my contacts"
            editable={false}
            style={{
              backgroundColor: Colors.light.theme.backgroundDarkPink,
            }}
            right={<TextInput.Icon icon="magnify" />}
          />
        </TouchableOpacity>
      )}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 40}
        className="flex-1 items-left justify-start"
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
              value={searchQuery}
              onChangeText={handleSearchQueryChange}
              right={<TextInput.Icon icon="magnify" />}
            />
            <Text className="px-4 py-4 text-white font-aeonik">Contacts</Text>
            <View className="flex-1 justify-between">
              <FlatList
                data={filteredContactsData}
                renderItem={ContactRow}
                keyExtractor={item => item.id}
                onEndReached={() => {
                  setPageOffset(pageOffset + 1);
                }}
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
      </KeyboardAvoidingView>
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
