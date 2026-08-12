import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d2d8',
    alignItems: 'center',
    paddingTop: 62,
  },
  image: {
    height: 34,
    width: 134,
  },
  form: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 42,
    gap: 7,
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    padding: 24,
    paddingTop: 32,
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E4E6EC',
    paddingBottom: 12,
    gap: 12,
  },
  clearButton: {
    marginLeft: 'auto',
  },
  clearText: {
    fontSize: 12,
    color: '#828282',
    fontWeight: 600,
  },
});

export default styles;
