import { createBottomTabNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import Personagens from "./pages/Personagens";
import Desenvolvedor from "./pages/Desenvolvedor";

const MainNavigator = createBottomTabNavigator(
  {
    Personagens,
    Desenvolvedor
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      // showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#606060",
      activeBackgroundColor: "#454545",

      activeTintColor: "#ffffff",

      inactiveTintColor: "#FFFFFF",
      labelStyle: {
        fontSize: 14,
        paddingBottom: 4
      },
      tabBarVisible: false,
      style: {  
        height: 75,
        // backgroundColor: 'green',
        borderColor: '#9A9A9A',
        // borderWidth: 7,
        // borderStyle: 'dashed',
        // borderRadius: 1
      },

    //   indicatorStyle: {
    //     borderColor: 'red',
    //     borderWidth: 7
    // },

    }
  }
);

export default createAppContainer(MainNavigator);