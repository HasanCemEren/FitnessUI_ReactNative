import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Styles from './style';
import PropsTypes from 'prop-types';
import {Icons} from '../../assets';
export default CreateAccount = ({stil}) => {
  return (
    <View style={[Styles.bottomBar, stil]}>
      <Text style={Styles.accountText}>Don't have account?</Text>
      <Text style={[Styles.forgotText, {fontWeight: 'bold'}]}>Sign up</Text>
    </View>
  );
};

CreateAccount.PropsTypes = {
  stil: PropsTypes.object,
};
CreateAccount.defaultProps = {
  stil: {},
};
