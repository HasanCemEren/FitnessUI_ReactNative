import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Styles from '../RegisterPage/style.js';
import {Icons} from '../../assets/index.js';
import {_Button, Header} from '../../components';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.background}>
        <TouchableOpacity style={Styles.topBar}>
          <Header text=" " />
        </TouchableOpacity>

        <View style={Styles.topContainer}>
          <View style={Styles.dumbbellBar}>
            <Image source={Icons.dumbbell} style={Styles.dumbbell} />
          </View>
          <View style={Styles.fitnessTextBar}>
            <Text style={Styles.fitnessText}>FITNESS CLUB</Text>
          </View>
        </View>

        <View style={Styles.welcomeTextBar}>
          <Text style={Styles.welcomeText}>Welcome Back</Text>
        </View>
        <View style={Styles.buttonBar}>
          <_Button _buttonText={'Sign In'} />
          <_Button
            _buttonText={'Sign Up'}
            buttonStyle={{backgroundColor: 'white'}}
            buttonTextColor={{color: '#761D3B'}}
          />
        </View>
        <View style={Styles.footer}>
          <View style={Styles.loginTextBar}>
            <Text style={Styles.loginText}>Login with Social Media</Text>
          </View>
          <View style={Styles.bottom}>
            <View style={Styles.socialMediaIcons}>
              <Image source={Icons.instagram} style={Styles.footerIcon} />
            </View>
            <View style={Styles.socialMediaIcons}>
              <Image source={Icons.x} style={Styles.footerIcon} />
            </View>
            <View style={Styles.socialMediaIcons}>
              <Image source={Icons.facebook} style={Styles.footerIcon} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
