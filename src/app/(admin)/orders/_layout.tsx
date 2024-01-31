import { Stack } from "expo-router";
import React from "react";

export default function OrdersStack() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ headerShown: false }} />
    </Stack>
  );
}
