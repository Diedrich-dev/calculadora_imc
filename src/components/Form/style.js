import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  form: {
    width: '100%',
  },

  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },

  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#F6F6F6',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },

  textButtonCalculator: {
    fontSize: 20,
    color: "#FFF",
  },

  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#FF0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },

  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  exibitionResultImc: {
    width: '100%',
    height: '50%',
  },

  listImcs: {
    marginTop: 20,
    padding: 5,
    width: '90%',
    borderRadius: 50,
  },

  resultImcItem: {
    fontSize: 26,
    color: 'red',
    height: 50,
    width: '100%',
    paddingRight: 20,
  },

  textResultItemList: {
    color: 'red',
    fontSize: 16,
    marginLeft: 80,
  },

  resultTextPlusItem: {
    backgroundColor: '#F6F6F6',
    borderRadius: 35,
    margin: 2,
  },
});

export default styles