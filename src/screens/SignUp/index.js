import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Styles from './style.js';
import {Icons} from '../../assets/index.js';
const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.background}>
        <View style={Styles.top}>
          <View style={Styles.topContainer}>
            <View style={Styles.helloTextBar}>
              <Text style={Styles.helloText}>Create Your Account</Text>
            </View>
            <View style={Styles.moreBar}>
              <Image source={Icons.more} style={Styles.more} />
            </View>
          </View>
        </View>

        <View style={Styles.bottom}>
          <View style={Styles.bar}>
            <Text style={Styles.gmailText}>Full Name</Text>
            <View style={Styles.mailBar}>
              <Text>John Smith</Text>
              <Image source={Icons.tick} style={Styles.tick} />
            </View>
            <View style={Styles.line} />
          </View>

          <View style={Styles.bar}>
            <Text style={Styles.gmailText}>Phone or Email</Text>
            <View style={Styles.mailBar}>
              <Text>Joydeo@gmail.com</Text>
              <Image source={Icons.tick} style={Styles.tick} />
            </View>
            <View style={Styles.line} />
          </View>

          <View style={Styles.bar}>
            <Text style={Styles.gmailText}>Password</Text>
            <View style={Styles.mailBar}>
              <Text>******</Text>
              <Image source={Icons.hide} style={Styles.tick} />
            </View>
            <View style={Styles.line} />
          </View>

          <View style={Styles.bar}>
            <Text style={Styles.gmailText}>Confirm Password</Text>
            <View style={Styles.mailBar}>
              <Text>******</Text>
              <Image source={Icons.hide} style={Styles.tick} />
            </View>
            <View style={Styles.line} />
          </View>

          <View style={Styles.buttonBar}>
            <View style={Styles.button}>
              <View style={Styles.buttonTextBar}>
                <Text style={Styles.buttonText}>SIGN UP</Text>
              </View>
            </View>
          </View>

          <View style={Styles.bottomBar}>
            <Text style={Styles.accountText}>Don't have account?</Text>
            <Text style={[Styles.forgotText, {fontWeight: 'bold'}]}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
