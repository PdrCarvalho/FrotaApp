/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
  god : https://blog.rocketseat.com.br/react-navigation-react-native/
 */

import {AppRegistry} from 'react-native';
import App from './App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
/*import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";

import Navigator from "./src";
import { name as appName } from "./app.json";

const App = createAppContainer(Navigator.StackNavigator);

AppRegistry.registerComponent(appName, () => App);
*/