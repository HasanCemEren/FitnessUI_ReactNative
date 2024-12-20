import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  outside: {width: '75%', flexDirection: 'row'},
  bar: {
    width: '90%',
    paddingVertical: '5%',
  },
  tickBar: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
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
});
