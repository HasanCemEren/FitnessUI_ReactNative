import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    backgroundColor: '#761D3B',
    flex: 1,
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  topIcon: {
    margin: 25,
    tintColor: 'white',
  },

  topContainer: {
    width: '100%',
    height: '12%',
    alignItems: 'center',
    marginLeft: '5%',
  },
  dumbbellBar: {
    position: 'absolute',
    padding: '5%',
  },
  dumbbell: {
    tintColor: 'white',
    width: 64,
    height: 64,
  },
  fitnessTextBar: {
    position: 'absolute',
    padding: '19%',
  },
  fitnessText: {
    color: 'white',
    fontSize: 28,
  },

  welcomeTextBar: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcomeText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '300',
  },

  buttonBar: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#761D3B',
    width: '80%',
    height: '25%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  footer: {
    width: '100%',
    height: '28%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '15%',
  },
  loginTextBar: {
    margin: '8%',
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
  bottom: {
    flexDirection: 'row',
  },
  socialMediaIcons: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  footerIcon: {
    width: 25,
    height: 25,
  },
});
