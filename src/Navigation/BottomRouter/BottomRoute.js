import { Image, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductiveRoute from "../ProductiveStack/ProductiveRoute";
import WorkSpaceRoute from "../WorkSpaceStack/WorkSpaceRoute";
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DARKMODE } from "../../Config/Colors";
import ProfileRoute from "../ProfileStack/ProfileRoute";

const BottomRouter = createBottomTabNavigator();

const BottomRoute = () => {
  return (<BottomRouter.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: DARKMODE.bottomNav,
        height: hp("8%"),
        position: "absolute",
        bottom: hp("1.5%"),
        right: wp("4%"),
        left: wp("4%"),
        borderRadius: wp("2%"),
        elevation: 8,
        ...styles.navShadow
      },
    }}
  >
    <BottomRouter.Screen
      name="Productive Space"
      component={ProductiveRoute}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../../Assets/productive.png")}
              resizeMode="contain"
              style={{
                width: wp("5%"),
                height: wp("5%"),
              }}
            />
            <Text style={{
              color: focused ? DARKMODE.bottomNavActive : DARKMODE.bottomNavInActive,
              fontSize: wp("2.5%"),
              fontWeight: focused ? "bold" : "normal",
            }}>Productive Space</Text>
          </View>
        ),
      }}
    />
    <BottomRouter.Screen
      name="Work Space"
      component={WorkSpaceRoute}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../../Assets/workspace.png")}
              resizeMode="contain"
              style={{
                width: wp("5%"),
                height: wp("5%"),
              }}
            />
            <Text style={{
              color: focused ? DARKMODE.bottomNavActive : DARKMODE.bottomNavInActive,
              fontSize: wp("2.5%"),
              fontWeight: focused ? "bold" : "normal",
            }}>Work Space</Text>
          </View>
        ),
      }}
    />
    <BottomRouter.Screen
      name="Profile"
      component={ProfileRoute}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../../Assets/profile.png")}
              resizeMode="contain"
              style={{
                width: wp("5%"),
                height: wp("5%"),
              }}
            />
            <Text style={{
              color: focused ? DARKMODE.bottomNavActive : DARKMODE.bottomNavInActive,
              fontSize: wp("2.5%"),
              fontWeight: focused ? "bold" : "normal",
            }}>Profile</Text>
          </View>
        ),
      }}
    />
  </BottomRouter.Navigator>);
};

const styles = StyleSheet.create({
  navShadow: {
    shadowColor: DARKMODE.shadowColor, // Customize the shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7, // Customize the shadow opacity
    shadowRadius: 4, //
  },
});

export default BottomRoute;


