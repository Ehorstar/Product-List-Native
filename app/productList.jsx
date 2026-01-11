import React, { useReducer, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../src/components/ProductItem";
import productReducer from "../reducers/productReducer";
import ProductForm from "../src/components/ProductForm";

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

  const addProduct = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { name: "Product 2", price: 10.99 },
    });
  };


  

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductList;
