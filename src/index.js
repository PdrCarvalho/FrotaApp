import main from "./pages/main"
import ObdPage from './pages/ObdPage';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: main,
  About: ObdPage,
});

export default { StackNavigator }