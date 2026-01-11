import { Slot, Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const RootLayout = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Slot /> */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "dodgerblue",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="WaterTracker"
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome6 name="bottle-water" size={24} color="white" />
                <Text
                  style={{ marginLeft: 8, fontSize: 18, fontWeight: "bold" }}
                >
                  Water Tracker
                </Text>
              </View>
            ),
            headerTitleAlign: "center",
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <Entypo name="chevron-left" size={24} color="white" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About App",
            headerTitleAlign: "center",
            headerRight: () => (
              <FontAwesome5 name="bell" size={24} color="white" />
            ),
            headerLeft: () => {
              return (
                <Pressable onPress={() => router.back()}>
                  <Entypo name="chevron-left" size={24} color="white" />
                </Pressable>
              );
            },
          }}
        />
        <Stack.Screen name="productList" options={{ title: "Product List" }} />
      </Stack>
      <View style={styles.footer}>
        <Text>Усі права захищені</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: 30,
    backgroundColor: "#ddd",
    alignItems: "center",
  },
});

export default RootLayout;
