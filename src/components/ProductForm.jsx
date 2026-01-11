import React, { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../ui/components/Button/Button";
import Separator from "../ui/components/Separator/Separator";

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleNameChange = (value) => {
      setName(value);
      setNameError(value.trim().length === 0);
    };
    
    const addHandler = () => { 
        if (name.trim().length === 0) {
            setNameError(true);
            return
        }
        addProduct(name.trim());
        setName("")
        Keyboard.dismiss();
    }

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        style={[styles.input, nameError && styles.inputError]}
        onChangeText={handleNameChange}
      />

      <TextInput
        keyboardType="number-pad"
        style={[styles.input, nameError && styles.inputError]}
      />
          
      {nameError && <Text style={styles.errorText}>Name is required</Text>}
      <Separator size={20} />
      <Button text="Add Product" onPress={addHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    },
    errorText: {
        color: 'red',
        marginTop: 5
    },
    inputError: {
        borderColor: 'red'
    }
});

export default ProductForm;
