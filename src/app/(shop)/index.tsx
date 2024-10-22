import { FlatList, StyleSheet, Text, View } from "react-native";

import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../../components/product-list-item";
import { ListHeader } from "../../components/list-header";

const Home = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
    backgroundColor: "white",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
