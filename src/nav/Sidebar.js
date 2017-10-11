/* @flow */
import React, { PureComponent } from 'react';
import { StyleSheet, View , Button} from 'react-native';
import { connect } from 'react-redux';

import type { Narrow } from '../types';
import boundActions from '../boundActions';

import SubscriptionsContainer from '../streams/SubscriptionsContainer';



const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

class Sidebar extends PureComponent {
  static contextTypes = {
    styles: () => null,
  };

  doNarrowCloseDrawer = (narrow: Narrow) => {
    const { actions, navigation } = this.props;
    navigation.navigate('DrawerClose');
    setTimeout(() => actions.doNarrow(narrow), 0);

    console.log( this );
    console.log( this.props );
  };

  closeDrawer = () => {
    const { navigation } = this.props;
    navigation.navigate('DrawerClose');
  };

  render() {
    const { styles } = this.context;
    const { safeAreaInsets } = this.props;
    const paddingStyles = {
      paddingTop: safeAreaInsets.top,
      paddingBottom: safeAreaInsets.bottom,
    };

    return (
      <View style={[componentStyles.container, paddingStyles, styles.background]}>
        <Button onPress={this.props.actions.navigateToStreamSelector} title="Colleagues"></Button>
      </View>
    );
  }
}

export default connect(
  state => ({
    safeAreaInsets: state.app.safeAreaInsets,
  }),
  boundActions,
)(Sidebar);
