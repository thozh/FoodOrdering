import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { supabase } from "@/lib/supabase";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => supabase.auth.signOut()}>
            <Text>Sign out</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}
