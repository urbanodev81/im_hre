
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text key='1' style={{ 
        color: '#FFF',
        fontSize: 24,
        marginTop: 10
       }}>Open up App.tsx to start working on your app!qqsssqqqq111qqqqqqqq</Text>
      <Text key='2' style={{ 
        color:'red',
        fontSize: 16
       }}>Open up App.tsx to start working on your app!qqqqqqqqqqqq</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:'#000000'
  }
})