import {StyleSheet} from 'react-native';

export const GlobalStyles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  contentflex: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ABD3EC'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#60839C",
    borderRadius: 10,
    paddingVertical: 40,
   marginHorizontal: 10
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  titleText :{
    fontSize: 15,
   fontWeight: "bold"
  }
});
