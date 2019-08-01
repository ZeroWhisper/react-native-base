import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import Dashboard from "~/pages/Dashboard";
import Welcome from "~/pages/Welcome";

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      "Bem-Vindo!": {
        screen: Welcome
      },
      Dashboard: {
        screen: Dashboard
      }
    },
    { initialRouteName: "Bem-Vindo!" }
  )
);

export default Routes;
