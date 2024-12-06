import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from '../RegisterPage/style.js';
import {Icons} from '../../assets/index.js';
const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.background}>
        <View style={Styles.topBar}>
          <View>
            <Image source={Icons.more} style={Styles.topIcon} />
          </View>
        </View>

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
          <View style={Styles.button}>
            <View style={Styles.buttonTextBar}>
              <Text style={Styles.buttonText}>SIGN IN</Text>
            </View>
          </View>
          <View style={[Styles.button, {backgroundColor: 'white'}]}>
            <View style={Styles.buttonTextBar}>
              <Text style={[Styles.buttonText, {color: 'black'}]}>SIGN UP</Text>
            </View>
          </View>
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
