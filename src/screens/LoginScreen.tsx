import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { StyleSheet, Text, View } from 'react-native';



export const LoginScreen = () => {
  const [theme, setTheme] = useState('light');

  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style= {styles.container}>
          <Layout style={styles.layout}>
            <View>
              <Text>Login</Text>
            </View>
          </Layout>
        </Layout>
      </ApplicationProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})