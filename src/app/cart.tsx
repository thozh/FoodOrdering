import Button from "@/components/Button";
import CartListItem from "@/components/CartListItem";
import { useCart } from "@/hooks/useCart";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Platform, FlatList } from "react-native";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />

      <Text style={styles.totalPrice}>{total}</Text>
      <Button text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  totalPrice: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
  },
});

export default CartScreen;
