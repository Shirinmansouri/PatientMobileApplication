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
  recordContainer: {
    paddingTop:30,
    justifyContent: 'space-around',
    marginHorizontal: 16,
  },
  patientData: {
    padding: 20,
    backgroundColor: '#ABD3EC',
    fontSize: 10,
    fontWeight: "bold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  recordRow: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
