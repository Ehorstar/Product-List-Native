import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';



 function Main() {
  const pod = useSafeAreaInsets();
  return (
    <View style={{flex: 1, paddingTop: pod.top }}>
      <Text style={{ backgroundColor: 'red' }}>
        start <Text style={{ backgroundColor: 'yellow' }}>working</Text> on your app!
      </Text>
      <Text style={styles.heading}>My App</Text>
      <Text numberOfLines={2} ellipsizeMode='tail'>React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a {'\n'}narrow screen). </Text>
    </View>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}; 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


export default App;