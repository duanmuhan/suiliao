import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PhoneInputArea } from './components/PhoneInputArea.tsx';
import { LoginScreen } from './screens/LoginScreen.tsx';
import { HomeScreen } from './screens/HomeScreen.tsx';
import { NameScreen } from './screens/NameScreen.tsx';
import { GenderScreen } from './screens/GenderScreen.tsx';
import { VerifyCodeScreen } from './screens/VerifyCodeScreen.tsx';

export const AppNavigator  = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="GenderScreen" component={GenderScreen} />
      <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}