import React, {useReducer} from "react";
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import ProductItem from "../src/components/ProductItem";
import productReducer from "../reducers/productReducer";
import ProductForm from "../src/components/ProductForm";
import useStorage from "../hooks/useStorage";

const initialData = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    buy: false,
  },
];

const ProductList = () => {
  const [products, dispatch] = useReducer(productReducer, initialData);

  useStorage("products", products, dispatch, "LOAD_PRODUCTS");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1}}
        keyboardVerticalOffset={100}
      >
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              buyProduct={() =>
                dispatch({ type: "BUY_PRODUCT", payload: { id: item.id } })
              }
              removeProduct={() =>
                dispatch({ type: "REMOVE_PRODUCT", payload: { id: item.id } })
              }
            />
          )}
        />

        <ProductForm
          addProduct={(name) =>
            dispatch({ type: "ADD_PRODUCT", payload: { name, price: 5 } })
          }
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductList;
