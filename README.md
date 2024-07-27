# About

This is a mobile application built using React Native. It allows the user to search for movies and displays the streaming platforms where it can be watched in Romania.

# Usage

Create .env file and add the following properties:

EXPO\*PUBLIC_API_URL=<api_url>,
EXPO_PUBLIC_API_KEY=<api_key>,
EXPO_PUBLIC_POSTER_PATH=<path_to_be_concatenated_with_poster_slug>

To run the application, use:

```
npx expo start
```

To generate the APK, use:

```
eas build -p android --profile preview
```

Note: eas CLI is required, run the following command to install it:

```
npm install -g eas-cli
```
