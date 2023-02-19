/* eslint-disable react/jsx-props-no-spreading */
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

interface Props {
  routes: any[];
  scenes: any;
  onIndexChange?: any;
}

const Tabs = (propsMain: Props) => {
  const { routes, scenes, onIndexChange } = propsMain;
  return (
    <TabView
      {...propsMain}
      onIndexChange={() => {
        if (onIndexChange) onIndexChange();
        else console.log('onIndexChange not defined');
      }}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{
            backgroundColor: Colors.light.theme.backgroundLightGreen,
          }}
          labelStyle={{
            color: Colors.light.textGray,
            fontFamily: 'aeonik',
            textTransform: 'none',
            fontSize: getRespValue(22),
          }}
          scrollEnabled
          tabStyle={{
            minWidth: 'auto',
            width: 'auto',
          }}
          renderIndicator={() => null}
          activeColor="#000"
        />
      )}
      navigationState={{
        index: 0,
        routes,
      }}
      renderScene={SceneMap(scenes)}
      //   initialLayout={{ width: 400, height: 400 }}
    />
  );
};

export default Tabs;

const styles = StyleSheet.create({});
