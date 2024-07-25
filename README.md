# Travel App UI in React Native with Expo Router

  <h3 align="center"> 📸 Screenshot</h3>
  
  ![app](/1.png)
  ![app](/2.png)
  ![app](/3.png)
  ![app](/4.png)
  ![app](/5.png)

# Timestam

1. Create Custom Bottom TabBar Navigator using Expo Router
2. Create Reausable Buttons and Add Animation
3. Create Listings using FlatList
4. Create Details Screen UI of the Items
5. Add Parallax Scroll Effect and Animation using React Native Reanimated

# Reanimated installation

1. Step 1: Install the package
   a. expo
   npx expo install react-native-reanimated
   b. npm
   npm install react-native-reanimated
   c. yarn
   yarn add react-native-reanimated
2. Step 2: Add Reanimated's babel plugin
   Add react-native-reanimated/plugin plugin to your babel.config.js.
   module.exports = {
   presets: [
   ... // don't add it here :)
   ],
   plugins: [
   ...
   'react-native-reanimated/plugin',
   ],
   };

3. Step 3: Clear Metro bundler cache (recommended)
   a.expo
   npx expo start -c
   b. npm
   npm start -- --reset-cache
   c. yarn
   yarn start --reset-cache

Platform specific setup
Android
No additional steps are necessary.

iOS
While developing for iOS, make sure to install pods first before running the app:
cd ios && pod install && cd ..

# CLI

npx create-expo-app my-app -t tabs

npx expo prebuild
npx expo run:ios
npx expo run:android
npx expo start -c
