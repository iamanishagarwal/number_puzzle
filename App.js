import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import GamePlayScreen from './src/screens/GamePlayScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GamePlayScreen,
  },
  {
    headerMode: 'none',
  },
);

const switchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator,
});

export default createAppContainer(switchNavigator);
