import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Styles from './style';
import PropsTypes from 'prop-types';
import {Icons} from '../../assets';
export default UserInput = ({text, secure, placehold}) => {
  return (
    <View style={Styles.outside}>
      <View style={Styles.bar}>
        <Text style={Styles.gmailText}>{text}</Text>
        <TextInput secureTextEntry={secure} style={[Styles.mailBa]}>
          <Text>{placehold}</Text>
        </TextInput>
        <View style={Styles.line} />
      </View>
      <View style={Styles.tickBar}>
        <Image source={Icons.tick} style={Styles.tick} />
      </View>
    </View>
  );
};

UserInput.PropsTypes = {
  text: PropsTypes.string,
  secure: PropsTypes.bool,
  placehold: PropsTypes.string,
};
UserInput.defaultProps = {
  text: 'Gmail',
  secure: false,
  placehold: 'Joydeo@gmail.com',
};
