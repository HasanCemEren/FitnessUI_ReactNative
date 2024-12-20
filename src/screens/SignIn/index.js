import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Styles from './style.js';
import {Icons} from '../../assets/index.js';
import {UserInput, _Button, Header} from '../../components';
const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.background}>
        <View style={Styles.top}>
          <Header text={'Hello Sign in!'} width={{width: '40%'}} />
        </View>

        <View style={Styles.bottom}>
          <UserInput />
          <UserInput text={'Password'} secure={true} placehold={'<cemooo>'} />

          <View style={Styles.forgotTextBar}>
            <Text style={Styles.forgotText}>Forgot Password?</Text>
          </View>

          <View style={Styles.buttonBar}>
            <_Button />
          </View>
          <CreateAccount />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
