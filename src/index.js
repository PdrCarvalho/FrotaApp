import main from "./pages/main"
import second from './pages/ObdPage';

import { createStackNavigator,createAppContainer } from 'react-navigation';

const StackNavigator = createAppContainer (createStackNavigator({
  Home:{ 
    screen: main,
  },
  About: {
    screen: second,
  },
  },
  {
  initialRouteName: 'Home',
}));

export default { StackNavigator };