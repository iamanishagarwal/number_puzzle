import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';
import AppNavigator from './src/components/AppNavigator';

const switchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator,
});

export default createAppContainer(switchNavigator);
