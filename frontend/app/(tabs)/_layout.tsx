import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Entypo } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
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
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="house.fill" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Explore",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="paperplane.fill" color={color} />
					),
				}}
			/>
		
			<Tabs.Screen
				name="Login" // Upewnij się, że nazwa pasuje do Stack.Screen
				options={{
					title: "Login",
					tabBarIcon: ({ color }) => (
						<Entypo size={28} name="login" color={color} />
					),
				}}
			/>
       <Tabs.Screen
        name="Contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Register"
        options={{
          title: 'Register',
          tabBarIcon: ({ color }) => (
            <AntDesign name="adduser" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="OneCar"
        options={{
          title: 'OneCar',
          tabBarIcon: ({ color }) => (
            <AntDesign name="car" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CarRental"
        options={{
          title: 'CarRental',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="parking" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
      name="InsurancePricing"
      options={{
        title: 'InsurancePricing',
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="money-check-alt" size={24} color={color} />
        ),
      }}
    />

 
		</Tabs>
	);
}
