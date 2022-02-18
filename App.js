/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

const App = () => {
  React.useEffect(() => {
    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: 'zlgHog.Y0B-7w:C1Esft_5dX65IW9wv7Sv7mClpSct2eAVFs6abBzQsfo',
      wsHost: 'realtime-pusher.ably.io',
      wsPort: 443,
      disableStats: true,
      encrypted: true,
    });
    console.log(window.Echo);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Broad Cast Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
