import { ProductListItem } from "@components/ProductListItem";
import { ActivityIndicator, FlatList, View } from "react-native";

import { useProductList } from "@/api/products";
import { Text } from "@/components/Themed";

export default function MenuScreen() {
  const { data: products, isLoading, error } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{"Failed to fetch products"}</Text>;
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
