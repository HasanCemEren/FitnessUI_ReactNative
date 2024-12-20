import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import Styles from './style.js';
import {Icons} from '../../assets/index.js';
import {_Button, UserInput, Header} from '../../components';
const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.background}>
        <View style={Styles.top}>
          <Header />
        </View>

        <View style={Styles.bottom}>
          <UserInput text={'Full Name'} placehold={'John Smith'} />
          <UserInput text={'Phone or Gmail'} placehold={'Joydeo@gmail.com'} />
          <UserInput text={'Password'} secure={true} placehold={'********'} />
          <UserInput
            text={'Confirm Password'}
            secure={true}
            placehold={'********'}
          />
          <View style={Styles.buttonBar}>
            <_Button />
          </View>

          <CreateAccount stil={{bottom: 15, position: 'absolute'}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
