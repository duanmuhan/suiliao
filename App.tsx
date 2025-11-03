/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import {AppNavigator} from './src/AppNavigator';
import * as eva from '@eva-design/eva'; // ✅ 导入 eva


function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
}
export default App;
