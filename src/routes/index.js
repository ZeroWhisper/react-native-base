import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

// import Dashboard from "~/pages/Dashboard";
// import Welcome from "~/pages/Welcome";
import Login from "~/pages/Login";

const Routes = createAppContainer(
  // createDrawerNavigator(
  //   {
  //     "Bem-Vindo!": {
  //       screen: Welcome
  //     },
  //     Dashboard: {
  //       screen: Dashboard
  //     },
  //     Login: {
  //       screen: Login
  //     }
  //   },
  //   { initialRouteName: "Login" }
  // )
  createDrawerNavigator(
    {
      Login: {
        screen: Login
      }
    },
    { initialRouteName: "Login" }
  )
);

export default Routes;
