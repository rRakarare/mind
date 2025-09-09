import { Tabs } from "expo-router";
import { House } from "lucide-react-native";
import React from "react";
import { Dimensions, Platform } from "react-native";

export default function TabLayout() {
  const isSideBar =
    ["web", "windows"].includes(Platform.OS) &&
    Dimensions.get("window").width > 768;


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: isSideBar ? "left" : "bottom",
        tabBarActiveTintColor: "#000",
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House className="text-typography-950 size-24" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <House />,
        }}
      />
    </Tabs>
  );
}
