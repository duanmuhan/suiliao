import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PhoneInputArea } from './components/PhoneInputArea.tsx';
import { GenderScreen } from './screens/GenderScreen.tsx';

export const AppNavigator  = () => {
  const Stack = createNativeStackNavigator();

  let isSignIn= false;

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {
        isSignIn ? (
          <Stack.Screen name="PhoneInputArea" component={PhoneInputArea}
          options={{
            title:'login in phone'
          }}/>

        ) : (
          <Stack.Screen name="GenderScreen" component={GenderScreen}
          options={
            {
              title:'请使用手机号登录'
            }
          }
          />
        )
      }
    </Stack.Navigator>
    </NavigationContainer>
  )
}