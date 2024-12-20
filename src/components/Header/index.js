import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Styles from './style';
import PropsTypes from 'prop-types';
import {Icons} from '../../assets';
export default Header = ({text, rightIcon, width}) => {
  return (
    <View style={Styles.topContainer}>
      <View style={[Styles.helloTextBar, width]}>
        <Text style={Styles.helloText}>{text}</Text>
      </View>
      <View style={Styles.moreBar}>
        <Image source={rightIcon} style={Styles.more} />
      </View>
    </View>
  );
};

Header.PropsTypes = {
  text: PropsTypes.string,
  rightIcon: PropsTypes.symbol,
  width: PropsTypes.object,
};
Header.defaultProps = {
  text: 'Create Your Account',
  rightIcon: Icons.more,
  width: {width: '60%'},
};
