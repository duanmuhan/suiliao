import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, View } from 'react-native';

export const AgeScreen = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Button title={"test"} />
      </View>
    </SafeAreaProvider>
  )
}