import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from '../pages/main';
import Second from '../pages/second';

export default createAppContainer(
    createStackNavigator ({
        Main:{
            screen: Main
        },
        Second:{
            screen : Second
        }

    })
);
 
//https://reactnavigation.org/docs/en/hello-react-navigation.html
