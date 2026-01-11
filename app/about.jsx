import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (
      <View style={styles.container}>
            <Text style={styles.heading}>About</Text>
            <Link href="/">Home</Link>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default About;
