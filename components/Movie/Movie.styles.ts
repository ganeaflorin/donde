import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingRight: 20,
    paddingBottom: 50,
    paddingLeft: 20,
  },
  platformsContainer: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  platformsIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    alignItems: 'center',
    gap: 10,
    padding: 10,
    maxWidth: '100%',
  },
  metadata: {
    alignItems: 'center',
    marginBottom: 20,
  },
  availableOn: {
    marginBottom: 10,
  },
  unavailable: {
    marginTop: 30,
    textAlign: 'center',
  },
});
