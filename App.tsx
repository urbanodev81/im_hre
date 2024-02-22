
import { StyleSheet, Text, TextComponent, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text key='1' style={styles.eventName}>Open up App.tsx to start working on your app!33</Text>
      <Text key='2' style={{ 
        color:'red',
        fontSize: 16
       }}>Open up App.tsx to start working on your</Text>
       <Text style={styles.eventDate}>
        é hoje
       </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:'#000000',
    padding: 24
  },

  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  }
})