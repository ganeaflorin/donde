import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 50,
    paddingLeft: 20,
  },
  platformsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    gap: 10,
  },
  poster: {
    height: 400,
    width: 300,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  movieDetails: {
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    maxWidth: '100%',
  },
  metadata: {
    // display: 'grid',
    // flexDirection: 'row',
    // alignItems: 'center',
    gap: 10,
  },
});
