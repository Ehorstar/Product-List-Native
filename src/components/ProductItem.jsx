import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Button from '../ui/components/Button/Button';

const ProductItem = ({product, buyProduct, removeProduct}) => {
    return (
        <View style={styles.container}>
            
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Switch value={product.buy} onValueChange={buyProduct} />
            <Text
              style={[
                styles.name,
                {
                  textDecorationLine: product.buy ? "line-through" : "none",
                  color: product.buy ? "gray" : "red",
                },
              ]}
            >
              {product.name}
                </Text>
        </View>
            
        <Button text="Remove" onPress={removeProduct} variant="danger" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        // Android
        elevation: 4,
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal:15
    },
    name: {
        fontSize: 16
    }
})

export default ProductItem;
