/* TODO flow */
import React, { PureComponent } from 'react';

import { Screen } from '../common';
import SubscriptionsContainer from './SubscriptionsContainer';

import { connect } from 'react-redux';
import boundActions from '../boundActions';

class StreamsScreen extends PureComponent {
  render() {
  	console.log( this.props )
    return (
      <Screen title="Streams">
        <SubscriptionsContainer 
        	doNarrow={ (narrow) => { this.props.navigation.navigate('main'); setTimeout( () => this.props.actions.doNarrow(narrow) , 0 ); }}/>
      </Screen>
    );
  }
}

export default connect(
  state => ({
    safeAreaInsets: state.app.safeAreaInsets,
  }),
  boundActions,
)(StreamsScreen);
