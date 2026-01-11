import { Button as ButtonRN, FlatList, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './src/ui/components/Button/Button';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Separator from './src/ui/components/Separator/Separator';
import { useState } from 'react';
import AppModal from './src/ui/components/AppModal/AppModal';
import { products } from './src/data/products';


export default function App() {
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    alert('You clicked the button!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My App</Text>
      <ButtonRN title='Click me' onPress={handlePress} color='red' disabled />

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        hitSlop={20}
      >
        <Text style={{ color: 'white' }}>Press me</Text>
      </Pressable>

      <Separator size={20} />

      <Button
        text='Click me'
        onPress={() => setVisible(true)}
        variant='danger'
        disabled={false}
        icon={<EvilIcons name="arrow-right" size={30} color="white" />}
        style={{ alignSelf: 'flex-start' }}
      />

      <AppModal visible={visible} onClose={() => setVisible(false)}>
        <Text>Modal content</Text>
      </AppModal>

      {/* <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <View><Text>{item.title}</Text></View>}
      /> */}

      <View style={{
        backgroundColor: '#ddd',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <Text>Hello</Text>
        <Text style={{alignSelf: 'flex-end'}}>Hello</Text>
        <Text>Hello</Text>


        {/* <View style={{ backgroundColor: 'red', flex: 2 }}></View>
        <View style={{ backgroundColor: 'green', flex: 1 }}></View>
        <View style={{ backgroundColor: 'blue', flex: 1 }}></View> */}
      </View>


      {/* <Separator size={20} />

      <Image
        source={{ uri: 'https://mukachevo.net/uploads/media/images/image/d5/61/d5613d3f9a154db9997217308c5d3cebfsvnk8674igerxe_image.jpg' }}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={require('./assets/favicon.png')}
        style={{ width: 200, height: 100 }}
        resizeMode='cover'
        accessibilityLabel='Icon'
      />

      <ImageBackground
        source={{ uri: 'https://mukachevo.net/uploads/media/images/image/d5/61/d5613d3f9a154db9997217308c5d3cebfsvnk8674igerxe_image.jpg' }}
        style={{ width: '100%', height: 50 }}
      >
        <Text>Hello</Text>
      </ImageBackground> */}



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: 'dodgerblue',
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.6,
  },
  
});
