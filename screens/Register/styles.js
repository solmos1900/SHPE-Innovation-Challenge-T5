import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signInView: {
    marginTop: 80,
  },
  logoView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 75,
  },
  extraOptionsView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  userView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {
    color: "black",
    fontSize: 20,
    margin: 20,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: "#F7B600",
    borderRadius: 10,
  },
  signUpButton: {
    backgroundColor: '#1A1F71',
    margin: 20,
    marginTop: 25,
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: 'rgba(0,0,0, .5)',           // iPhone
    shadowOffset: { height: 2, width: 2 },    // iPhone
    shadowOpacity: 1,                         // iPhone
    shadowRadius: 2,                          // iPhone
    elevation: 2,                             //Android
  },
  signUpText: {
    color: "#FFFFFF",
    padding: 13,
    fontSize: 25,
  }, 
  visaTouchlessText: {
    paddingLeft: 5,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a1F71"
  },
  visaWordLogo:{
    width: 114,
    height: 38,
    alignSelf: "center",
  },
  visaTouchlessLogo:{
    width: 348,
    height: 204,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  QRLogo: {
    width: 88,
    height: 68,
    alignSelf: "center",
  },
});

export default styles;
  