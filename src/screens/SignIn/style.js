import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {flex: 1},
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#761D3B',
  },
  top: {
    flex: 2,
    width: '100%',
    height: '30%',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
  },
  helloTextBar: {
    width: '40%',
  },
  helloText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '500',
  },
  more: {
    tintColor: 'white',
  },

  bottom: {
    flex: 6,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    paddingTop: '15%',
  },

  bar: {
    width: '75%',
    paddingVertical: '5%',
  },
  tick: {
    width: 18,
    height: 18,
    opacity: 0.3,
  },
  mailBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%',
  },
  gmailText: {
    color: '#d5546b',
    fontSize: 16,
    fontWeight: '600',
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

  forgotTextBar: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '5%',
  },
  forgotText: {
    fontSize: 17,
    color: '#524a63',
    fontWeight: '500',
  },

  button: {
    backgroundColor: '#761D3B',
    width: '80%',
    height: '35%',
    borderWidth: 1,
    borderColor: 'black',
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
  buttonBar: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  bottomBar: {
    width: '85%',
    marginTop: '20%',
    alignItems: 'flex-end',
  },
});
