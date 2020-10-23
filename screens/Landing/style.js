import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },
  button: {
    width: 125,
    height: 125,
    margin: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0, .5)',           // iPhone
    shadowOpacity: 1,                         // iPhone
    shadowRadius: 2,                          // iPhone
    elevation: 2,                             //Android
  },
  text: {
    color: 'green',
    padding: 13,
    fontSize: 25,
  }
});

export default styles;