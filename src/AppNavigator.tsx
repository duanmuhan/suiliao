import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';
import {LoginScreen} from './screens/LoginScreen.tsx';

export const AppNavigator  = () => {
  const Stack = createNativeStackNavigator();

  let isSignIn= false;

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {
        isSignIn ? (
          <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title:'请登录'
          }}/>

        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen}
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