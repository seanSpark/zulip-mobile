/* @flow */
import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { ZulipStatusBar } from '../common';
import MainNavBar from '../nav/MainNavBar';
import MainTabs from './MainTabs';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default class MainScreenWithTabs extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        <ZulipStatusBar />
        <MainNavBar />
        <MainTabs />
      </View>
    );
  }
}
