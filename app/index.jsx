import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Separator from '../src/ui/components/Separator/Separator';

const Index = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Home</Text>
        <Separator size={20} />
        <Link href="/about">About</Link>
        <Separator size={10} />
        <Link href="/productList">Product list</Link>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Index;
