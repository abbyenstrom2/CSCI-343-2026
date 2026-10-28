import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import * as Font from "expo-font"; 
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "./constants/colors";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import USNewsScreen from "./screens/USNewsScreen"
import WorldNewsScreen from "./screens/WorldNewsScreen";
import TechNewsScreen from "./screens/TechNewsScreen";


SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator(); 


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="NewsTabs"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary500,
        },
        headerTintColor: Colors.primary300,
        headerTitleStyle: {
          fontFamily: "nolluqa",
          fontSize: 30,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.primary300,
        },
        drawerContentStyle: {
          backgroundColor: Colors.primary500,
        },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="NewsTabs"
        component={TabsNavigator}
        options={{
          title: "News",
          drawerLabel: "Latest News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="news" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: "Bookmarked News",
          drawerLabel: "Bookmarked News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}


function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfairBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          title: "US News",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="news" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          title: "World News",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="public" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="TechNews"
        component={TechNewsScreen}
        options={{
          title: "Tech News",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="laptop"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}


export default function App() {
  const [loaded] = Font.useFonts({
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    nolluqa: require("./assets/fonts/NolluqaRegular.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
return (
  <>
    <StatusBar style="light" />

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DrawerScreen"
        screenOptions={{
          headerTintColor: Colors.primary300,
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          contentStyle: {
            backgroundColor: Colors.primary300,
          },
        }}
      >
        <Stack.Screen
          name="DrawerScreen"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NewsDetail"
          component={NewsDetailScreen}
          options={{
            title: "News Detail",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
