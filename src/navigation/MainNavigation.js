import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomBar from "../screens/App/Components/BottomBar";
import HomeScreen from "../screens/App/Home.Screen";
import SearchScreen from "../screens/App/Search.Screen";
import CartScreen from "../screens/App/Cart.Screen";
import ProfileScreen from "../screens/App/Profile.Screen";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomBar {...props} />}
      tabBarPosition="bottom"
      swipeEnabled={false}
      screenOptions={{
        showLabel: false,
        activeTintColor: "#fff",
        inactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          type: "Feather",
          name: "home",
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          type: "FontAwesome",
          name: "search",
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
          type: "AntDesign",
          name: "shoppingcart",
          tabBarLabel: "Cart",
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          type: "Fontisto",
          name: "male",
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default AppNavigation;
