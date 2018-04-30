import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Header, Avatar } from 'react-native-elements';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  pageTitle = 'Home';

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: this.pageTitle, style: { color: '#fff' } }}
        />
        <Avatar
          large
          source={{ uri: 'http://shenll.com/images/sts_logo.png' }}
          onPress={() => console.log('Works!')}
        />
      </View>
    );
  }
}

Home.propTypes = {};

export default Home;
